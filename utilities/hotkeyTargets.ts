export type HotkeyTarget = {
	symbol: string
	label: string
	note?: string
}

export const hotkeyTargets = {
	plus: {
		symbol: '+',
		label: 'Plus',
	},
	minus: {
		symbol: '-',
		label: 'Minus',
	},
	asterisk: {
		symbol: '*',
		label: 'Hvězdička',
		note: 'Krát',
	},
	percentage: {
		symbol: '%',
		label: 'Procento',
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
	},
	forwardSlash: {
		symbol: '/',
		label: 'Lomítko',
		note: 'Děleno',
	},
	backwardSlash: {
		symbol: '\\',
		label: 'Zpětné lomítko',
	},
	picker: {
		symbol: '⌨️',
		label: 'Vybírátko',
	},
	semicolon: {
		symbol: ';',
		label: 'Středník',
	},
	openingRoundBracket: {
		symbol: '(',
		label: 'Otevírací kulatá závorka',
	},
	closingRoundBracket: {
		symbol: ')',
		label: 'Zavírací kulatá závorka',
	},
	openingSquareBracket: {
		symbol: '[',
		label: 'Otevírací hranatá závorka',
	},
	closingSquareBracket: {
		symbol: ']',
		label: 'Zavírací hranatá závorka',
	},
	openingCurlyBracket: {
		symbol: '{',
		label: 'Otevírací složená závorka',
	},
	closingCurlyBracket: {
		symbol: '}',
		label: 'Zavírací složená závorka',
	},
} satisfies Readonly<{
	[name: string]: HotkeyTarget
}>
