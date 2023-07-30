import { Grid, ListItemText } from '@mui/material'
import type { FunctionComponent } from 'react'
import type { hotkeyTargets } from '../utilities/hotkeyTargets'
import type { Key } from '../utilities/keyboards'

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
			{hotkeys.map(({ name, symbol, label, note }) => (
				<Grid item key={name} xs={6} sm={4} md={3} lg={2}>
					{symbol}
					<br />
					<ListItemText primary={label} secondary={note} />{' '}
					{/* @TODO: improve style */}
				</Grid>
			))}
		</Grid>
	)
}
