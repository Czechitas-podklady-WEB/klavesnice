import { useMediaQuery } from '@mui/material'
import { useEffect, useState } from 'react'
import { Subject } from 'rxjs'

const isPrintingSubject = new Subject<boolean>()

export const useIsPrinting = () => {
	const [isPrintingByEvent, setIsPrintingByEvent] = useState(false)
	const isPrintingByMedia = useMediaQuery('print', { defaultMatches: false })
	const [isPrintingByObservable, setIsPrintingByObservable] = useState(false)

	useEffect(() => {
		const onBeforePrint = () => {
			setIsPrintingByEvent(true)
		}
		const onAfterPrint = () => {
			setIsPrintingByEvent(false)
		}

		window.addEventListener('beforeprint', onBeforePrint)
		window.addEventListener('afterprint', onAfterPrint)

		const onObservableChange = (value: boolean) => {
			setIsPrintingByObservable(value)
		}

		const subscription = isPrintingSubject.subscribe(onObservableChange)

		return () => {
			window.removeEventListener('beforeprint', onBeforePrint)
			window.removeEventListener('afterprint', onAfterPrint)
			subscription.unsubscribe()
		}
	}, [])

	return isPrintingByEvent || isPrintingByMedia || isPrintingByObservable
}

export const print = () => {
	isPrintingSubject.next(true)
	setTimeout(() => {
		window.print()
		isPrintingSubject.next(false)
	}, 100)
}
