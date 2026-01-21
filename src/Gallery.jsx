import { useEffect, useState, useMemo } from "react";
import Modal from 'react-modal'
import './App.css'


import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const closeIcon = `${import.meta.env.BASE_URL}icon/close_icon.svg`

import './Gallery.css'

// src/assets/images에 있는 모든 이미지를 한번에 불러오기
const imagePaths = import.meta.glob('./assets/images/*.{jpg,JPG}', {
//const imagePaths = import.meta.glob('/photo/*.{jpg,JPG}',{
	eager: true,
	query: '?url',
	import: 'default',
});

Modal.setAppElement('#root')
console.log(imagePaths)

const Gallery = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [currentIndex, setCurrentIndex] = useState(0)
	const dotWidth = 15
	const containerWidth = 75

	const images = useMemo( () => {
		return Object.values(imagePaths)
	}, [])

	useEffect( () => {
		document.body.style.overflow = isOpen ? "hidden" : 'auto';
	}, [isOpen])

	useEffect( () => {
		if (isOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}

		return () => {
			document.body.style.overflow = 'auto'
		}
	}, [isOpen])

	const openModal = (index) => {
		console.log('index' , index)
		setCurrentIndex(index);
		setIsOpen(true);
	}

	const gridSettings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 2,
		rows: 2,
		arrows: false,
	}

	const modalSettings = (startIndex) => ({
		initialSlide: startIndex,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: true,
		appendDots: (dots) => (
			<div>
				<ul> {dots} </ul>
			</div>
		),
		beforeChange: (current, next) => {
			updateDots(next);
		},
	})

	const updateDots = (index) => {
		const dotsUl = document.querySelector('.modal-container .slick-dots ul')
		if (!dotsUl) return

		const moveX = (containerWidth/2) - (index * dotWidth) - (dotWidth/2)
		dotsUl.style.transition = 'transform 500ms cubic-bezier(0.25, 0.1, 0.25, 1)'
		dotsUl.style.transform = `translateX(${moveX}px)`

		const dotItems = dotsUl.querySelectorAll('li')
		dotItems.forEach((dot, i) => {
			const distance = Math.abs(i - index)
			dot.style.transition = 'all 500ms cubic-bezier(0.25, 0.1, 0.25, 1)'
			if (distance === 0) {
				dot.style.transform = 'scale(1.2)'
			} else if (distance === 1) {
				dot.style.transform = 'scale(0.8)'
			} else if (distance === 2) {
				dot.style.transform = 'scale(0.6)'
			} else {
				dot.style.transform = 'scale(0.4)'
			}
		})
	}

	useEffect(() => {
		if (isOpen) {
			const timer = setTimeout(() => {
				updateDots(currentIndex)
			}, 10)
			return () => clearTimeout(timer)
		}
	}, [isOpen, currentIndex])

	return (
		<div className='content-box'>
		<div className='space-box-4rem'/>
	
			<div className='section-subtitle'> G A L L E R Y </div>
			<div className='section-titl'> 사진첩</div>
			<div className='space-box-2rem'/>

			<div className='grid-wrapper'>
				<Slider {...gridSettings}>
					{images.map( (src, index) => (
						<div 
							key={index} 
							onClick={ (e) => {
								openModal(index) 
							}}
							style={{display:'flex',justifyContent:'center',margin:'auto'}}
						>
							<div className='grid-item'>
								<img
									src={src}
									style={{
										width: '100%',
									}}
									 onContextMenu={(e) => e.preventDefault()}
      				     onDragStart={(e) => e.preventDefault()}
 			        	   draggable={false}
								/>
							</div>
						</div>
					))}
				</Slider>
			</div>

			<div className='space-box-4rem'/>

			<Modal
				isOpen={isOpen}
				onRequestClose={() => setIsOpen(false)}
				style={{
					overlay: {
						backgroundColor: 'rgba(230,230,230,0.9)',
						zIndex: 1000,
					},
					content: {
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						background: 'none',
						width: '100vw',
						height: '100vh',
						margin: '0 auto',
						padding: '0px',
						border: 'none',
						overflow: 'hidden',
					},
				}}
				>
				
					<div className='modal-container'>
						<Slider {...modalSettings(currentIndex)} key={currentIndex}>
							{images.map( (src, index) => (
								<div key={index} className='modal-slide'>
									<img
										src={src}
										alt=''
										className='modal-image'
										onContextMenu={(e) => e.preventDefault()}
				            onDragStart={(e) => e.preventDefault()}
				            draggable={false}
									/>
								</div>
							))}
						</Slider>
						
						<button
							onClick={ () => setIsOpen(false)}
							style={{
								position: 'absolute',
								top: '2rem',
								right: '1rem',
								background: 'transparent',
								color: 'white',
								fontSize: '1.6rem',
								border: 'none',
								cursor: 'pointer',
								margin: '0',
								padding: '0',
							}}
						>
							<img src={closeIcon} width='25rem'/>
						</button>

					</div>
				</Modal>
		</div>
	)
}

export default Gallery
