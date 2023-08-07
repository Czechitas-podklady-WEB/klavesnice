import PrintIcon from '@mui/icons-material/Print'
import {
	Button,
	Container,
	Grid,
	ToggleButton,
	ToggleButtonGroup,
	Typography,
} from '@mui/material'
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
import styles from './index.module.css'

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
				<Grid item xs={12} className={hideInPrintClass}>
					<div className={styles.switchers}>
						<ToggleButtonGroup
							color="primary"
							value={selectedOperatingSystem}
							exclusive
							onChange={(event, newSelectedOperatingSystem) => {
								changeQuery('system', newSelectedOperatingSystem)
							}}
							aria-label="Operační systém"
						>
							<ToggleButton value={allValue}>
								Všechny operační systémy
							</ToggleButton>
							{Object.entries(operatingSystems).map(([key, value]) => (
								<ToggleButton key={key} value={key}>
									{value}
								</ToggleButton>
							))}
						</ToggleButtonGroup>
						<ToggleButtonGroup
							color="secondary"
							value={selectedLanguage}
							exclusive
							onChange={(event, newSelectedLanguage) => {
								changeQuery('language', newSelectedLanguage)
							}}
							aria-label="Jazyk"
						>
							<ToggleButton value={allValue}>Všechny jazyky</ToggleButton>
							{Object.entries(languages).map(([key, value]) => (
								<ToggleButton key={key} value={key}>
									{value}
								</ToggleButton>
							))}
						</ToggleButtonGroup>
						<div className={styles.print}>
							<Button
								onClick={() => {
									print()
								}}
								variant="outlined"
								endIcon={<PrintIcon />}
							>
								Vytisknout
							</Button>
						</div>
					</div>
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
			</Grid>
		</Container>
	)
}
