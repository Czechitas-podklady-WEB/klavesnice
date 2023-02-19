import { useMediaQuery } from '@mui/material'
import {
	createTheme,
	ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles'
import { FunctionComponent, ReactNode, useMemo } from 'react'

export interface ThemeProviderProps {
	children: ReactNode
}

export const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({
	children,
}) => {
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)', {
		defaultMatches: true, // Prevents white flash in dark theme
	})

	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode: prefersDarkMode ? 'dark' : 'light',
				},
			}),
		[prefersDarkMode],
	)

	return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
}
