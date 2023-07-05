import Image from 'next/image'
import type { FunctionComponent } from 'react'
import mac from '../images/mac.png'
import windows from '../images/windows.png'

export const Images: FunctionComponent = () => {
	return (
		<div>
			<Image
				src={windows.src}
				width={windows.width}
				height={windows.height}
				alt="Windows"
			/>
			<br />
			<Image src={mac.src} width={mac.width} height={mac.height} alt="Mac" />
		</div>
	)
}
