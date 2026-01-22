import './App.css'
import Space from './Space'

const sectionHeight = 4
const sectionDivide = 3

const GuestSnap = () => {

	const snapUrl = 'https://www.dropbox.com/request/hVGhXqTs4oj4iNHWAMTU'

	const openGuestSnap = async () => {
		window.location.href = snapUrl
	}

	return (
		<div className='content-box'>

			<Space height={`${sectionHeight}rem`}/>
			
			<div className='section-subtitle'> G U E S T S N A P </div>
			<div className='section-title'> 게스트스냅 </div>

			<Space height={`${sectionDivide}rem`}/>

			<div>
				저희의 스냅 작가가 되어주세요<br/><br/>

				가장 센스있는 컷을 남겨주신 분께 <br/>
				소정의 상품을 드립니다<br/>

				<br/>

				아래의 업로드 버튼을 통해 올려주세요<br/>
				업로드 기한: 26/5/9 13:00 ~ 26/5/11 23:59
			</div>

			<Space height={`${sectionDivide}rem`}/>

			<div className='button'  onClick={openGuestSnap}
				style={{width: '15rem', margin: 'auto'}}>
				사진 업로드
			</div>
		
			<Space height={`${sectionHeight}rem`}/>

		</div>	
	)
}

export default GuestSnap

