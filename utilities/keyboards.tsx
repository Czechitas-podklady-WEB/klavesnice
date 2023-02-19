import { ReactNode } from 'react'
import { Icon } from '../components/Icon'

export type Position = {
	row: number
	column: number
	width: number
	height: number
}

export type Key = {
	primary?: ReactNode
	secondary?: ReactNode
	tertiary?: ReactNode
	quaternary?: ReactNode
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
			four: {
				secondary: '4',
				quaternary: 'č',
				position: { row: 1, column: 13, width: 3, height: 1 },
			},
			five: {
				secondary: '5',
				quaternary: 'ř',
				position: { row: 1, column: 16, width: 3, height: 1 },
			},
			six: {
				secondary: '6',
				quaternary: 'ž',
				position: { row: 1, column: 19, width: 3, height: 1 },
			},
			seven: {
				secondary: '7',
				quaternary: 'ý',
				position: { row: 1, column: 22, width: 3, height: 1 },
			},
			eight: {
				secondary: '8',
				quaternary: 'á',
				position: { row: 1, column: 25, width: 3, height: 1 },
			},
			nine: {
				secondary: '9',
				quaternary: 'í',
				position: { row: 1, column: 28, width: 3, height: 1 },
			},
			zero: {
				secondary: '0',
				quaternary: 'é',
				position: { row: 1, column: 31, width: 3, height: 1 },
			},
			equal: {
				secondary: '%',
				quaternary: '=',
				position: { row: 1, column: 34, width: 3, height: 1 },
			},
			punctuation: {
				primary: '+',
				position: { row: 1, column: 37, width: 3, height: 1 },
			},
			backspace: {
				primary: 'Backspace',
				isSpecial: true,
				position: { row: 1, column: 40, width: 6, height: 1 },
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
			z: {
				primary: 'Z',
				position: { row: 2, column: 20, width: 3, height: 1 },
			},
			u: {
				primary: 'U',
				position: { row: 2, column: 23, width: 3, height: 1 },
			},
			i: {
				primary: 'I',
				position: { row: 2, column: 26, width: 3, height: 1 },
			},
			o: {
				primary: 'O',
				position: { row: 2, column: 29, width: 3, height: 1 },
			},
			p: {
				primary: 'P',
				position: { row: 2, column: 32, width: 3, height: 1 },
			},
			openBracket: {
				quaternary: 'ú',
				position: { row: 2, column: 35, width: 3, height: 1 },
			},
			closeBracket: {
				secondary: '(',
				quaternary: ')',
				position: { row: 2, column: 38, width: 3, height: 1 },
			},
			enter: {
				primary: 'Enter',
				isSpecial: true,
				position: { row: 3, column: 39, width: 7, height: 1 },
			},
			capsLock: {
				primary: 'Caps Lock',
				isSpecial: true,
				position: { row: 3, column: 1, width: 5, height: 1 },
			},
			a: {
				primary: 'A',
				position: { row: 3, column: 6, width: 3, height: 1 },
			},
			s: {
				primary: 'S',
				position: { row: 3, column: 9, width: 3, height: 1 },
			},
			d: {
				primary: 'D',
				position: { row: 3, column: 12, width: 3, height: 1 },
			},
			f: {
				primary: 'F',
				position: { row: 3, column: 15, width: 3, height: 1 },
			},
			g: {
				primary: 'G',
				position: { row: 3, column: 18, width: 3, height: 1 },
			},
			h: {
				primary: 'H',
				position: { row: 3, column: 21, width: 3, height: 1 },
			},
			j: {
				primary: 'J',
				position: { row: 3, column: 24, width: 3, height: 1 },
			},
			k: {
				primary: 'K',
				position: { row: 3, column: 27, width: 3, height: 1 },
			},
			l: {
				primary: 'L',
				position: { row: 3, column: 30, width: 3, height: 1 },
			},
			openQuotes: {
				quaternary: 'ů',
				position: { row: 3, column: 33, width: 3, height: 1 },
			},
			closeQuotes: {
				quaternary: '§',
				position: { row: 3, column: 36, width: 3, height: 1 },
			},
			apostrophe: {
				secondary: "'",
				position: { row: 2, column: 41, width: 5, height: 1 },
			},
			leftShift: {
				primary: 'Shift',
				isSpecial: true,
				position: { row: 4, column: 1, width: 4, height: 1 },
			},
			pipe: {
				primary: '|',
				secondary: '\\',
				position: { row: 4, column: 5, width: 3, height: 1 },
			},
			y: {
				primary: 'Y',
				position: { row: 4, column: 8, width: 3, height: 1 },
			},
			x: {
				primary: 'X',
				position: { row: 4, column: 11, width: 3, height: 1 },
			},
			c: {
				primary: 'C',
				position: { row: 4, column: 14, width: 3, height: 1 },
			},
			v: {
				primary: 'V',
				position: { row: 4, column: 17, width: 3, height: 1 },
			},
			b: {
				primary: 'B',
				position: { row: 4, column: 20, width: 3, height: 1 },
			},
			n: {
				primary: 'N',
				position: { row: 4, column: 23, width: 3, height: 1 },
			},
			m: {
				primary: 'M',
				position: { row: 4, column: 26, width: 3, height: 1 },
			},
			comma: {
				tertiary: ',',
				position: { row: 4, column: 29, width: 3, height: 1 },
			},
			stop: {
				tertiary: '.',
				position: { row: 4, column: 32, width: 3, height: 1 },
			},
			minus: {
				quaternary: '-',
				position: { row: 4, column: 35, width: 3, height: 1 },
			},
			rightShift: {
				primary: 'Shift',
				isSpecial: true,
				position: { row: 4, column: 38, width: 8, height: 1 },
			},
			leftControl: {
				primary: 'Ctrl',
				isSpecial: true,
				position: { row: 5, column: 1, width: 5, height: 1 },
			},
			system: {
				primary: <Icon name="windowsLogo" />,
				isSpecial: true,
				position: { row: 5, column: 6, width: 4, height: 1 },
			},
			alt: {
				primary: 'Alt',
				isSpecial: true,
				position: { row: 5, column: 10, width: 4, height: 1 },
			},
			spacebar: {
				primary: 'Spacebar',
				isSpecial: true,
				position: { row: 5, column: 14, width: 20, height: 1 },
			},
			altGr: {
				primary: 'Alt Gr',
				isSpecial: true,
				position: { row: 5, column: 34, width: 4, height: 1 },
			},
			fn: {
				primary: 'Fn',
				isSpecial: true,
				position: { row: 5, column: 38, width: 4, height: 1 },
			},
			rightControl: {
				primary: 'Ctrl',
				isSpecial: true,
				position: { row: 5, column: 42, width: 4, height: 1 },
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
