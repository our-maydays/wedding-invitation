import { useEffect, useRef, useState } from 'react'
import './FontSizeToggle'

const audioFile = `${import.meta.env.BASE_URL}bgm/bgm.mp3`
const audioIconOn = `${import.meta.env.BASE_URL}icon/volume-on.svg`
const audioIconOff = `${import.meta.env.BASE_URL}icon/volume-off.svg`

const BGM = () => {
	const [isPlaying, setIsPlaying] = useState(false);
	const audioRef = useRef(null);
	const [phase, setPhase] = useState('hidden')

	
	useEffect( () => {
		const audio = new Audio(audioFile)
		
		audioRef.current = audio
		audioRef.current.load()
		audioRef.current.addEventListener('ended', () => setIsPlaying(false))

		{/* scroll, gesture, touch 하면 음악 자동재생
		const handleScrollStart = () => {
			if (!isPlaying) {
				audioRef.current.play().catch( () => {} )
				setIsPlaying(!isPlaying)
				window.removeEventListener('scroll',handleScrollStart)
				console.log('scroll detect')
				window.removeEventListener('gesture',handleScrollStart)
				console.log('gesture detect')
				window.removeEventListener('touchstart',handleScrollStart)
				console.log('touch detect')
			}
		}
		window.addEventListener('scroll',handleScrollStart)
		window.addEventListener('gesture',handleScrollStart)
		window.addEventListener('touchstart',handleScrollStart)

		return () => {
			window.removeEventListener('scroll',handleScrollStart)
			window.removeEventListener('gesture',handleScrollStart)
			window.removeEventListener('touchstart',handleScrollStart)
		}
		*/}
	}, [])

	useEffect( () => {
		const handleVideoState = (e) => {
			const isVideoPlaying = e.detail
			if (isVideoPlaying) {
				if (audioRef.current && !audioRef.current.paused) {
					audioRef.current.pause()
					setIsPlaying(false)
				}
			} else {
				/*
				if (audioRef.current && audioRef.current.puased) {
					audioRef.current.play();
					setIsPlaying(true);
				}
				*/
			}
		}

		window.addEventListener('videoPlaying', handleVideoState)
		return () => window.removeEventListener('videoPlaying',handleVideoState)
	}, [])

	useEffect( () => {
		const stopAudio = () => {
			if (audioRef.current) {
				audioRef.current.pause()
				setIsPlaying(false)
			}
		}

		const handleVisibilityChange = () => {
			if (document.hidden) {
				stopAudio()
			}
		}

		window.addEventListener('pagehide', stopAudio)
		window.addEventListener('beforeunload', stopAudio)
		document.addEventListener('visibilitychange', handleVisibilityChange)

		return () => {
			window.removeEventListener('pagehide',stopAudio)
			window.removeEventListener('beforeunload', stopAudio)
			document.removeEventListener('visibilitychange',handleVisibilityChange)
		}
	}, [])

	const handleAudioToggle = () => {
		if (isPlaying) {
			audioRef.current.pause()
		} else {
			audioRef.current.play();
		}
		setIsPlaying(!isPlaying)
	}
	
	useEffect( () => {
		return () => {
			if (audioRef.current) {
				audioRef.current.pause();
				audioRef.current = null;
			}
		}
	}, [])


	return (
		<div style={{
			position: 'absolute',
			display:'flex', 
			justifyContent: 'right',
			flexDirection:'row',
			alignItems:'center',
			width:'100%',
			margin: 0,
			padding: 0,
			}}
		>
		{/*
			<div
				className='disappear' 
				style={{
					fontSize: '1.6rem',
					height: '3rem',
					display:'flex',
					alignItems: 'center',
					justifyContent:'center',
					padding: '0',
					margin: '0',
					width: '100%',
					position: 'absolute',
					left: '50%',
					transform: 'translate(-50%,0)',
					background: 'rgba(100,100,100,0.8)',
					color:'white',
				}}
			>
				배경음악이 준비되었습니다
			</div>
			*/}
			<div className='slidedown' style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				margin: 0,
				padding: 0,
			}}>
			<img
				src={isPlaying ? audioIconOn : audioIconOff}
				style={{width: '25px', height: '25px', 
				}}
				onClick={() => handleAudioToggle()}
			/>
			</div>
		</div>
	)
}

export default BGM
