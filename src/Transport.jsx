import './Transport.css'
import './App.css'


const shuttleIcon = `${import.meta.env.BASE_URL}icon/shuttle.svg`
const busIcon = `${import.meta.env.BASE_URL}icon/bus.svg`
const expressbusIcon = `${import.meta.env.BASE_URL}icon/expressbus.svg`
const carIcon = `${import.meta.env.BASE_URL}icon/car.svg`

const Transport = ( ) => {

	return (
		<div style={{
			fontFamily:'Regular',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'flex-start',
			alignItems: 'flex-start',
			width: '90%',
			margin: '0 auto',
			marginTop: '0rem',
			pading: 0,
			height: '100%',
		}}>
			
			<div className='name'>
				<img className='icon' src={shuttleIcon} style={{paddingRight: '0.5rem'}}/>
				 셔틀버스
			</div>
			<div className='explain'>
				부산역 토요코인호텔 앞 12시 출발<br/>
				<span className='notation'>	* 편도 운행 </span>
			</div>

			<div className='space-box'/>

			<div className='name'>
				<img className='icon' src={busIcon} style={{paddingRight: '0.5rem'}}/>
				시내버스
			</div>
			<div className='explain'>
				6번, 7번, 70번, 71번, 508번 / 75광장 하차<br/>
			</div>

			<div className='space-box'/>

			<div className='name'>
				<img className='icon' src={expressbusIcon} style={{paddingRight: '0.5rem'}}/>
				급행버스
			</div>
			<div className='explain'>
				3003번(김해공항↔태종도) / 75광장 하차<br/>
				<span className='notation'> * 사상역 / 파라곤호텔 승차</span>
			</div>
			
			<div className='space-box'/>

			<div className='name'>
				<img className='icon' src={carIcon} style={{paddingRight: '0.5rem'}}/>
				주차
			</div>
			<div className='explain'>
				약 150대 가능
			</div>
		</div>
	)
}

export default Transport
