import Image from 'next/image'
import type { FunctionComponent } from 'react'
import mac from '../images/mac.png'
import windows from '../images/windows.png'

// @TODO: remove images - debug only
export const Images: FunctionComponent = () => {
	return (
		<div style={{ marginTop: '100vh' }}>
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
