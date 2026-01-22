import './App.css'
import './GuestSnap.css'
import Space from './Space'

const sectionHeight = 4
const sectionDivide = 3
const photoUrl = `${import.meta.env.BASE_URL}image/DSC09510.jpg`

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

			<div style={{
				lineHeight: '2.5rem'
			}}>
				📸 저희의 스냅 작가가 되어주세요 📸<br/><br/>

				<div className='image-container'>
					<img src={photoUrl}/>
				</div>

				<Space height={`${sectionDivide}rem`}/>

				1. 설렘 가득한 신랑, 신부의 모습<br/>
				2. 웃음 가득 행복한 양가 혼주<br/>
				3. 신랑, 신부의  입장 및 행진<br/>
				4. 하객 여러분의 축하, 격려, 응원<br/>
				5. 가족, 친구와 함께한 순간<br/>
				6. 그 외 간직하고 싶은 순간들<br/><br/>

				🎁 가장 센스있는 컷을 남겨주신 분들께 <br/>
				저희의 마음을 담은 선물을 준비했어요<br/>

				<br/>

				아래의 업로드 버튼을 통해 올려주세요<br/>
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

