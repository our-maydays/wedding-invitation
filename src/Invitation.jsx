import './App.css'
import './Invitation.css'
import Space from './Space.jsx'

const Invitation = () => {

	const sectionHeight = 6
	const sectionDivide = 3

	return (
		<div className='content-box'>
			<Space height={`${sectionHeight}rem`}/>
			<div className='section-subtitle'> INVITATION </div>
			<div className='section-title'>
					저희들의 작은 축제에<br/> <span className='line-break'/> 소중한 분들을 초대합니다
			</div>

			<Space height={`${sectionDivide}rem`}/>

			<div style={{
				lineHeight: '3rem',
				fontSize: '1.7rem',
				padding: 0,
				margin: 0,
				outline: 'none',
				border: 'none',
			}}>	
				벚꽃이 지는 봄날, 처음 만난 인연이 <br/>4년을 지나 
				같은 계절에 이르렀습니다 <br/><br/>
				벚꽃이 지고 새싹이 돋아나는 이 순간처럼<br/>
				닮은 듯 다른 두 사람이 함께  손을 잡고 <br/>
				새로운 시작을 맞이하려 합니다<br/><br/>
				이 봄날의 순간을 소중한 분들과 <br/>
				함께 기억하고 싶습니다<br/>
			</div>
			{/*
			<Space height={`${sectionHeight}rem`}/>

			<div className='box'>
				<div className='parentname'> 강대원 </div>
				<div className='separate'> · </div>
				<div className='parentname'> 노신조 </div>

				<div className='type'> 의</div>
				<div className='sd'> 아들</div>
				<div className='namebox'> 경보 </div><br/>
			</div>
			<Space height={'1rem'}/>
			
			<div className='box'>
				<div className='parentname'> 장상문 </div>
				<div className='separate'> · </div>
				<div className='parentname'> 한현준 </div>

				<div className='type'> 의</div>
				<div className='sd'> 딸 </div>
				<div className='namebox'> 유진</div><br/>
			</div>



			*/}
			<Space height={`${sectionHeight}rem`}/>
		</div>
	)
}

export default Invitation
