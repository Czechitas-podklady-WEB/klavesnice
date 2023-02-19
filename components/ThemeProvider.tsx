import { useMediaQuery } from '@mui/material'
import {
	createTheme,
	ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles'
import { FunctionComponent, ReactNode, useMemo } from 'react'
import { useIsPrinting } from '../utilities/useIsPrinting'

export interface ThemeProviderProps {
	children: ReactNode
}

export const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({
	children,
}) => {
	const prefersLightMode = useMediaQuery('(prefers-color-scheme: light)', {
		defaultMatches: false, // Prevents white flash in dark theme
	})
	const isPrinting = useIsPrinting()

	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode: prefersLightMode || isPrinting ? 'light' : 'dark',
				},
			}),
		[prefersLightMode, isPrinting],
	)

	return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
}
