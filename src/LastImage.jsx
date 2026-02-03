import './App.css'
import Space from './Space'

const mainphoto = `${import.meta.env.BASE_URL}image/DSC00420.jpg`
const sectionHeight = 6


const LastImage = () => {

	return (
		<div className='content-box'>

		<Space height={`${sectionHeight}rem`}/>
			<div className='photo-box'>
				<img src={mainphoto} width={'100%'} style={{diplay:'block', margin: 'auto'}}/>
			</div>

		<Space height={`${sectionHeight}rem`}/>

		</div>
	
	)

}

export default LastImage
