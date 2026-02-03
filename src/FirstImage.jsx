import './App.css'
import './FirstImage.css'

import Space from './Space'

const firstPhoto = `${import.meta.env.BASE_URL}image/firstphoto.jpg`

import {useState, useEffect} from 'react'

const FirstImage = () => {

	const [isVisible, setIsVisible] = useState(true)
	const [isFading, setIsFading] = useState(false)

	useEffect( () => {
		const fadeTimer = setTimeout( () => {
			setIsFading(false)
		}, 4500)

		const removeTimer = setTimeout( () => {
			setIsVisible(false)
		}, 5000)
		return () => {
			clearTimeout(fadeTimer)
			clearTimeout(removeTimer)
		}
	},[])

	if (!isVisible) return null

	return (
		<div className='first-photo-container'>
			<div className='first-photo-content'>
				<img src={firstPhoto} className='first-photo'/>
			</div>
		</div>
	)
}

export default FirstImage
