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
	forwardSlash: {
		symbol: '/',
		label: 'Lomítko',
		note: 'děleno',
	},
	equals: {
		symbol: '=',
		label: 'Rovnítko',
		note: 'rovnost, přiřazení',
	},
	percentage: {
		symbol: '%',
		label: 'Procento',
		note: 'modulo',
	},
	hash: {
		symbol: '#',
		label: 'Mřížka',
	},
	atSign: {
		symbol: '@',
		label: 'Zavináč',
	},
	ampersand: {
		symbol: '&',
		label: 'Ampersand',
		note: 'a',
	},
	pipe: {
		symbol: '|',
		label: 'Svislá čára',
		note: 'nebo',
	},
	backwardSlash: {
		symbol: '\\',
		label: 'Zpětné lomítko',
	},
	picker: {
		symbol: '…',
		label: 'Vybírátko',
		note: 'rozšířená klávesnice',
	},
	semicolon: {
		symbol: ';',
		label: 'Středník',
	},
	openingRoundBracket: {
		symbol: '(',
		label: 'Otevírací kulatá',
	},
	closingRoundBracket: {
		symbol: ')',
		label: 'Zavírací kulatá',
	},
	openingSquareBracket: {
		symbol: '[',
		label: 'Otevírací hranatá',
	},
	closingSquareBracket: {
		symbol: ']',
		label: 'Zavírací hranatá',
	},
	openingCurlyBracket: {
		symbol: '{',
		label: 'Otevírací složená',
	},
	closingCurlyBracket: {
		symbol: '}',
		label: 'Zavírací složená',
	},
	lowerThanBracket: {
		symbol: '<',
		label: 'Menší než',
		note: 'otevírací zobáček',
	},
	greaterThanBracket: {
		symbol: '>',
		label: 'Větší než',
		note: 'zavírací zobáček',
	},
	tilde: {
		symbol: '~',
		label: 'Vlnovka',
	},
	caret: {
		symbol: '^',
		label: 'Stříška',
	},
	underscore: {
		symbol: '_',
		label: 'Podtržítko',
	},
	questionMark: {
		symbol: '?',
		label: 'Otazník',
		note: 'podmíněný výraz',
	},
	exclamationMark: {
		symbol: '!',
		label: 'Vykřičník',
		note: 'negace',
	},
	doubleQuotes: {
		symbol: '"',
		label: 'Dvojité',
	},
	singleQuote: {
		symbol: "'",
		label: 'Apostrof',
	},
	backtick: {
		symbol: '`',
		label: 'Zpětný apostrof',
	},
	dollar: {
		symbol: '$',
		label: 'Dolar',
	},
} satisfies Readonly<{
	[name: string]: HotkeyTarget
}>

type HotkeyName = keyof typeof hotkeyTargets

type RelatedHotkeyTargetGroup = {
	name: string
	targets: HotkeyName[]
}

export const relatedHotkeyTargetGroups: ReadonlyArray<RelatedHotkeyTargetGroup> =
	(() => {
		const named: ReadonlyArray<RelatedHotkeyTargetGroup> = [
			{
				name: 'Závorky',
				targets: [
					'openingRoundBracket',
					'closingRoundBracket',
					'openingSquareBracket',
					'closingSquareBracket',
					'openingCurlyBracket',
					'closingCurlyBracket',
					'lowerThanBracket',
					'greaterThanBracket',
				],
			},
			{
				name: 'Matematická znaménka',
				targets: [
					'plus',
					'minus',
					'asterisk',
					'forwardSlash',
					'equals',
					'percentage',
				],
			},
			{
				name: 'Uvozovky',
				targets: ['doubleQuotes', 'singleQuote', 'backtick'],
			},
			{
				name: 'Logické operátory',
				targets: ['ampersand', 'pipe', 'questionMark', 'exclamationMark'],
			},
		]

		const unnamedTargets = Object.keys(hotkeyTargets).filter(
			(hotkeyTargetName): hotkeyTargetName is HotkeyName =>
				named.every(
					({ targets }) => !targets.includes(hotkeyTargetName as HotkeyName),
				),
		)

		return [
			...named,
			{
				name: 'Různé',
				targets: unnamedTargets,
			},
		]
	})()
