import './App.css'
import Space from './Space.jsx'

import Transport from './Transport'
import Route from './Route'
import Map from './Map'

const sectionHeight = 6
const sectionDivide = 3

const Location = () => {
	return (
		<div className='content-box'>
			
			<Space height={`${sectionHeight}rem`}/>

			<div className='section-subtitle'>LOCATION</div>
			<div className='section-title'>오시는 길</div>

			<Space height={`${sectionDivide}rem`}/>

			<div style={{	margin: 0,padding: 0}}>
				<span className='bold-text' style={{fontSize: '1.8rem'}}>
					영도 목장원,	오필로스가든
				</span>
				<br/>
				<span style={{fontSize: '1.6rem', color:'gray'}}>
					부산광역시 영도구 절영로 355
				</span>
				<br/>
			</div>

			<Space height={`${sectionDivide}rem`}/>

			<Map/>
			
			<Space height={`${sectionDivide}rem`}/>

			<Route/>	

			<Space height={`${sectionDivide}rem`}/>

			<Transport/>

			<Space height={`${sectionHeight}rem`}/>
		</div>
	)
}

export default Location
