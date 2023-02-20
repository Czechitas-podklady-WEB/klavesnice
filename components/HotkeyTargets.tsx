import { List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import type { FunctionComponent } from 'react'
import { hotkeyTargets } from '../utilities/hotkeyTargets'

export type HotkeyTargetsProps = Record<string, never>

export const HotkeyTargets: FunctionComponent<HotkeyTargetsProps> = () => {
	return (
		<List dense>
			{Object.entries(hotkeyTargets).map(([name, { symbol, label }]) => (
				<ListItem key={name}>
					<ListItemAvatar>{symbol}</ListItemAvatar>
					<ListItemText primary={label} />
				</ListItem>
			))}
		</List>
	)
}
