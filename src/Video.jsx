const myVideo = `${import.meta.env.BASE_URL}video/test.mov`
const myPoster = `${import.meta.env.BASE_URL}video/test.png`

import {useRef} from 'react'
import './App.css'
import './Video.css'
import Space from './Space'

const sectionHeight = 4
const sectionDivide = 3

const Video = () => {

	const videoRef = useRef(null)
	
	const togglePlay = () => {
		const video = videoRef.current
		if (!video) return

		if (video.paused) {
			video.play()
		} else {
			video.pause()
		}
	}

	return (
		<div className='content-box'>
			<Space height={`${sectionHeight}rem`}/>
			<div className='section-subtitle'>V I D E O</div>
			<div className='section-title'>웨딩비디오</div>
			<Space height={`${sectionDivide}rem`}/>

			<div className='video-wrapper'
				style={{
					margin: '0 auto',
					padding: 0,
					width: '90%',
					height: '100%',
				}}
			>
				<video 
					ref={videoRef}
					id='myVideo' 
//					poster={myPoster}
//					preload='metadata'
					src={`${myVideo}#t=0.001`}
					controls
					style={{
						width: '100%',
						height: '100%',
						objectFit: 'cover',
					}}
					controlsList="nodownload"
					disablePicutreInPicture
					onContextMenu={(e) => e.preventDefault()}
					draggable={false}
					onDragStart={(e) => e.preventDefault()}
				/>
			</div>
			<Space height={`${sectionHeight}rem`}/>
		</div>
	)
}

export default Video
