import './App.css'
import Space from './Space'
import Snowfall from 'react-snowfall'

const sectionHeight = 4

//const mainphoto = `${import.meta.env.BASE_URL}image/DSC07876.jpg`
const mainphoto = `${import.meta.env.BASE_URL}image/mainphoto.jpg`
//const sakura = `${import.meta.env.BASE_URL}icon/sakura.png`
const sakura = `${import.meta.env.BASE_URL}icon/leaf.png`

const MainPhoto = () => {

	const snowflake1 = document.createElement('img')
		snowflake1.src=sakura
	const snowflake2 = document.createElement('img')
		snowflake2.src=sakura

	const images = [snowflake1, snowflake2]


	return (
		<div className='content-box'>

			<div id='photo-box' style={{
				position: 'relative',
				overflow: 'hidden',
			}}>
				<Snowfall
					speed={[0.2, 2]}
					radius={[12,20]}
					wind={[-0.5 ,2]} //[-0.5 2.0]
					opacity={[0.6,0.7]}
					style={{
					}}
					snowflakeCount={30}
					images={images}
				/>
				<img src={mainphoto} width={'100%'} style={{display:'block', margin: 'auto'}} 
					onContextMenu={(e) => e.preventDefault()}
					onDragStart={(e) => e.preventDefault()}
					draggable={false}
				/>
			</div>


		</div>
	)
}

export default MainPhoto
