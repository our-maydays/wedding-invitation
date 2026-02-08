import './App.css'
import './GuestSnap.css'
import Space from './Space'

const sectionHeight = 6
const sectionDivide = 3
const photoUrl = `${import.meta.env.BASE_URL}image/guestsnapphoto.jpg`

const GuestSnap = () => {

	const snapUrl = 'https://www.dropbox.com/request/hVGhXqTs4oj4iNHWAMTU'

	const openGuestSnap = async () => {
		window.location.href = snapUrl
	}

	return (
		<div className='content-box'>


			
			<Space height={`${sectionHeight}rem`}/>
				<div className='image-container'>
					<img src={photoUrl}/>
				</div>

			<Space height={`${sectionHeight}rem`}/>
			<div className='section-subtitle'> GUEST SNAP</div>
			<div className='section-title'> 게스트스냅 </div>

			<Space height={`${sectionDivide}rem`}/>

			<div style={{
				lineHeight: '2.5rem',
				width: '95%',
				margin: '0 auto',
			}}>
				저희의 사진 작가가 되어주세요 <br/><br/>
				신랑 신부의 행복한 순간을 담아주세요 <br/>
				
				예식 당일 아래의 업로드 버튼을 통해 올려주세요<br/>


			</div>

			<Space height={`${sectionDivide}rem`}/>

			<div className='button'  onClick={openGuestSnap}
				style={{width: '15rem', margin: 'auto'}}>
				사진 업로드
			</div>

			<Space height={'0.5rem'}/>
			<div style={{color: 'gray', fontSize:'1.2rem'}}>
				업로드 기한: 26/5/11 23:59까지
			</div>

		
			<Space height={`${sectionHeight}rem`}/>

		</div>	
	)
}

export default GuestSnap

