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
import { useCallback, useEffect, useMemo } from 'react'
import { getPlatform } from 'react-use-platform'
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
	const { query, push, isReady } = useRouter()

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
		(parameters: Array<{ name: string; value: string }>) => {
			if (parameters.length === 0) {
				return
			}
			push({
				query: Object.fromEntries(
					Object.entries({
						...query,
						...Object.fromEntries(
							parameters.map(({ name, value }) => [name, value]),
						),
					})
						.filter(([, value]) => value !== null)
						.sort((a, b) => a[0].localeCompare(b[0], 'en')),
				),
			})
		},
		[push, query],
	)

	useEffect(() => {
		const sessionKey = 'visited'
		if (isReady && sessionStorage.getItem(sessionKey) === null) {
			sessionStorage.setItem(sessionKey, 'true')
			if (
				selectedOperatingSystem === allValue &&
				selectedLanguage === allValue
			) {
				const platform = getPlatform()
				changeQuery([
					{
						name: 'system',
						value: platform in operatingSystems ? platform : allValue,
					},
					{ name: 'language', value: 'cs' },
				])
			}
		}
	}, [changeQuery, isReady, selectedLanguage, selectedOperatingSystem])

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
								changeQuery([
									{
										name: 'system',
										value: newSelectedOperatingSystem,
									},
								])
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
							color="primary"
							value={selectedLanguage}
							exclusive
							onChange={(event, newSelectedLanguage) => {
								changeQuery([{ name: 'language', value: newSelectedLanguage }])
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
