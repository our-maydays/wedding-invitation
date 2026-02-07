import './App.css'

import { lazy, Suspense } from 'react'

import Intersect from './Intersect'
import FirstImage from './FirstImage'
import BGM from './BGM'
import WeddingDay from './WeddingDay'
import MainPhoto from './MainPhoto'

const Invitation = lazy( () => import('./Invitation') )
const Introduce = lazy( () => import('./Introduce') )
const Calendar = lazy( () => import('./Calendar') )
const Location = lazy( () => import('./Location') )
const Gallery = lazy( () => import('./Gallery') )
const Video = lazy( () => import('./Video') )
const Account = lazy( () => import('./Account') )
const GuestBook = lazy( () => import('./GuestBook') )
const Notice = lazy( () => import('./Notice') )
const RSVP = lazy( () => import('./RSVP') )
const GuestSnap = lazy( () => import('./GuestSnap') )
const LastImage = lazy( () => import('./LastImage') )
const Share = lazy( () => import('./Share') )

{/*
import Invitation from './Invitation'
import Introduce from './Introduce'
import Calendar from './Calendar'
import Location from './Location'
import Gallery from './Gallery'
import Video from './Video'
import Account from './Account'
import GuestBook from './GuestBook'
import Notice from './Notice'
import RSVP from './RSVP'
import GuestSnap from './GuestSnap'
import LastImage from './LastImage'
import Share from './Share'
*/}

import FontSizeToggle from './FontSizeToggle'

function App() {
	
	const debug = process.env.NODE_ENV === 'development'?'solid':'none';


	return (
		<div id='wedding-invitation'>

			<FirstImage/>

			<div className='main-frame'>


				<WeddingDay targetDate='2026-05-09'/>

				<div style={{
					textAlign: 'right', 
					position: 'sticky', 
					top: '10px',
					marginRight: '10px',
					zIndex: 9,
				}}>
					<BGM/>
				</div>
				
				<div className='photo-sticky-container'>
					<Intersect>
						<MainPhoto/>
					</Intersect>
				</div>

				<div className='content-wrapper'>

					<Intersect className='fade-in'>
						<Suspense >
							<Invitation/>
						</Suspense>
					</Intersect>

					<Intersect className='fade-in'>
						<Suspense >
							<Introduce/>
						</Suspense>
					</Intersect>

					<Intersect className='fade-in'>
						<Suspense >
							<Calendar/>				
						</Suspense>
					</Intersect>

					<Intersect className='fade-in'>
						<Suspense >
							<Gallery/>
						</Suspense>
					</Intersect>

					<Intersect className='fade-in'>
						<Suspense >
							<Video/>
						</Suspense>
					</Intersect>

					<Intersect className='fade-in'>
						<Suspense >
							<Location/>
						</Suspense>
					</Intersect>

					<Intersect className='fade-in'>
						<Suspense >
							<RSVP/>
						</Suspense>
					</Intersect>

					<Intersect className='fade-in'>
						<Suspense>
							<Account/>
						</Suspense>
					</Intersect>
	
					<Intersect className='fade-in'>
						<Suspense >
							<GuestSnap/>
						</Suspense>
					</Intersect>

					<Intersect className='fade-in'>
						<Suspense >
							<GuestBook/>
						</Suspense>
					</Intersect>

					<Intersect className='fade-in'>
						<Suspense >
							<Notice/>
						</Suspense>
					</Intersect>

					<Intersect className='fade-in'>
						<Suspense >
							<LastImage/>
						</Suspense>
					</Intersect>

					<Intersect className='fade-in'>
						<Suspense >
							<Share/>
						</Suspense>
					</Intersect>

					<Intersect className='fade-in'>
						Copyright 경보&유진
					</Intersect>

					<div style={{
						position: 'sticky',
						bottom: '10px',
						zIndex: 9,
						display: 'flex',
						justifyContent:'flex-end',
						marginRight: '10px',
					}}>
						<FontSizeToggle/>
					</div>

					<div style={{fontSize:'8px'}}>
						build time : {import.meta.env.VITE_BUILD_TIME}
					</div>

				</div>

			</div>
			

		</div>
	)
}

export default App
