import clsx from 'clsx'
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
		}>
	>(
		() =>
			relatedHotkeyTargetGroups
				.map(({ name, targets }) => ({
					name,
					hotkeys: hotkeys.filter((hotkey) => targets.includes(hotkey.name)),
				}))
				.filter(({ hotkeys }) => hotkeys.length > 0),
		[hotkeys],
	)

	return (
		<div className={styles.wrapper}>
			{relatedHotkeyGroups.map(({ name, hotkeys }, index) => (
				<div key={index} className={styles.relatedGroup}>
					{name && <h3 className={styles.relatedGroup_name}>{name}</h3>}
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
