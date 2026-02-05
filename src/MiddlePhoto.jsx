import './App.css'
import Space from './Space'

const middlePhoto = `${import.meta.env.BASE_URL}image/middlephoto.jpg`

const MiddlePhoto = () => {

	return (
		<div className='content-box'>

			<div style={{ 
				overflow: 'hidden',
				width: '100%',
				height: '320px',
			}}>

				<img src={middlePhoto} style={{
					width: '100%',
					height: '100%',
					objectFit: 'cover',
					objectPosition: '50% 40%',
				}}/>

			</div>

		</div>
	)
}

export default MiddlePhoto
