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
				<meta
					name="description"
					content="Přehled užitečných počítačových kláves a znázornění, jak je napsat."
				/>
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
				<meta
					property="og:image"
					content="https://klavesnice.czechitas-podklady.cz/og-image.jpg"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Component {...pageProps} />
		</ThemeProvider>
	)
}
