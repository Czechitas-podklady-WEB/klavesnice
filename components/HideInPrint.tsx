import type { FunctionComponent, ReactNode } from 'react'
import styles from './HideInPrint.module.css'

export interface HideInPrintProps {
	children: ReactNode
}

export const HideInPrint: FunctionComponent<HideInPrintProps> = ({
	children,
}) => {
	return <div className={styles.wrapper}>{children}</div>
}
