import type { ReactNode } from 'react'
import { Icon } from '../components/Icon'
import type { hotkeyTargets } from './hotkeyTargets'
import type { OperatingSystemAndLanguage } from './OperatingSystemAndLanguage'

export type Position = {
	row: number
	column: number
	width: number
	height: number
}

export type KeyPart = {
	label: ReactNode
	hotkeyTargets?: Array<keyof typeof hotkeyTargets>
}

export type Key = {
	primary?: KeyPart
	secondary?: KeyPart
	tertiary?: KeyPart
	quaternary?: KeyPart
	isSpecial?: boolean
	position: Position
}

export const keyboards = {
	windows: {
		cs: {
			belowEscape: {
				quaternary: { label: ';' },
				position: { row: 1, column: 1, width: 3, height: 1 },
			},
			one: {
				secondary: { label: '1' },
				quaternary: { label: '+', hotkeyTargets: ['plus'] },
				position: { row: 1, column: 4, width: 3, height: 1 },
			},
			two: {
				secondary: { label: '2' },
				quaternary: { label: 'ě' },
				position: { row: 1, column: 7, width: 3, height: 1 },
			},
			three: {
				secondary: { label: '3' },
				quaternary: { label: 'š' },
				position: { row: 1, column: 10, width: 3, height: 1 },
			},
			four: {
				secondary: { label: '4' },
				quaternary: { label: 'č' },
				position: { row: 1, column: 13, width: 3, height: 1 },
			},
			five: {
				secondary: { label: '5' },
				quaternary: { label: 'ř' },
				position: { row: 1, column: 16, width: 3, height: 1 },
			},
			six: {
				secondary: { label: '6' },
				quaternary: { label: 'ž' },
				position: { row: 1, column: 19, width: 3, height: 1 },
			},
			seven: {
				secondary: { label: '7' },
				quaternary: { label: 'ý' },
				position: { row: 1, column: 22, width: 3, height: 1 },
			},
			eight: {
				secondary: { label: '8' },
				quaternary: { label: 'á' },
				position: { row: 1, column: 25, width: 3, height: 1 },
			},
			nine: {
				secondary: { label: '9' },
				quaternary: { label: 'í' },
				position: { row: 1, column: 28, width: 3, height: 1 },
			},
			zero: {
				secondary: { label: '0' },
				quaternary: { label: 'é' },
				position: { row: 1, column: 31, width: 3, height: 1 },
			},
			equal: {
				secondary: { label: '%', hotkeyTargets: ['percentage'] },
				quaternary: { label: '=' },
				position: { row: 1, column: 34, width: 3, height: 1 },
			},
			punctuation: {
				primary: { label: '+' },
				position: { row: 1, column: 37, width: 3, height: 1 },
			},
			backspace: {
				primary: { label: 'Backspace' },
				isSpecial: true,
				position: { row: 1, column: 40, width: 6, height: 1 },
			},
			tab: {
				primary: { label: 'Tab' },
				isSpecial: true,
				position: { row: 2, column: 1, width: 4, height: 1 },
			},
			q: {
				primary: { label: 'Q' },
				secondary: { label: '\\' },
				position: { row: 2, column: 5, width: 3, height: 1 },
			},
			w: {
				primary: { label: 'W' },
				secondary: { label: '|' },
				position: { row: 2, column: 8, width: 3, height: 1 },
			},
			e: {
				primary: { label: 'E' },
				secondary: { label: '€' },
				position: { row: 2, column: 11, width: 3, height: 1 },
			},
			r: {
				primary: { label: 'R' },
				secondary: { label: '|' },
				position: { row: 2, column: 14, width: 3, height: 1 },
			},
			t: {
				primary: { label: 'T' },
				secondary: { label: '|' },
				position: { row: 2, column: 17, width: 3, height: 1 },
			},
			z: {
				primary: { label: 'Z' },
				position: { row: 2, column: 20, width: 3, height: 1 },
			},
			u: {
				primary: { label: 'U' },
				position: { row: 2, column: 23, width: 3, height: 1 },
			},
			i: {
				primary: { label: 'I' },
				position: { row: 2, column: 26, width: 3, height: 1 },
			},
			o: {
				primary: { label: 'O' },
				position: { row: 2, column: 29, width: 3, height: 1 },
			},
			p: {
				primary: { label: 'P' },
				position: { row: 2, column: 32, width: 3, height: 1 },
			},
			openBracket: {
				quaternary: { label: 'ú', hotkeyTargets: ['slash'] },
				position: { row: 2, column: 35, width: 3, height: 1 },
			},
			closeBracket: {
				secondary: { label: '(' },
				quaternary: { label: ')' },
				position: { row: 2, column: 38, width: 3, height: 1 },
			},
			enter: {
				primary: { label: 'Enter' },
				isSpecial: true,
				position: { row: 3, column: 39, width: 7, height: 1 },
			},
			capsLock: {
				primary: { label: 'Caps Lock' },
				isSpecial: true,
				position: { row: 3, column: 1, width: 5, height: 1 },
			},
			a: {
				primary: { label: 'A' },
				position: { row: 3, column: 6, width: 3, height: 1 },
			},
			s: {
				primary: { label: 'S' },
				position: { row: 3, column: 9, width: 3, height: 1 },
			},
			d: {
				primary: { label: 'D' },
				position: { row: 3, column: 12, width: 3, height: 1 },
			},
			f: {
				primary: { label: 'F' },
				position: { row: 3, column: 15, width: 3, height: 1 },
			},
			g: {
				primary: { label: 'G' },
				position: { row: 3, column: 18, width: 3, height: 1 },
			},
			h: {
				primary: { label: 'H' },
				position: { row: 3, column: 21, width: 3, height: 1 },
			},
			j: {
				primary: { label: 'J' },
				position: { row: 3, column: 24, width: 3, height: 1 },
			},
			k: {
				primary: { label: 'K' },
				position: { row: 3, column: 27, width: 3, height: 1 },
			},
			l: {
				primary: { label: 'L' },
				position: { row: 3, column: 30, width: 3, height: 1 },
			},
			openQuotes: {
				quaternary: { label: 'ů' },
				position: { row: 3, column: 33, width: 3, height: 1 },
			},
			closeQuotes: {
				quaternary: { label: '§' },
				position: { row: 3, column: 36, width: 3, height: 1 },
			},
			apostrophe: {
				secondary: { label: "'" },
				position: { row: 2, column: 41, width: 5, height: 1 },
			},
			leftShift: {
				primary: { label: 'Shift', hotkeyTargets: ['slash', 'percentage'] },
				isSpecial: true,
				position: { row: 4, column: 1, width: 4, height: 1 },
			},
			pipe: {
				primary: { label: '|' },
				secondary: { label: '\\' },
				position: { row: 4, column: 5, width: 3, height: 1 },
			},
			y: {
				primary: { label: 'Y' },
				position: { row: 4, column: 8, width: 3, height: 1 },
			},
			x: {
				primary: { label: 'X' },
				position: { row: 4, column: 11, width: 3, height: 1 },
			},
			c: {
				primary: { label: 'C' },
				position: { row: 4, column: 14, width: 3, height: 1 },
			},
			v: {
				primary: { label: 'V' },
				position: { row: 4, column: 17, width: 3, height: 1 },
			},
			b: {
				primary: { label: 'B' },
				position: { row: 4, column: 20, width: 3, height: 1 },
			},
			n: {
				primary: { label: 'N' },
				position: { row: 4, column: 23, width: 3, height: 1 },
			},
			m: {
				primary: { label: 'M' },
				position: { row: 4, column: 26, width: 3, height: 1 },
			},
			comma: {
				tertiary: { label: ',' },
				position: { row: 4, column: 29, width: 3, height: 1 },
			},
			stop: {
				tertiary: { label: '.' },
				position: { row: 4, column: 32, width: 3, height: 1 },
			},
			minus: {
				tertiary: { label: '*' },
				secondary: { label: '_' },
				quaternary: { label: '-', hotkeyTargets: ['minus', 'asterisk'] },
				position: { row: 4, column: 35, width: 3, height: 1 },
			},
			rightShift: {
				primary: { label: 'Shift' },
				isSpecial: true,
				position: { row: 4, column: 38, width: 8, height: 1 },
			},
			leftControl: {
				primary: { label: 'Ctrl' },
				isSpecial: true,
				position: { row: 5, column: 1, width: 5, height: 1 },
			},
			system: {
				primary: { label: <Icon name="windowsLogo" /> },
				isSpecial: true,
				position: { row: 5, column: 6, width: 4, height: 1 },
			},
			alt: {
				primary: { label: 'Alt' },
				isSpecial: true,
				position: { row: 5, column: 10, width: 4, height: 1 },
			},
			spacebar: {
				primary: { label: 'Spacebar' },
				isSpecial: true,
				position: { row: 5, column: 14, width: 20, height: 1 },
			},
			altGr: {
				primary: { label: 'Alt Gr', hotkeyTargets: ['asterisk'] },
				isSpecial: true,
				position: { row: 5, column: 34, width: 4, height: 1 },
			},
			fn: {
				primary: { label: 'Fn' },
				isSpecial: true,
				position: { row: 5, column: 38, width: 4, height: 1 },
			},
			rightControl: {
				primary: { label: 'Ctrl' },
				isSpecial: true,
				position: { row: 5, column: 42, width: 4, height: 1 },
			},
		},
		en_us: {
			belowEscape: {
				primary: { label: '~' },
				tertiary: { label: '`' },
				position: { row: 1, column: 1, width: 3, height: 1 },
			},
		},
	},
	mac: {
		cs: {},
		en_us: {},
	},
} satisfies Readonly<OperatingSystemAndLanguage<{ [name: string]: Key }>>
