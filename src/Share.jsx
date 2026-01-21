import './App.css'
import { useEffect } from 'react'


const Share = () => {

	const styles = {
		button: {
			width: '5rem',
			margin: '0 auto',
			padding: '0.5rem',
			background: 'rgb(242,238,238)',
			boxShadow: '0 2px 4px rgb(0,0,0,0.1)',
			borderRadius: '0.8rem',
			cursor: 'pointer',
		}
	}

	const url = 'https://our-maydays.github.io/reactest2'

	
	const shareUrl = async() => {
		navigator.clipboard.writeText(url)
		alert('링크가 복사되었습니다')
	}

	useEffect( () => {
		Kakao.cleanup()
		Kakao.init(import.meta.env.VITE_REACT_APP_KAKAO_JAVASCRIPT_KEY);
		console.log(Kakao.isInitialized())
	}, [])

	const kakaoShare = async () => {
		if (!Kakao.isInitialized()) {
			Kakao.init(import.meta.env.VITE_REACT_APP_KAKAO_JAVACRIPT_KEY);
		}

		try {
			Kakao.Share.sendCustom({
				templateId: 128114,
			})
		} catch (error) {
			console.error(error);
		}
	}





	return (
		<div className='content-box'>
			<div className='space-box-4rem'/>

			<div className='section-subtitle'> S H A R E </div>
			<div className='section-title'> 공유하기 </div>

			<div className='space-box-2rem'/>

			<div style={{
				display:'flex',
				justifyContent: 'center',
				alignItems:'center',
				width: '90%',
				margin: '0 auto',
				padding: 0,
			}}>
				<div style={styles.button} onClick={() => {kakaoShare()}}>
					카톡
				</div>
				
				<div onClick={shareUrl} style={styles.button}>
					링크
				</div>
			</div>

			<div className='space-box-4rem'/>
		</div>
	)
}

export default Share
