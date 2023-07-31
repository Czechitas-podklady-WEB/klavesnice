import { Grid } from '@mui/material'
import clsx from 'clsx'
import type { FunctionComponent } from 'react'
import type { hotkeyTargets } from '../utilities/hotkeyTargets'
import type { Key } from '../utilities/keyboards'
import styles from './Hotkeys.module.css'

export type Hotkey = {
	name: keyof typeof hotkeyTargets
	symbol: string
	label: string
	note: string | undefined
	group: 'single' | number
	keys: {
		[name: string]: Key
	}
}

export type HotkeysProps = {
	hotkeys: Hotkey[]
}

export const Hotkeys: FunctionComponent<HotkeysProps> = ({ hotkeys }) => {
	return (
		<Grid container columnSpacing={2} rowSpacing={1}>
			{hotkeys.map(({ name, symbol, label, note, group }) => (
				<Grid item key={name} xs={6} sm={4} md={3} lg={2}>
					<div className={styles.item}>
						<div className={clsx(styles.symbol, styles[`is_group_${group}`])}>
							{symbol}
						</div>
						<div className={styles.text}>
							<div className={styles.label}>{label}</div>
							{note && <div className={styles.note}>{note}</div>}
						</div>
					</div>
				</Grid>
			))}
		</Grid>
	)
}
