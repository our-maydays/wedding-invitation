import './App.css'
import Space from './Space'

const mainphoto = `${import.meta.env.BASE_URL}image/lastphoto.jpg`
const sectionHeight = 3


const LastPhoto = () => {

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

export default LastPhoto
