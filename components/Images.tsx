import Image from 'next/image'
import type { FunctionComponent } from 'react'
import mac from '../images/mac.png'
import windows from '../images/windows.png'

export const Images: FunctionComponent = () => {
	return (
		<div>
			<Image {...windows} alt="Windows" />
			<br />
			<Image {...mac} alt="Mac" />
		</div>
	)
}
