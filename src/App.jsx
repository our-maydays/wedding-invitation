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
const LastPhoto = lazy( () => import('./LastPhoto') )
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

					<Suspense >
						<Intersect className='fade-in'>
							<Invitation/>
						</Intersect>
					</Suspense>

					<Suspense >
						<Intersect className='fade-in'>
							<Introduce/>
						</Intersect>
					</Suspense>

					<Suspense >
						<Intersect className='fade-in'>
							<Calendar/>				
						</Intersect>
					</Suspense>

					<Suspense >
						<Intersect className='fade-in'>
							<Gallery/>
						</Intersect>
					</Suspense>

					<Suspense >
						<Intersect className='fade-in'>
							<Video/>
						</Intersect>
					</Suspense>

					<Suspense >
						<Intersect className='fade-in'>
							<Location/>
						</Intersect>
					</Suspense>

					<Suspense >
						<Intersect className='fade-in'>
							<RSVP/>
						</Intersect>
					</Suspense>

					<Suspense>
						<Intersect className='fade-in'>
							<Account/>
						</Intersect>
					</Suspense>
	
					<Suspense >
						<Intersect className='fade-in'>
							<GuestSnap/>
						</Intersect>
					</Suspense>

					<Suspense >
						<Intersect className='fade-in'>
							<GuestBook/>
						</Intersect>
					</Suspense>

					<Suspense >
						<Intersect className='fade-in'>
							<Notice/>
						</Intersect>
					</Suspense>

					<Suspense >
						<Intersect className='fade-in'>
							<LastPhoto/>
						</Intersect>
					</Suspense>

					<Suspense >
						<Intersect className='fade-in'>
							<Share/>
						</Intersect>
					</Suspense>

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

					{/*
					<div style={{fontSize:'8px'}}>
						build time : {import.meta.env.VITE_BUILD_TIME}
					</div>
					*/}

				</div>

			</div>
			

		</div>
	)
}

export default App
