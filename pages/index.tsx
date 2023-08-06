import PrintIcon from '@mui/icons-material/Print'
import {
	Button,
	Container,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	Typography,
} from '@mui/material'
import FormControl from '@mui/material/FormControl'
import { useRouter } from 'next/router'
import { useCallback, useMemo } from 'react'
import { HideInPrint } from '../components/HideInPrint'
import { Keyboard } from '../components/Keyboard'
import {
	languages,
	operatingSystems,
} from '../utilities/OperatingSystemAndLanguage'
import { print } from '../utilities/useIsPrinting'
import { hideInPrintClass } from './_app'

const allValue = 'all' as const

export default function Index() {
	const { query, push } = useRouter()

	const { language, system } = query

	const selectedOperatingSystem = useMemo(() => {
		if (typeof system === 'string' && system in operatingSystems) {
			return system
		}
		return allValue
	}, [system])
	const selectedLanguage = useMemo(() => {
		if (typeof language === 'string' && language in languages) {
			return language
		}
		return allValue
	}, [language])

	const changeQuery = useCallback(
		(parameterName: string, value: string) => {
			push({
				query: Object.fromEntries(
					Object.entries({
						...query,
						[parameterName]: value === allValue ? null : value,
					})
						.filter(([, value]) => value !== null)
						.sort((a, b) => a[0].localeCompare(b[0], 'en')),
				),
			})
		},
		[push, query],
	)

	return (
		<Container>
			<HideInPrint>
				<Typography variant="h2" component="h1" gutterBottom>
					Klávesnice
				</Typography>
			</HideInPrint>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={6} className={hideInPrintClass}>
					<FormControl sx={{ minWidth: 160 }} fullWidth>
						<InputLabel id="operating-system-label">Operační systém</InputLabel>
						<Select
							labelId="operating-system-label"
							value={selectedOperatingSystem}
							label="Operační systém"
							onChange={({ target: { value } }) => {
								changeQuery('system', value)
							}}
						>
							<MenuItem value={allValue}>Všechny</MenuItem>
							{Object.entries(operatingSystems).map(([key, value]) => (
								<MenuItem key={key} value={key}>
									{value}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={6} className={hideInPrintClass}>
					<FormControl sx={{ minWidth: 160 }} fullWidth>
						<InputLabel id="language-label">Jazyk</InputLabel>
						<Select
							labelId="language-label"
							value={selectedLanguage}
							label="Jazyk"
							onChange={({ target: { value } }) => {
								changeQuery('language', value)
							}}
						>
							<MenuItem value={allValue}>Všechny</MenuItem>
							{Object.entries(languages).map(([key, value]) => (
								<MenuItem key={key} value={key}>
									{value}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12}>
					{(
						Object.keys(operatingSystems) as (keyof typeof operatingSystems)[]
					).map((operatingSystem) =>
						(Object.keys(languages) as (keyof typeof languages)[]).map(
							(language) =>
								(selectedOperatingSystem === allValue ||
									selectedOperatingSystem === operatingSystem) &&
								(selectedLanguage === allValue ||
									selectedLanguage === language) && (
									<Keyboard
										key={`${operatingSystem}_${language}`}
										operatingSystem={operatingSystem}
										language={language}
									/>
								),
						),
					)}
				</Grid>
				<Grid item xs={12} className={hideInPrintClass}>
					<Typography align="right">
						<Button
							onClick={() => {
								print()
							}}
							variant="outlined"
							endIcon={<PrintIcon />}
						>
							Vytisknout
						</Button>
					</Typography>
				</Grid>
			</Grid>
		</Container>
	)
}
