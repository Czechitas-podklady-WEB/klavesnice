export type HotkeyTarget = {
	symbol: string
	label: string
	note?: string
}

export const hotkeyTargets = {
	plus: {
		symbol: '+',
		label: 'Plus',
		note: 'sčítání',
	},
	minus: {
		symbol: '-',
		label: 'Minus',
		note: 'odčítání',
	},
	asterisk: {
		symbol: '*',
		label: 'Hvězdička',
		note: 'krát',
	},
	percentage: {
		symbol: '%',
		label: 'Procento',
		note: 'modulo',
	},
	atSign: {
		symbol: '@',
		label: 'Zavináč',
	},
	ampersand: {
		symbol: '&',
		label: 'Ampersand',
	},
	pipe: {
		symbol: '|',
		label: 'Svislá čára',
		note: 'roura',
	},
	forwardSlash: {
		symbol: '/',
		label: 'Lomítko',
		note: 'děleno',
	},
	backwardSlash: {
		symbol: '\\',
		label: 'Zpětné lomítko',
	},
	picker: {
		symbol: '⌨️',
		label: 'Vybírátko',
		note: 'rozšířená klávesnice',
	},
	semicolon: {
		symbol: ';',
		label: 'Středník',
	},
	openingRoundBracket: {
		symbol: '(',
		label: 'Závorka',
		note: 'Otevírací kulatá',
	},
	closingRoundBracket: {
		symbol: ')',
		label: 'Závorka',
		note: 'Zavírací kulatá',
	},
	openingSquareBracket: {
		symbol: '[',
		label: 'Závorka',
		note: 'Otevírací hranatá',
	},
	closingSquareBracket: {
		symbol: ']',
		label: 'Závorka',
		note: 'Zavírací hranatá',
	},
	openingCurlyBracket: {
		symbol: '{',
		label: 'Závorka',
		note: 'Otevírací složená',
	},
	closingCurlyBracket: {
		symbol: '}',
		label: 'Závorka',
		note: 'Zavírací složená',
	},
} satisfies Readonly<{
	[name: string]: HotkeyTarget
}>
