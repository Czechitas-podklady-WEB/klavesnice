export type HotkeyTarget = {
	symbol: string
	label: string
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
	},
	slash: {
		symbol: '/',
		label: 'Lomítko',
	},
	percentage: {
		symbol: '%',
		label: 'Procento',
	},
	atSign: {
		symbol: '@',
		label: 'Zavináč',
	},
} satisfies Readonly<{
	[name: string]: HotkeyTarget
}>
