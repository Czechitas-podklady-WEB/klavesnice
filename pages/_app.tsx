import CssBaseline from '@mui/material/CssBaseline'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from '../components/ThemeProvider'
import '../styles/globals.css'

export const hideInPrintClass = 'hideInPrint'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider>
			<CssBaseline />
			<Head>
				<title>Klávesnice</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Component {...pageProps} />
		</ThemeProvider>
	)
}
