export type Position = {
	row: number
	column: number
	width: number
	height: number
}

export type Key = {
	primary?: string
	secondary?: string
	tertiary?: string
	quaternary?: string
	isSpecial?: boolean
	position: Position
}

export const operatingSystems = {
	windows: 'Windows',
	mac: 'Mac',
} as const
export const languages = {
	cs: 'Čeština',
	en_us: 'Americká angličtina',
} as const

export const keyboards: {
	[operatingSystem in keyof typeof operatingSystems]: {
		[language in keyof typeof languages]: {
			[name: string]: Key
		}
	}
} = {
	windows: {
		cs: {
			belowEscape: {
				quaternary: ';',
				position: { row: 1, column: 1, width: 3, height: 1 },
			},
			one: {
				secondary: '1',
				quaternary: '+',
				position: { row: 1, column: 4, width: 3, height: 1 },
			},
			two: {
				secondary: '2',
				quaternary: 'ě',
				position: { row: 1, column: 7, width: 3, height: 1 },
			},
			three: {
				secondary: '3',
				quaternary: 'š',
				position: { row: 1, column: 10, width: 3, height: 1 },
			},
			tab: {
				primary: 'Tab',
				isSpecial: true,
				position: { row: 2, column: 1, width: 4, height: 1 },
			},
			q: {
				primary: 'Q',
				secondary: '\\',
				position: { row: 2, column: 5, width: 3, height: 1 },
			},
			w: {
				primary: 'W',
				secondary: '|',
				position: { row: 2, column: 8, width: 3, height: 1 },
			},
			e: {
				primary: 'E',
				secondary: '€',
				position: { row: 2, column: 11, width: 3, height: 1 },
			},
			r: {
				primary: 'R',
				secondary: '|',
				position: { row: 2, column: 14, width: 3, height: 1 },
			},
			t: {
				primary: 'T',
				secondary: '|',
				position: { row: 2, column: 17, width: 3, height: 1 },
			},
		},
		en_us: {
			belowEscape: {
				primary: '~',
				tertiary: '`',
				position: { row: 1, column: 1, width: 3, height: 1 },
			},
		},
	},
	mac: {
		cs: {},
		en_us: {},
	},
}
