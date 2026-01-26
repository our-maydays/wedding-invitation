import { useEffect } from 'react'
import { Container as MapDiv, NaverMap, Marker, useNavermaps, InfoWindow } from 'react-naver-maps'
import './App.css'
const markerImg = `${import.meta.env.BASE_URL}icon/location.png`

const {naver} = window;
const Map = () => {

	useEffect( () => {
		const container = document.getElementById('map')

		const navermaps = useNavermaps()

//		const lng = 129.057387
//		const lat = 35.071647
		const lng = 129.057362356798
		const lat = 35.0716400952136


		const position = new naver.maps.LatLng(lat, lng)
		
		const mapOptions = {
			center: position.destinationPoint(0,-30),
			zoom: 17,
			minZoom: 6,
			zoomControl: false,
			scaleControl: false,
			disableDoubleClickZoom: true,
			disableDoubleTapZoom: true,
			disableKineticPan: true,
			disableTwoFingerTapZoom: true,
			keyboardShortcuts: false,

			draggable: false,
			logoControl: false,
			scrollWheel: false,

		}

		const map = new naver.maps.Map(container, mapOptions)

			{/*
			icon: {
				url: markerImg,
				scaledSize: new naver.maps.Size(40,40),
			},*/}
		const markerOptions = {
			position: position.destinationPoint(0,0),
			map: map,
		}

		const marker = new naver.maps.Marker(markerOptions)
	
		const infoContent = [
		  '<div className="iw_inner" style="padding:5px; line-height: 2.5rem;">',
 			'  <div className="bold-text" style="font-family: Bold; font-size: 1.6rem;"> 목장원 오필로스가든</div>',
 		  '  <div style="font-family: Regular; font-size: 1.6rem"> 부산시 영도구 절영로 355</div>',
			'  <div style="font-family: Regular; font-size: 1.6rem"> 5월 9일 토요일 오후 1시</div>',
			'</div>'
].join('');

		const infowindow = new naver.maps.InfoWindow({
			position: position.destinationPoint(0,0),
			content: infoContent,
			disableAnchor: false,
			pixelOffset: new naver.maps.Point(-50,180),
		})

		naver.maps.Event.addListener(marker, 'click', function(e) {
			if (infowindow.getMap()) {
				infowindow.close();
			} else {
				infowindow.open(map, marker)
			}
		})

	}, [])

	return (
		<div style={{padding: 0, margin: 0}}>
			<div id='map' style={{width:'100%', height:'250px',margin: '0 auto'}}> </div>

		</div>
	)
}

	

export default Map
