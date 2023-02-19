import { useMediaQuery } from '@mui/material'
import { useEffect, useState } from 'react'

export const useIsPrinting = () => {
	const [isPrintingByEvent, setIsPrintingByEvent] = useState(false)
	const isPrintingByMedia = useMediaQuery('print', { defaultMatches: false })

	// @TODO: await rerender before priting

	useEffect(() => {
		const onBeforePrint = () => {
			setIsPrintingByEvent(true)
		}
		const onAfterPrint = () => {
			setIsPrintingByEvent(false)
			console.log('event', 'setIsPrintingByEvent(false)')
		}

		window.addEventListener('beforeprint', onBeforePrint)
		window.addEventListener('afterprint', onAfterPrint)

		return () => {
			window.removeEventListener('beforeprint', onBeforePrint)
			window.removeEventListener('afterprint', onAfterPrint)
		}
	}, [])

	return isPrintingByEvent || isPrintingByMedia
}
