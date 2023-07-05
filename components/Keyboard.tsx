import { Typography } from '@mui/material'
import clsx from 'clsx'
import { useMemo, type CSSProperties, type FunctionComponent } from 'react'
import {
	languages,
	operatingSystems,
} from '../utilities/OperatingSystemAndLanguage'
import { hotkeyTargets } from '../utilities/hotkeyTargets'
import { keyboards } from '../utilities/keyboards'
import type { Hotkey } from './Hotkeys'
import { Hotkeys } from './Hotkeys'
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

	const hotkeys = useMemo<Hotkey[]>(
		() =>
			Object.entries(hotkeyTargets).map(([name, target]) => ({
				name,
				label: target.label,
				symbol: target.symbol,
				keys: {},
			})),
		[],
	)

	return (
		<div className={styles.wrapper}>
			<Typography variant="h4" component="h2" gutterBottom>
				{operatingSystems[operatingSystem]}{' '}
				{languages[language].toLocaleLowerCase('cs')}
			</Typography>
			<Hotkeys hotkeys={hotkeys} />
			<div className={styles.keyboard}>
				{Object.entries(keys).map(([name, key]) => (
					<div
						key={name}
						className={clsx(
							styles.key,
							'isSpecial' in key && key.isSpecial && styles.is_special,
						)}
						style={
							{
								['--row']: key.position.row,
								['--column']: key.position.column,
								['--width']: key.position.width,
								['--height']: key.position.height,
							} as CSSProperties
						}
					>
						{'primary' in key && (
							<span className={styles.primary}>{key.primary.label}</span>
						)}
						{'secondary' in key && (
							<span className={styles.secondary}>{key.secondary.label}</span>
						)}
						{'tertiary' in key && (
							<span className={styles.tertiary}>{key.tertiary.label}</span>
						)}
						{'quaternary' in key && (
							<span className={styles.quaternary}>{key.quaternary.label}</span>
						)}
					</div>
				))}
			</div>
		</div>
	)
}
