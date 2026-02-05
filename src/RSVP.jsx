import './App.css'
import './RSVP.css'
import Space from './Space'

import { useState } from 'react'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from './firebase'
import Modal from 'react-modal'

const closeIcon = `${import.meta.env.BASE_URL}/icon/close_icon.svg`
Modal.setAppElement('#root')


const RSVP = () => {

	const buttonWidth = 16
	const iconHeight = 5
	const textHeight = 2
	const questionSpace = 1
	const buttonHeight = 4
	const sectionHeight = 6
	const sectionSpace = 3
	const modalSectionSpace = 3

	const modalHeight = iconHeight + modalSectionSpace + (textHeight + questionSpace + buttonHeight + modalSectionSpace)*4 + buttonHeight + modalSectionSpace
	
	const [IsOpen, setIsOpen] = useState(false)
	
	const closeModal = () => {
		setIsOpen(false)
 	}

	const [side, setSide] = useState(null)
	const [attendance, setAttendance] = useState('true')
	const [name, setName] = useState('')
	const [guests, setGuests] = useState(1)

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
			setAttendance('')
			setSide('')
			setName('')
			setGuests(1)
			setIsOpen(false)
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
			<Space height={`${sectionHeight}rem`}/>
			<div className='section-subtitle'> R.S.V.P.</div>
			<div className='section-title'> 참석 여부 전달</div>

			<Space height={`${sectionSpace}rem`}/>

			<div style={{
				lineHeight:'2.5rem'
			}}>
				결혼식에 참석해주시는 모든 분들을<br/>
				더욱 특별하게 모시고자 하오니<br/>
				참석 여부 전달을 부탁드립니다
			</div>

			<Space height={`${sectionSpace}rem`}/>

			<div className='button' onClick={ () => setIsOpen(true)} style={{width: '15rem', margin:'auto'}}>
				참석 여부 전달
			</div>

			<Space height={`${sectionHeight}rem`}/>
			
			{/* Modal Window for RSVP */}

			<Modal isOpen={IsOpen} onRequestClose={closeModal} preventScroll={true}
				style={{
					overlay: {
						backgroundColor: '#D2D7D9CC',
						zIndex: '1000',
					},
					content: {
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%,-50%)',
						background: '#F8F7EE',
						width: '95%',
						maxWidth: '390px',
						height: `${modalHeight}rem`,
						border: 'none',
						borderRadius: '1rem',
						margin: 0, padding: 0,
					},
				}}
			>

				<div style={{width: '100%', height: '100%'}}>
					<div style={{
						display:'flex', justifyContent: 'center',alignItems: 'center',
						height: `${iconHeight}rem`, width:'100%',
						margin: 0, padding: 0,
						position: 'relative',
						backgroundColor: '#F3E3B880',
					}}>

						<div onClick={closeModal} style={{
							position: 'absolute',
							right: '1%',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							background: 'transparent',
							fontSize: '1.6rem',
							border: 'none',
							cursor: 'pointer',
							marginRight: '1rem',
						}}>
							<img src={closeIcon} style={{height: '3rem'}}/>
						</div>

					<div className='rsvp-title'
							style={{lineHeight:`${iconHeight-1}rem`}}>
						참석 여부 전달	
					</div>

					</div>


					<div style={{
						display:'flex', alignItems:'center',justifyContent:'center',
						width:'100%', height: `${modalHeight-iconHeight}rem`, 
						margin:0, padding:0,
					}}>

					<div style={{width:'100%', margin: 0, padding: 0}}>

					<Space height={`${modalSectionSpace}rem`}/>
					
					<div className='rsvp-question'>어느 측 하객이신가요? </div>
					<Space height={`${questionSpace}rem`}/>
					<div className='rsvp-toggle' style={{height: `${buttonHeight}rem`}}>
						<div className={`button ${side === 'groom' ? 'active' : ''}`}
							onClick={ () => handleSideClick('groom') }
							style={{width: `${buttonWidth}rem`}}
						> 신랑측 </div>

						<div className={`button ${side === 'bride' ? 'active' : ''}`}
							onClick={ () => handleSideClick('bride') }
							style={{width:`${buttonWidth}rem`}}
						> 신부측 </div>
					</div>

					<Space height={`${modalSectionSpace}rem`}/>

					<div className='rsvp-question'> 참석 여부 </div>
					<Space height={`${questionSpace}rem`}/>
					<div className='rsvp-toggle' style={{height: `${buttonHeight}rem`}}>
						<div className={`button ${attendance === 'true' ? 'active' : ''}`}
							onClick={ () => handleAttendanceClick('true') }
							style={{width: `${buttonWidth}rem`}}
						> 참석 </div>

						<div className={`button ${attendance === 'false' ? 'active' : ''}`}
							onClick={ () => handleAttendanceClick('false') }
							style={{width: `${buttonWidth}rem`}}
						> 불참 </div>
					</div>
					
					<Space height={`${modalSectionSpace}rem`}/>
					
					{attendance === 'true'  && (
						<>
							<div className='rsvp-question'> 동반자 수 </div>
							<Space height={`${questionSpace}rem`}/>
							<div className='rsvp-toggle' style={{height:`${buttonHeight}rem`}}>
								<input className='rsvp-input'
									type='number'
									min='0'
									value={guests}
									onChange={ (e) => setGuests(Number(e.target.value)) }
									style={{margin: '0 auto',width:'100%', height: `${buttonHeight-1}rem`}}
								/>
							</div>
							<Space height={`${modalSectionSpace}rem`}/>
						</>
					)}

					<div className='rsvp-question'> 성함 </div>
					<Space height={`${questionSpace}rem`}/>
					<div className='rsvp-toggle' style={{height: `${buttonHeight}rem`}}>
						<input className='rsvp-input'
							type='text'
							placeholder='성함을 입력해주세요'
							value={name}
							onChange={ (e) => setName(e.target.value) }
							style={{height:`${buttonHeight-1}rem`, width:'100%'}}
						/>
					</div>

					<Space height={`${modalSectionSpace}rem`}/>

					<div className='button' onClick={handleSubmit}
						style={{width:'90%', margin:'auto'}}> 전달 </div>

					<Space height={`${modalSectionSpace}rem`}/>

				</div>
				</div>
				</div>

		</Modal>


		</div>
	)
}

export default RSVP
