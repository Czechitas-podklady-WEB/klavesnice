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
	equals: {
		symbol: '=',
		label: 'Rovnítko',
		note: 'rovnost, přiřazení',
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
	lowerThanBracket: {
		symbol: '<',
		label: 'Závorka',
		note: 'je menší než',
	},
	greaterThanBracket: {
		symbol: '>',
		label: 'Závorka',
		note: 'je větší než',
	},
	tilde: {
		symbol: '~',
		label: 'Vlnovka',
	},
	caret: {
		symbol: '^',
		label: 'Stříška',
	},
	backtick: {
		symbol: '`',
		label: 'Zpětný apostrof',
	},
	underscore: {
		symbol: '_',
		label: 'Podtržítko',
	},
	questionMark: {
		symbol: '?',
		label: 'Otazník',
		note: 'ternární operátor',
	},
	exclamationMark: {
		symbol: '!',
		label: 'Vykřičník',
		note: 'negace',
	},
	doubleQuotes: {
		symbol: '"',
		label: 'Uvozovky',
		note: 'dvojité',
	},
	singleQuote: {
		symbol: "'",
		label: 'Apostrof',
	},
	dollar: {
		symbol: '$',
		label: 'Dolar',
	},
} satisfies Readonly<{
	[name: string]: HotkeyTarget
}>
