import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang="cs">
			<Head>
				<meta name="color-scheme" content="light dark" />
				<link rel="shortcut icon" href="icon.svg" />
				<meta
					name="theme-color"
					media="(prefers-color-scheme: light)"
					content="#ffffff"
				/>
				<meta
					name="theme-color"
					media="(prefers-color-scheme: dark)"
					content="#121212"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
