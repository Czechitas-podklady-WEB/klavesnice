import type { OperatingSystemAndLanguage } from './OperatingSystemAndLanguage'
import type { Key } from './keyboards/Key'
import { macCs } from './keyboards/macCs'
import { macEnUs } from './keyboards/macEnUs'
import { windowsCs } from './keyboards/windowsCs'
import { windowsEnUs } from './keyboards/windowsEnUs'

export type Position = {
	row: number
	column: number
	width: number
	height: number
}

export const keyboards = {
	windows: {
		cs: windowsCs,
		en_us: windowsEnUs,
	},
	mac: {
		cs: macCs,
		en_us: macEnUs,
	},
} satisfies Readonly<OperatingSystemAndLanguage<{ [name: string]: Key }>>
