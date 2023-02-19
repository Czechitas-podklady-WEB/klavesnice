import { Typography } from '@mui/material'
import type { FunctionComponent } from 'react'
import styles from './Keyboard.module.css'

export const operatingSystems = {
	windows: 'Windows',
	mac: 'Mac',
} as const
export const languages = {
	cs: 'Čeština',
	en_us: 'Americká angličtina',
} as const

export interface KeyboardProps {
	operatingSystem: keyof typeof operatingSystems
	language: keyof typeof languages
}

export const Keyboard: FunctionComponent<KeyboardProps> = ({
	operatingSystem,
	language,
}) => {
	return (
		<div className={styles.wrapper}>
			<Typography variant="h4" component="h2" gutterBottom>
				Klávesnice {operatingSystems[operatingSystem]} {languages[language]}
			</Typography>
			☑️☑️☑️☑️☑️☑️☑️
		</div>
	)
}
