import './App.css'

import Transport from './Transport'
import Route from './Route'
import Map from './Map'

const Location = () => {
	return (
		<div className='content-box'>

			<div className='space-box-4rem'/>

			<div className='section-subtitle'> L O C A T I O N </div>
			<div className='section-title'>
				오시는 길 
			</div>
			<div className='space-box-2rem'/>
			<div style={{
				margin: 0,
				padding: 0,
			}}>
				<span className='bold-text' style={{fontSize: '1.6rem'}}>
					영도 목장원	오필로스가든
				</span>
				<br/>
				<span style={{fontSize: '1.4rem', color:'gray'}}>
					부산광역시 영도구 절영로 355
				</span>
				<br/>
				<span style={{fontSize: '1.2rem', color: 'gray'}}>
					051-404-5011
				</span>
			</div>

			<div className='space-box-2rem'/>

			<Map/>
			
			<div className='space-box-2rem'/>
			<Route/>	
			<div className='space-box-2rem'/>
			<Transport/>
			<div className='space-box-4rem'/>
		</div>
	)
}

export default Location
