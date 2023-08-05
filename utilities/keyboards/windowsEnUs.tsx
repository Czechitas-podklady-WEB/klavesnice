import { Icon } from '../../components/Icon'
import type { Keyboard } from './Key'

export const windowsEnUs = {
	belowEscape: {
		primary: { label: '~' },
		secondary: { label: '°' },
		tertiary: { label: '`' },
		quaternary: { label: ';' },
		position: { row: 1, column: 1, width: 3, height: 1 },
	},
	one: {
		primary: { label: '!' },
		secondary: { label: '1' },
		tertiary: { label: '~' },
		quaternary: { label: '+' },
		position: { row: 1, column: 4, width: 3, height: 1 },
	},
	two: {
		primary: { label: '@' },
		secondary: { label: '2' },
		quaternary: { label: 'ě' },
		position: { row: 1, column: 7, width: 3, height: 1 },
	},
	three: {
		primary: { label: '#' },
		secondary: { label: '3' },
		tertiary: { label: '^' },
		quaternary: { label: 'š' },
		position: { row: 1, column: 10, width: 3, height: 1 },
	},
	four: {
		primary: { label: '$' },
		secondary: { label: '4' },
		quaternary: { label: 'č' },
		position: { row: 1, column: 13, width: 3, height: 1 },
	},
	five: {
		primary: { label: '%' },
		secondary: { label: '5' },
		quaternary: { label: 'ř' },
		position: { row: 1, column: 16, width: 3, height: 1 },
	},
	six: {
		primary: { label: '^' },
		secondary: { label: '6' },
		quaternary: { label: 'ž' },
		position: { row: 1, column: 19, width: 3, height: 1 },
	},
	seven: {
		primary: { label: '&' },
		secondary: { label: '7' },
		tertiary: { label: '`' },
		quaternary: { label: 'ý' },
		position: { row: 1, column: 22, width: 3, height: 1 },
	},
	eight: {
		primary: { label: '*' },
		secondary: { label: '8' },
		quaternary: { label: 'á' },
		position: { row: 1, column: 25, width: 3, height: 1 },
	},
	nine: {
		primary: { label: '(' },
		secondary: { label: '9' },
		quaternary: { label: 'í' },
		position: { row: 1, column: 28, width: 3, height: 1 },
	},
	zero: {
		primary: { label: ')' },
		secondary: { label: '0' },
		quaternary: { label: 'é' },
		position: { row: 1, column: 31, width: 3, height: 1 },
	},
	equal: {
		secondary: { label: '%' },
		tertiary: { label: '_' },
		quaternary: { label: '=' },
		position: { row: 1, column: 34, width: 3, height: 1 },
	},
	punctuation: {
		primary: { label: '+' },
		secondary: { label: 'ˇ' },
		tertiary: { label: '=' },
		quaternary: { label: '´' },
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
		position: { row: 2, column: 14, width: 3, height: 1 },
	},
	t: {
		primary: { label: 'T' },
		position: { row: 2, column: 17, width: 3, height: 1 },
	},
	z: {
		primary: { label: 'Z' },
		quaternary: { label: 'Y' },
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
		primary: { label: '{' },
		secondary: { label: '/' },
		tertiary: { label: '[' },
		quaternary: { label: 'ú' },
		position: { row: 2, column: 35, width: 3, height: 1 },
	},
	closeBracket: {
		primary: { label: '}' },
		secondary: { label: '(' },
		tertiary: { label: ']' },
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
		quaternary: { label: '[' },
		position: { row: 3, column: 15, width: 3, height: 1 },
	},
	g: {
		primary: { label: 'G' },
		quaternary: { label: ']' },
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
		primary: { label: '$' },
		secondary: { label: '"' },
		tertiary: { label: ';' },
		quaternary: { label: 'ů' },
		position: { row: 3, column: 33, width: 3, height: 1 },
	},
	closeQuotes: {
		primary: { label: '"' },
		secondary: { label: '!' },
		tertiary: { label: "'" },
		quaternary: { label: '§' },
		position: { row: 3, column: 36, width: 3, height: 1 },
	},
	apostrophe: {
		primary: { label: '|' },
		secondary: { label: "'" },
		tertiary: { label: '\\' },
		position: { row: 2, column: 41, width: 5, height: 1 },
	},
	leftShift: {
		primary: {
			label: 'Shift',
		},
		isSpecial: true,
		position: { row: 4, column: 1, width: 4, height: 1 },
	},
	pipe: {
		primary: { label: '|' },
		tertiary: { label: '\\' },
		position: { row: 4, column: 5, width: 3, height: 1 },
	},
	y: {
		primary: { label: 'Y' },
		quaternary: { label: 'Z' },
		position: { row: 4, column: 8, width: 3, height: 1 },
	},
	x: {
		primary: { label: 'X' },
		quaternary: { label: '#' },
		position: { row: 4, column: 11, width: 3, height: 1 },
	},
	c: {
		primary: { label: 'C' },
		quaternary: { label: '&' },
		position: { row: 4, column: 14, width: 3, height: 1 },
	},
	v: {
		primary: { label: 'V' },
		quaternary: { label: '@' },
		position: { row: 4, column: 17, width: 3, height: 1 },
	},
	b: {
		primary: { label: 'B' },
		quaternary: { label: '{' },
		position: { row: 4, column: 20, width: 3, height: 1 },
	},
	n: {
		primary: { label: 'N' },
		quaternary: { label: '}' },
		position: { row: 4, column: 23, width: 3, height: 1 },
	},
	m: {
		primary: { label: 'M' },
		position: { row: 4, column: 26, width: 3, height: 1 },
	},
	comma: {
		primary: { label: '<' },
		secondary: { label: '?' },
		tertiary: { label: ',' },
		position: { row: 4, column: 29, width: 3, height: 1 },
	},
	stop: {
		primary: { label: '>' },
		secondary: { label: ':' },
		tertiary: { label: '.', hotkeyTargets: ['picker'] },
		position: { row: 4, column: 32, width: 3, height: 1 },
	},
	minus: {
		primary: { label: '?' },
		secondary: { label: '_' },
		tertiary: { label: '*' },
		quaternary: { label: '-' },
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
		primary: {
			label: <Icon name="windowsLogo" />,
			hotkeyTargets: ['picker'],
		},
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
		primary: {
			label: 'Alt Gr',
		},
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
} satisfies Keyboard
