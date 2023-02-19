import {
	Container,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	Typography,
} from '@mui/material'
import FormControl from '@mui/material/FormControl'
import { useState } from 'react'
import { Images } from '../components/Images'

export default function Index() {
	const [operatingSystem, setOperatingSystem] = useState<
		'all' | 'windows' | 'mac'
	>('all')
	const [language, setLanguage] = useState<'all' | 'cs' | 'en-us'>('all')

	return (
		<Container>
			<Typography variant="h2" component="h1" gutterBottom>
				Klávesnice
			</Typography>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={6}>
					<FormControl sx={{ minWidth: 160 }} fullWidth>
						<InputLabel id="operating-system-label">Operační systém</InputLabel>
						<Select
							labelId="operating-system-label"
							value={operatingSystem}
							label="Operační systém"
							onChange={(event) => {
								setOperatingSystem(event.target.value as any)
							}}
						>
							<MenuItem value="all">Všechny</MenuItem>
							<MenuItem value="windows">Windows</MenuItem>
							<MenuItem value="mac">Mac</MenuItem>
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={6}>
					<FormControl sx={{ minWidth: 160 }} fullWidth>
						<InputLabel id="language-label">Jazyk</InputLabel>
						<Select
							labelId="language-label"
							value={language}
							label="Jazyk"
							onChange={(event) => {
								setLanguage(event.target.value as any)
							}}
						>
							<MenuItem value="all">Všechny</MenuItem>
							<MenuItem value="cs">Čeština</MenuItem>
							<MenuItem value="en-us">Americká angličtina</MenuItem>
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12}>
					<Images />
				</Grid>
			</Grid>
		</Container>
	)
}
