import './App.css'
import './Notice.css'
import Space from './Space'

const sectionHeight = 6
const sectionDivide = 3

const Notice = () => {
	return (

		<div className='content-box'>
			<Space height={`${sectionHeight}rem`}/>
				<div className='notice-wrapper'>
					<div className='notice-title'>
	
						<div className='section-title' style={{color:'white'}}>안내사항</div>
					</div>
				<div className='notice-content'>
							{/*	•❀ ☘︎ ☘︎ ✿ */}

							<div className='notice-item'>
								<div style={{fontFamily:'sans-serif'}}>✓&nbsp;</div>
								식사는 오후 1시부터 본관 4층
								컨벤션홀에서 제공합니다<br/><br/>
							</div>

							<div className='notice-item'>
								<div style={{fontFamily:'sans-serif'}}>✓&nbsp;</div>
								우천시 실내 채플홀로 장소가 변경될 수 있습니다<br/><br/>
							</div>
							
							<div className='notice-item'>
								<div style={{fontFamily:'sans-serif'}}>✓&nbsp;</div>
								야외에서 예식이 진행되니
								선글라스 지참을 추천드립니다<br/><br/>
							</div>

							<div className='notice-item'>
								<div style={{fontFamily:'sans-serif'}}>✓&nbsp;</div>
								'도도한 쭈쭈바'의 소소한
								축하 무대가	준비되어 있습니다
							</div>
				</div>
			</div>
			
			<Space height={`${sectionHeight/2}rem`}/>

		</div>
	)
}

export default Notice
