import { Typography } from '@mui/material'
import clsx from 'clsx'
import type { CSSProperties } from 'react'
import { useMemo, type FunctionComponent } from 'react'
import type { hotkeyTargets } from '../utilities/hotkeyTargets'
import { relatedHotkeyTargetGroups } from '../utilities/hotkeyTargets'
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
	const relatedHotkeyGroups = useMemo<
		Array<{
			name: string
			hotkeys: Hotkey[]
			preferredColumn?: number
		}>
	>(
		() =>
			relatedHotkeyTargetGroups
				.map(({ name, targets, preferredColumn }) => ({
					name,
					hotkeys: hotkeys.filter((hotkey) => targets.includes(hotkey.name)),
					preferredColumn,
				}))
				.filter(({ hotkeys }) => hotkeys.length > 0),
		[hotkeys],
	)

	return (
		<div className={styles.wrapper}>
			{relatedHotkeyGroups.map(({ name, hotkeys, preferredColumn }, index) => (
				<div
					key={index}
					className={clsx(
						styles.relatedGroup,
						preferredColumn !== undefined && styles.is_columnPreferred,
					)}
					style={
						{
							'--preferredColumn': preferredColumn,
						} as CSSProperties
					}
				>
					<Typography variant="h6" component="h3" gutterBottom>
						{name}
					</Typography>
					<div className={styles.relatedGroup_hotkeys}>
						{hotkeys.map(({ name, symbol, label, note, group }) => (
							<div key={name} className={styles.item}>
								<div
									className={clsx(styles.symbol, styles[`is_group_${group}`])}
								>
									{symbol}
								</div>
								<div className={styles.text}>
									<span className={styles.label}>{label}</span>{' '}
									{note && <span className={styles.note}>({note})</span>}
								</div>
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	)
}
