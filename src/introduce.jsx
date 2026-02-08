import './App.css'
import './Introduce.css'
import Space from './Space'

//const bridePhoto = `${import.meta.env.BASE_URL}image/DSC09234.jpg`
//const groomPhoto = `${import.meta.env.BASE_URL}image/DSC09021.jpg`
const bridePhoto = `${import.meta.env.BASE_URL}image/bride.jpg`
const groomPhoto = `${import.meta.env.BASE_URL}image/groom.jpg`

const sectionSpace = 2
const sectionHeight = 6
const sectionDivide = 3

const Introduce = () => {

	return(
		<div className='content-box'>
			
			<Space height={`${sectionHeight}rem`}/>

			<div className='introduce-box'>
				<div className='introduce-body' style={{paddingLeft:0}}>
					<span style={{fontSize: '1.4rem',color:'#5E3E8C'}}>신랑</span>
					&nbsp;
					<span className='bold-text' style={{fontSize:'1.8rem'}}>강경보</span><br/>
					<hr className='divider'/>
					강대원·노신조의 아들
				</div>
				<div className='introduce-photo'>
					<img src={groomPhoto}/>
				</div>
			</div>

			<Space height={`${sectionSpace}rem`}/>

			<div className='introduce-box'>
				<div className='introduce-photo'>
					<img src={bridePhoto}/>
				</div>
				<div className='introduce-body'>
					<span style={{fontSize: '1.4rem',color:'#5E3E8C'}}>신부</span>
					&nbsp;
					<span className='bold-text' style={{fontSize:'1.8rem'}}>장유진</span> <br/>
					<hr className='divider'/>
					장상문·한현준의 딸
				</div>
			</div>

			<Space height={`${sectionHeight}rem`}/>

		</div>
	)
}

export default Introduce
