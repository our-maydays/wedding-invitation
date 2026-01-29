const nmapIcon = `${import.meta.env.BASE_URL}icon/nmap.png`
const kmapIcon = `${import.meta.env.BASE_URL}icon/kmap.png`
const tmapIcon = `${import.meta.env.BASE_URL}icon/tmap.jpeg`

import './Route.css'

const Route = () => {


	const destLat = 35.0716472
	const destLng = 129.0573867
	const destName = '영도목장원'

	const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent)
	const isIos = /iPhone|iPad/i.test(navigator.userAgent)
	const isAndroid = /Android/i.test(navigator.userAgent)

	const openNaverMap = async () => {
		if (isMobile) {
//			const appUrl = `nmap://route/car?dlat=${destLat}&dlng=${destLng}&dname=${destName}&appname=com.my.app`

			const appUrl = `nmap://place?lat=${destLat}&lng=${destLng}&name=${destName}&appname=com.my.app`
			window.location.href = appUrl

			setTimeout( () => {
				if (!document.hidden) {
					if (isIos) {
						window.location.href = 'https://itunes.apple.com/app/id311867728?mt=8'
					} else if (isAndroid) {
						window.location.href = 'market://details?id=com.nhn.android.nmap'
					} else {
						window.location.href = 'https://map.naver.com/'
					}
				}
			}, 3000)
		} else {
			const webUrl = 'https:/map.naver.com/'
			window.open(webUrl,'_blank');
		}
	}

	const openKakaoMap = () => {
		if (isMobile) {
//			const appUrl = `kakaomap://route?ep=${destLat},${destLng}&by=car`
//			const appUrl = `https://map.kakao.com/link/map/${destName},${destLat},${destLng}`
			const appUrl = 'kakaomap://place?id=1432444585'
			window.location.href = appUrl;
			setTimeout( () => {
				if (!document.hidden) {
					if (isIos) {
						window.open('https://itunes.apple.com/app/id304608425?mt=8')
					} else if (isAndroid) {
						window.open('market://details?id=net.daum.android.map')
					} else {
						window.location.href = 'https://map.kakao.com/'
					}
				}
			}, 3000);
		} else {
			const webUrl = 'https://m.map.kakao.com/scheme/place?id=1432444585/'
				window.open(webUrl,'_blank')
		}
	}

	const openTMap = () => {
		if (isMobile) {
//			const appUrl = `tmap://route?goalname=${destName}&goalx=${destLng}&goaly=${destLat}`
			const appUrl = `tmap://search?name=${destName}`
			window.location.href = appUrl
			setTimeout( () => {
				if (!document.hidden) {
					if (isIos) {
						window.location.href = 'https://itunes.apple.com/app/id431589174?mt=8'
					} else if (isAndroid) {
						window.location.href = 'market://details?id=com.skt.tmap.ku'
					} else {
						window.location.href = 'https://google.com/'
					}
				}
			}, 3000)
		} else {
			const webUrl = 'https://google.com'
			window.open(webUrl, '_blank')
		}
	}

	return (
		<div style={{
			fontSize:'1.4rem', 
			display: 'flex', 
			justifyContent:'space-between', 
			width: '95%',
			margin: '0 auto',
			padding: 0,
		}}>
			<div className='button-noshadow' onClick={openNaverMap} style={{width:'12rem'}}>
				<img src={nmapIcon}
					style={{
						height: '3rem',
						display: 'inline-block',
						marginRight: '0.6rem',
						borderRadius: '0.8rem',
						}} 
				/>
				네이버지도
				</div>

			<div className='button-noshadow'  onClick={openKakaoMap} style={{width:'12rem'}}>


				<img src={kmapIcon}
					style={{
						height: '2.5rem',
						display: 'inline-block',
						marginRight: '0.6rem',
						borderRadius: '0.8rem',
					}}
				/>
				카카오맵
			
			</div>

			<div className='map-button'	onClick={openTMap} style={{width:'12rem'}}>

				<img src={tmapIcon}
					style={{
						height: '2.5rem',
						display: 'inline-block',
						marginRight: '0.6rem',
						borderRadius: '0.8rem',
					}}
				/>
				<span> 티맵</span>
			</div>
		</div>
	)

}
export default Route

