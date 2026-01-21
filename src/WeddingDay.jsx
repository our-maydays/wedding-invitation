import { useEffect, useState } from 'react'
import moment from 'moment'
import Modal from 'react-modal'

const WeddingDay = ({targetDate}) => {

	const [isOpen, setIsOpen] = useState(false)

	useEffect( () => {
		if (moment().isSame(targetDate,'day')) {
			setIsOpen(true)
		}
	}, [targetDate])

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={ () => setIsOpen(false) }
			preventScroll={true}
			style={{
				overlay: {
					zIndex: '10000'
				}
			}}
		>
			<div 
				style={{ 
					color: 'black',
				}}
			>
			오늘입니다
			</div>
			<button onClick={ () => setIsOpen(false)}> 닫기 </button>
		</Modal>
	)

}

export default WeddingDay
