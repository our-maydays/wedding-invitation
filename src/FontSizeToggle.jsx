import './App.css'
import './FontSizeToggle.css'

import { useState } from 'react'

const zoomOutImg = `${import.meta.env.BASE_URL}icon/zoom-out.svg`
const zoomInImg = `${import.meta.env.BASE_URL}icon/zoom-in.svg`

const FontSizeToggle = () => {

	const [zoom, setZoom] = useState(false)

	const toggleFontSize = () => {
		setZoom(prev => {
			const next = !prev
			document.documentElement.classList.toggle('magnify',next)
			return next
		})
	}

	return (
		<div onClick={toggleFontSize} className='wrapper'>
			<img
				src={zoom ? zoomOutImg : zoomInImg}
				style={{width: '20px', height:'20px'}}
			/>
		</div>
	)
}

export default FontSizeToggle
