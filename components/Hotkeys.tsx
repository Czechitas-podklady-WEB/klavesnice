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
			{hotkeys.map(({ name, symbol, label, note, group }) => (
				<Grid item key={name} xs={6} sm={4} md={3} lg={2}>
					<span
						style={
							{
								display: 'inline-block',
								borderRadius: '0.2em',
								padding: '0 0.2em',
								minWidth: '1.5em',
								textAlign: 'center',
								boxShadow: `inset 0 0 100rem var(--group-color-${group})`,
							} /* @TODO: rewrite to CSS file */
						}
					>
						{symbol}
					</span>
					<br />
					<ListItemText primary={label} secondary={note} />{' '}
					{/* @TODO: improve style */}
				</Grid>
			))}
		</Grid>
	)
}
