import type { ReactNode } from 'react'
import type { hotkeyTargets } from '../hotkeyTargets'
import type { Position } from '../keyboards'

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

export type Keyboard = { [name: string]: Key }
