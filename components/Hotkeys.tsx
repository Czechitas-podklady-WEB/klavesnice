import { List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import type { FunctionComponent } from 'react'
import type { hotkeyTargets } from '../utilities/hotkeyTargets'
import type { Key } from '../utilities/keyboards'

export type Hotkey = {
	name: keyof typeof hotkeyTargets
	symbol: string
	label: string
	keys: {
		[name: string]: Key
	}
}

export type HotkeysProps = {
	hotkeys: Hotkey[]
}

export const Hotkeys: FunctionComponent<HotkeysProps> = ({ hotkeys }) => {
	return (
		<List dense>
			{hotkeys.map(({ name, symbol, label }) => (
				<ListItem key={name}>
					<ListItemAvatar>{symbol}</ListItemAvatar>
					<ListItemText primary={label} />
				</ListItem>
			))}
		</List>
	)
}
