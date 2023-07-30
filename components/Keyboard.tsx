import { Typography } from '@mui/material'
import clsx from 'clsx'
import { useMemo, type CSSProperties, type FunctionComponent } from 'react'
import {
	languages,
	operatingSystems,
} from '../utilities/OperatingSystemAndLanguage'
import { hotkeyTargets } from '../utilities/hotkeyTargets'
import type { Key } from '../utilities/keyboards'
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
			Object.entries(hotkeyTargets).map((entry) => {
				const name = entry[0] as keyof typeof hotkeyTargets
				const target = entry[1]
				return {
					name,
					label: target.label,
					note: 'note' in target ? target.note : undefined,
					symbol: target.symbol,
					group:
						Math.random() < 0.2
							? 'single'
							: Math.ceil(Math.random() * 3) /* @TODO */,
					keys: Object.fromEntries(
						Object.entries(keys).filter((entry) => {
							const key: Key = entry[1]
							const hotkeyTargets = [
								...(key.primary?.hotkeyTargets ?? []),
								...(key.secondary?.hotkeyTargets ?? []),
								...(key.tertiary?.hotkeyTargets ?? []),
								...(key.quaternary?.hotkeyTargets ?? []),
							]
							return hotkeyTargets?.includes(name)
						}),
					),
				}
			}),
		[keys],
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
							<Part label={key.primary.label} type="primary" group={1} />
						)}
						{'secondary' in key && (
							<Part label={key.secondary.label} type="secondary" group={2} />
						)}
						{'tertiary' in key && (
							<Part
								label={key.tertiary.label}
								type="tertiary"
								group={undefined}
							/>
						)}
						{'quaternary' in key && (
							<Part
								label={key.quaternary.label}
								type="quaternary"
								group="single"
							/>
						)}
					</div>
				))}
			</div>
			<pre>{JSON.stringify(hotkeys, null, 2)}</pre>
		</div>
	)
}

const Part: FunctionComponent<{
	label: string | JSX.Element
	type: 'primary' | 'secondary' | 'tertiary' | 'quaternary'
	group: undefined | 'single' | number
}> = ({ label, type, group }) => {
	return (
		<span
			className={clsx(
				styles.part,
				styles[`is_type_${type}`],
				group && styles[`is_group_${group}`],
			)}
		>
			{label}
		</span>
	)
}
