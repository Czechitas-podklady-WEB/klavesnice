import { Icon } from '../../components/Icon'
import type { Keyboard } from './Key'

export const macCs = {
	belowEscape: {
		primary: { label: '>', hotkeyTargets: ['greaterThanBracket'] },
		tertiary: { label: '<', hotkeyTargets: ['lowerThanBracket'] },
		position: { row: 1, column: 1, width: 3, height: 1 },
	},
	one: {
		primary: { label: '1' },
		tertiary: { label: '+', hotkeyTargets: ['plus'] },
		position: { row: 1, column: 4, width: 3, height: 1 },
	},
	two: {
		primary: { label: '2' },
		tertiary: { label: 'ě' },
		quaternary: { label: '@', hotkeyTargets: ['atSign'] },
		position: { row: 1, column: 7, width: 3, height: 1 },
	},
	three: {
		primary: { label: '3' },
		tertiary: { label: 'š' },
		quaternary: { label: '#', hotkeyTargets: ['hash'] },
		position: { row: 1, column: 10, width: 3, height: 1 },
	},
	four: {
		primary: { label: '4' },
		tertiary: { label: 'č' },
		quaternary: { label: '$', hotkeyTargets: ['dollar'] },
		position: { row: 1, column: 13, width: 3, height: 1 },
	},
	five: {
		primary: { label: '5' },
		tertiary: { label: 'ř' },
		quaternary: { label: '~', hotkeyTargets: ['tilde'] },
		position: { row: 1, column: 16, width: 3, height: 1 },
	},
	six: {
		primary: { label: '6' },
		tertiary: { label: 'ž' },
		quaternary: { label: '^', hotkeyTargets: ['caret'] },
		position: { row: 1, column: 19, width: 3, height: 1 },
	},
	seven: {
		primary: { label: '7' },
		tertiary: { label: 'ý' },
		quaternary: { label: '&', hotkeyTargets: ['ampersand'] },
		position: { row: 1, column: 22, width: 3, height: 1 },
	},
	eight: {
		primary: { label: '8' },
		tertiary: { label: 'á' },
		quaternary: { label: '*', hotkeyTargets: ['asterisk'] },
		position: { row: 1, column: 25, width: 3, height: 1 },
	},
	nine: {
		primary: { label: '9' },
		tertiary: { label: 'í' },
		quaternary: { label: '{', hotkeyTargets: ['openingCurlyBracket'] },
		position: { row: 1, column: 28, width: 3, height: 1 },
	},
	zero: {
		primary: { label: '0' },
		tertiary: { label: 'é' },
		quaternary: { label: '}', hotkeyTargets: ['closingCurlyBracket'] },
		position: { row: 1, column: 31, width: 3, height: 1 },
	},
	equal: {
		primary: { label: '%', hotkeyTargets: ['percentage'] },
		tertiary: { label: '=', hotkeyTargets: ['equals'] },
		quaternary: { label: '°' },
		position: { row: 1, column: 34, width: 3, height: 1 },
	},
	punctuation: {
		primary: { label: 'ˇ' },
		tertiary: { label: '´' },
		quaternary: { label: '^' },
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
		position: { row: 2, column: 5, width: 3, height: 1 },
	},
	w: {
		primary: { label: 'W' },
		position: { row: 2, column: 8, width: 3, height: 1 },
	},
	e: {
		primary: { label: 'E' },
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
		primary: { label: '/', hotkeyTargets: ['forwardSlash'] },
		tertiary: { label: 'ú' },
		quaternary: { label: '[', hotkeyTargets: ['openingSquareBracket'] },
		position: { row: 2, column: 35, width: 3, height: 1 },
	},
	closeBracket: {
		primary: { label: '(', hotkeyTargets: ['openingRoundBracket'] },
		tertiary: { label: ')', hotkeyTargets: ['closingRoundBracket'] },
		quaternary: { label: ']', hotkeyTargets: ['closingSquareBracket'] },
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
		primary: { label: '"', hotkeyTargets: ['doubleQuotes'] },
		tertiary: { label: 'ů' },
		quaternary: { label: ';', hotkeyTargets: ['semicolon'] },
		position: { row: 3, column: 33, width: 3, height: 1 },
	},
	closeQuotes: {
		primary: { label: '!', hotkeyTargets: ['exclamationMark'] },
		tertiary: { label: '§' },
		quaternary: { label: "'", hotkeyTargets: ['singleQuote'] },
		position: { row: 3, column: 36, width: 3, height: 1 },
	},
	apostrophe: {
		secondary: { label: '|' },
		tertiary: { label: '`', hotkeyTargets: ['backtick'] },
		quaternary: { label: '\\' },
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
		primary: { label: '|', hotkeyTargets: ['pipe'] },
		tertiary: { label: '\\', hotkeyTargets: ['backwardSlash'] },
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
		primary: { label: '?', hotkeyTargets: ['questionMark'] },
		tertiary: { label: ',' },
		quaternary: { label: '<' },
		position: { row: 4, column: 29, width: 3, height: 1 },
	},
	stop: {
		primary: { label: ':', hotkeyTargets: ['colon'] },
		tertiary: { label: '.' },
		quaternary: { label: '>' },
		position: { row: 4, column: 32, width: 3, height: 1 },
	},
	minus: {
		primary: { label: '_', hotkeyTargets: ['underscore'] },
		tertiary: { label: '-', hotkeyTargets: ['minus'] },
		position: { row: 4, column: 35, width: 3, height: 1 },
	},
	rightShift: {
		primary: { label: 'Shift' },
		isSpecial: true,
		position: { row: 4, column: 38, width: 8, height: 1 },
	},
	fn: {
		tertiary: { label: 'fn' },
		isSpecial: true,
		position: { row: 5, column: 1, width: 3, height: 1 },
	},
	control: {
		tertiary: { label: 'ctrl', hotkeyTargets: ['picker'] },
		isSpecial: true,
		position: { row: 5, column: 4, width: 3, height: 1 },
	},
	leftOption: {
		tertiary: { label: 'alt' },
		quaternary: {
			label: <Icon name="macOption" />,
			hotkeyTargets: [
				'atSign',
				'hash',
				'dollar',
				'tilde',
				'caret',
				'ampersand',
				'asterisk',
				'openingCurlyBracket',
				'closingCurlyBracket',
			],
		},
		isSpecial: true,
		position: { row: 5, column: 7, width: 3, height: 1 },
	},
	leftCommand: {
		tertiary: {
			label: 'cmd',
			hotkeyTargets: ['picker'],
		},
		quaternary: { label: <Icon name="macCommand" /> },
		position: { row: 5, column: 10, width: 4, height: 1 },
	},
	spacebar: {
		primary: { label: 'Spacebar', hotkeyTargets: ['picker'] },
		isSpecial: true,
		position: { row: 5, column: 14, width: 15, height: 1 },
	},
	rightCommand: {
		tertiary: { label: <Icon name="macCommand" /> },
		quaternary: {
			label: 'cmd',
		},
		isSpecial: true,
		position: { row: 5, column: 29, width: 4, height: 1 },
	},
	rightOption: {
		tertiary: { label: <Icon name="macOption" /> },
		quaternary: { label: 'alt' },
		isSpecial: true,
		position: { row: 5, column: 33, width: 3, height: 1 },
	},
	arrowLeft: {
		primary: { label: '←' },
		isSpecial: true,
		position: { row: 5, column: 36, width: 3, height: 1 },
	},
	arrowVertical: {
		primary: { label: '↕' },
		isSpecial: true,
		position: { row: 5, column: 39, width: 4, height: 1 },
	},
	arrowRight: {
		primary: { label: '→' },
		isSpecial: true,
		position: { row: 5, column: 43, width: 3, height: 1 },
	},
} satisfies Keyboard
