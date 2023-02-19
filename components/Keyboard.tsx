import { Typography } from '@mui/material'
import clsx from 'clsx'
import type { CSSProperties, FunctionComponent } from 'react'
import { keyboards, languages, operatingSystems } from '../utilities/keyboards'
import styles from './Keyboard.module.css'

export interface KeyboardProps {
	operatingSystem: keyof typeof operatingSystems
	language: keyof typeof languages
}

export const Keyboard: FunctionComponent<KeyboardProps> = ({
	operatingSystem,
	language,
}) => {
	const keys = keyboards[operatingSystem][language]

	return (
		<div className={styles.wrapper}>
			<Typography variant="h4" component="h2" gutterBottom>
				{operatingSystems[operatingSystem]}{' '}
				{languages[language].toLocaleLowerCase('cs')}
			</Typography>
			<div className={styles.keyboard}>
				{Object.entries(keys).map(
					([
						name,
						{ position, primary, secondary, tertiary, quaternary, isSpecial },
					]) => (
						<div
							key={name}
							className={clsx(styles.key, isSpecial && styles.is_special)}
							style={
								{
									['--row']: position.row,
									['--column']: position.column,
									['--width']: position.width,
									['--height']: position.height,
								} as CSSProperties
							}
						>
							{primary && <span className={styles.primary}>{primary}</span>}
							{secondary && (
								<span className={styles.secondary}>{secondary}</span>
							)}
							{tertiary && <span className={styles.tertiary}>{tertiary}</span>}
							{quaternary && (
								<span className={styles.quaternary}>{quaternary}</span>
							)}
						</div>
					),
				)}
			</div>
		</div>
	)
}
