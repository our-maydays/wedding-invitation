// const myVideo = `${import.meta.env.BASE_URL}video/test.mov`
//const myVideo = './assets/videos/video.mp4'
const myVideo = `${import.meta.env.BASE_URL}video/video.mov`
const myPoster = `${import.meta.env.BASE_URL}video/poster.jpg`

import {useRef, useEffect, useState} from 'react'
import './App.css'
import './Video.css'
import Space from './Space'

const sectionHeight = 6
const sectionDivide = 3

const Video = () => {

	const videoRef = useRef(null)
	const [load,setLoad] = useState(false)
	const ref = useRef(null)

	useEffect( () => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setLoad(true)
					observer.disconnect()
				}
			},
			{threshold: 0.1}
		)

		if (ref.current) observer.observe(ref.current)

		return () => observer.disconnect();

	}, [])
	
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
			<div className='section-subtitle'>MAKING VIDEO</div>
			<div className='section-title'>메이킹영상</div>
			<Space height={`${sectionDivide}rem`}/>

			<div className='video-wrapper' ref={ref}
				style={{
					margin: '0 auto',
					padding: 0,
					width: '100%',
					height: '100%',
				}}
			>
				{load && (
				<video 
					ref={videoRef}
					id='myVideo' 
					poster={myPoster}
					preload='metadata'
					src={`${myVideo}`}
					controls
					onPlay={ () => {
						window.dispatchEvent(new CustomEvent('videoPlaying', {detail:true}))
					}}
					onPause={ () => {
						window.dispatchEvent(new CustomEvent('videoPlaying', {detail:false}))
					}}
					style={{
						width: '100%',
						height: '100%',
						objectFit: 'cover',
						display: 'block',
					}}
					controlsList="nodownload"
					onContextMenu={(e) => e.preventDefault()}
					draggable={false}
					onDragStart={(e) => e.preventDefault()}
				/>
				)}
			</div>
			<Space height={`${sectionHeight}rem`}/>
		</div>
	)
}

export default Video
