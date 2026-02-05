import './Transport.css'
import './App.css'
import Space from './Space'



const sectionHeight = 6
const sectionDivide = 3

const Transport = ( ) => {

	return (
		<div style={{
			fontFamily:'Regular',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'flex-start',
			width: '85%',
			margin: '0 auto',
			marginTop: '0rem',
			pading: 0,
			height: '100%',
		}}>
		

			<div className='name'>
				셔틀버스&nbsp;
					<span style={{
						display: 'inline-block',
				 		lineHeight:'2.5rem',
						backgroundColor: '#F3E3B8FF'}}>[부산역 → 목장원]</span>
			</div>
			<div className='explain'>
				부산역 토요코인호텔 앞&nbsp;
				<span style={{
					textDecoration: 'underline',
					textDecorationThickness: '1px',
					textUnderlineOffset: '2px',
					display: 'inline-block',
					lineHeight: '2.2rem',
				}}>12:00 출발</span> <br/>
				<span className='notation'>	* 편도 운행 </span>
			</div>

			<Space height={`${sectionDivide}rem`}/>

			<div className='name'>
				시내버스
			</div>
			<div className='explain'>
				6번, 7번, 70번, 71번, 508번 &nbsp; 
				<span style={{
					display:'inline-block',
					lineHeight: '2.2rem',
					backgroundColor:'#BAD4B9'    
				}}>75광장 하차</span><br/>
			</div>

			<Space height={`${sectionDivide}rem`}/>

			<div className='name'>
				급행버스
			</div>
			<div className='explain'>
				3003번(김해공항 ↔ 태종도)&nbsp;
			<span style={{
				display: 'inline-block',
				lineHeight: '2.2rem',
				backgroundColor:'#BAD4B9'}}>75광장 하차</span> <br/>
			</div>

			<Space height={`${sectionDivide}rem`}/>
			
			<div className='name'>
				자차
			</div>
			<div className='explain'>
				목장원 내 주차 약 150대 가능<br/>
			</div>

		</div>
	)
}

export default Transport
