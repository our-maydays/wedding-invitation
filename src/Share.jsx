import './App.css'
import Space from './Space'

import { useEffect } from 'react'

const kakaoIcon = `${import.meta.env.BASE_URL}icon/kakaotalk.png`
const linkIcon = `${import.meta.env.BASE_URL}icon/link.png`

const sectionHeight = 6
const sectionDivide = 3

const Share = () => {

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
			<Space height={`${sectionHeight}rem`}/>

			<div className='section-subtitle'>SHARE</div>
			<div className='section-title'> 공유하기 </div>

			<Space height={`${sectionDivide}rem`}/>

			<div style={{
				display:'flex',
				justifyContent: 'space-between',
				alignItems:'center',
				width: '35rem',
				maxWidth: '390px',
				margin: '0 auto',
				padding: 0,
			}}>
				<div className='button' style={{width:'16rem'}} onClick={() => {kakaoShare()}}>
					<img src={kakaoIcon} style={{height:'2.2rem'}}/>
					&nbsp; 카톡으로 공유하기
				</div>
				
				<div onClick={shareUrl} className='button' style={{width: '16rem'}}>
					<img src={linkIcon} style={{height: '1.5rem'}}/>
					&nbsp; 	링크 복사하기
				</div>
			</div>

			<Space height={`${sectionHeight}rem`}/>
		</div>
	)
}

export default Share
