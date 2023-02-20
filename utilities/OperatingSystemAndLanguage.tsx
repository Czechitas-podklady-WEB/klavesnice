export const operatingSystems = {
	windows: 'Windows',
	mac: 'Mac',
} as const

export const languages = {
	cs: 'Čeština',
	en_us: 'Americká angličtina',
} as const

export type OperatingSystemAndLanguage<T> = {
	[operatingSystem in keyof typeof operatingSystems]: {
		[language in keyof typeof languages]: T
	}
}
