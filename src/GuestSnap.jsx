import './App.css'

const GuestSnap = () => {

	const snapUrl = 'https://www.dropbox.com/request/hVGhXqTs4oj4iNHWAMTU'

	const openGuestSnap = async () => {
		window.location.href = snapUrl
	}

	return (
		<div className='content-box'>

			<div className='space-box-4rem'/>
			
			<div className='section-subtitle'> G U E S T S N A P </div>
			<div className='section-title'> 게스트스냅 </div>

			<div className='space-box-2rem'/>

			<div>
				저희의 스냅 작가가 되어주세요<br/><br/>

				가장 센스있는 컷을 남겨주신 분께 <br/>
				소정의 상품을 드립니다<br/>

				<br/>

				아래의 업로드 버튼을 통해 올려주세요<br/>
				업로드 기한: 26/5/9 13:00 ~ 26/5/11 23:59
			</div>

			<div className='space-box-2rem'/>

			<div  onClick={openGuestSnap}	style={{
				fontSize: '1.6rem',
				lineHeight: '3rem',
				diplay: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				width: '9rem',
				textAlign: 'center',
				background: 'rgb(242,238,238)',
				borderRadius: '1rem',
				margin: '0 auto',
				padding: '0.5rem',
				fontFamily: 'Regular',
				boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
				cursor: 'pointer',
			}}>
				사진 업로드
			</div>
			
			<div className='space-box-4rem'/>

		</div>	
	)
}

export default GuestSnap

