import './App.css'
import './RSVP.css'

import { useState } from 'react'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from './firebase'

const guestOptions = [
	'신랑 아버지',
	'신랑 어머니',
 	'신랑',
	'신부 아버지',
	'신부 어머니',
	'신부',
]

const RSVP = () => {

	const [side, setSide] = useState(null)
	const [attendance, setAttendance] = useState(true)
	const [name, setName] = useState('')
	const [guests, setGuests] = useState(guestOptions[0])
	const [loading, setLoading] = useState(false)

	const handleSubmit = async () => {
		if (!name.trim()) {
			alert('성함을 입력해주세요')
			return
		}

		try { 
			await addDoc(collection(db, 'rsvp'), {
				side,
				attendance,
				name,
				guests: attendance ? guests : 0,
				createdAt: serverTimestamp(),
			})

			alert('참석 여부가 전달되었습니다')
			setName('')
			setGuests(0)
		} catch (e) {
			console.error(e)
			alert('전송 중 오류가 발생했습니다')
		}
	}

	const handleSideClick = (value) => {
		setSide( (prev) => (prev === value ? null : value))
	}

	const handleAttendanceClick = (value) => {
		setAttendance( (prev) => (prev === value ? null : value))
	}
	return ( 
		<div className='content-box'>
			<div className='space-box-4rem'/>
			<div className='section-subtitle'> R. S. V. P. </div>
			<div className='section-title'> 참석여부 </div>

			<div className='space-box-4rem'/>

			<div>
				결혼식에 참석해주시는 모든 분들을<br/>
				더욱 특별하게 모시고자 하오니<br/>
				참석 여부 전달을 부탁드립니다
			</div>

			<div className='space-box-4rem'/>

			<div className='rsvp-question'> 어느 측 하객이신가요? </div>
			<div className='space-box-1rem'/>

			<div className='rsvp-toggle'>
				<button
					className={`button ${side === 'groom' ? 'active' : ''}`}
					aria-pressed={side === 'groom'}
					onClick={ () => handleSideClick('groom') }
				>
					신랑측
				</button>
				<button
					className={`button ${side === 'bride' ? 'active' : ''}`}
					aria-pressed={side === 'bride'}
					onClick={ () => handleSideClick('bride') }
				>
					신부측
				</button>
			</div>

			<div className='space-box-2rem'/>

			<div className='rsvp-question'> 첨석 여부 </div>
			<div className='space-box-1rem'/>
			<div className='rsvp-toggle'>
				<button 
					className={`button ${attendance === true ? 'active' : ''}`}
					onClick={() => handleAttendanceClick(true)}
				>
					참석
				</button>
				<button
					className={`button ${attendance === false ? 'active' : ''}`}
					onClick={() => handleAttendanceClick(false)}
				>
					불참석
				</button>
			</div>

			<div className='space-box-2rem'/>

			<div className='rsvp-question'> 성함 </div>
			<div className='space-box-1rem'/>
			<input 
				className='rsvp-input'
				type='text'
				placeholder='성함을 입력해주세요'
				value={name}
				onChange={(e) => setName(e.target.value)}
				style={{height: '3rem'}}
			/>
			<div className='space-box-2rem'/>

			{attendance && (
				<>
					<div className='rsvp-question'> 동반자 수 </div>
					<div className='space-box-1rem'/>
					<input
						className='rsvp-input'
						type='number'
						min='0'
						value={guests}
						onChange={(e) => setGuests(Number(e.target.value))}
						style={{height: '3rem'}}
					/>
					<div className='space-box-2rem'/>
				</>
			)}

			<button className='button' onClick={handleSubmit} style={{
				width: '80%',
				margin: '0 auto',
			}}>
				전달
			</button>
			
			<div className='space-box-4rem'/>

		</div>
	)
}

export default RSVP
