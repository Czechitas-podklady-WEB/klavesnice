import { Typography } from '@mui/material'
import clsx from 'clsx'
import { useMemo, type CSSProperties, type FunctionComponent } from 'react'
import {
	languages,
	operatingSystems,
} from '../utilities/OperatingSystemAndLanguage'
import { hotkeyTargets } from '../utilities/hotkeyTargets'
import { isDefined } from '../utilities/isDefined'
import type { Key } from '../utilities/keyboards'
import { keyboards } from '../utilities/keyboards'
import type { Hotkey } from './Hotkeys'
import { Hotkeys } from './Hotkeys'
import styles from './Keyboard.module.css'

export interface KeyboardProps {
	operatingSystem: keyof typeof operatingSystems
	language: keyof typeof languages
}

const types = ['primary', 'secondary', 'tertiary', 'quaternary'] as const
type Type = (typeof types)[number]

export const Keyboard: FunctionComponent<KeyboardProps> = ({
	operatingSystem,
	language,
}) => {
	const keys = keyboards[operatingSystem][language]

	const hotkeys = useMemo<Hotkey[]>(() => {
		const keyPartBaseGroups = Object.values(keys)
			.filter((key: Key) => key.isSpecial)
			.flatMap((key: Key) =>
				[key.primary, key.secondary, key.tertiary, key.quaternary]
					.filter(isDefined)
					.filter((part) => (part.hotkeyTargets?.length ?? 0) > 0),
			)
		return Object.entries(hotkeyTargets).map((entry) => {
			const name = entry[0] as keyof typeof hotkeyTargets
			const target = entry[1]
			const targetKeys = Object.fromEntries(
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
			)
			const groupIndex = keyPartBaseGroups.findIndex((baseGroup) =>
				baseGroup.hotkeyTargets?.some((target) => target === name),
			)
			return {
				name,
				label: target.label,
				note: 'note' in target ? target.note : undefined,
				symbol: target.symbol,
				group: groupIndex === -1 ? 'single' : groupIndex + 1,
				keys: targetKeys,
			}
		})
	}, [keys])

	const keyGroups = useMemo<{
		[name: string]: {
			[type in Type]: Array<'single' | number>
		}
	}>(() => {
		return Object.fromEntries(
			Object.entries(keys).map((entry) => {
				const name = entry[0]
				const key = entry[1] as Key
				const findGroups = (type: Type) => {
					const hotkeyTargets = key[type]?.hotkeyTargets ?? []
					const groups = hotkeys
						.filter((hotkey) => hotkeyTargets.includes(hotkey.name))
						.map((hotkey) => hotkey.group)
					return groups
				}
				return [
					name,
					{
						primary: findGroups('primary'),
						secondary: findGroups('secondary'),
						tertiary: findGroups('tertiary'),
						quaternary: findGroups('quaternary'),
					},
				]
			}),
		)
	}, [hotkeys, keys])

	return (
		<div className={styles.wrapper}>
			<Typography variant="h4" component="h2" gutterBottom>
				{operatingSystems[operatingSystem]}{' '}
				{languages[language].toLocaleLowerCase('cs')}
			</Typography>
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
							<Part
								label={key.primary.label}
								type="primary"
								groups={keyGroups[name]['primary']}
							/>
						)}
						{'secondary' in key && (
							<Part
								label={key.secondary.label}
								type="secondary"
								groups={keyGroups[name]['secondary']}
							/>
						)}
						{'tertiary' in key && (
							<Part
								label={key.tertiary.label}
								type="tertiary"
								groups={keyGroups[name]['tertiary']}
							/>
						)}
						{'quaternary' in key && (
							<Part
								label={key.quaternary.label}
								type="quaternary"
								groups={keyGroups[name]['quaternary']}
							/>
						)}
					</div>
				))}
			</div>
			<div className={styles.hotkeys}>
				<Hotkeys hotkeys={hotkeys} />
			</div>
			{/* @TODO: remove <pre>{JSON.stringify(hotkeys, null, 2)}</pre> */}
		</div>
	)
}

const Part: FunctionComponent<{
	label: string | JSX.Element
	type: Type
	groups: Array<'single' | number>
}> = ({ label, type, groups }) => {
	return (
		<span
			className={clsx(
				styles.part,
				styles[`is_type_${type}`],
				groups.map((group) => styles[`is_group_${group}`]),
			)}
		>
			{label}
		</span>
	)
}
