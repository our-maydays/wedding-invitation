import AccountAccordion from './AccountAccordion'

import './App.css'
import './Account.css'

const Account = () => {

	const randomKey = Math.random() < 0.5 ? 'groom' : 'bride'
	return (
		<div className='content-box'>
			<div className='space-box-4rem'/>

			<div className='section-subtitle'>A C C O U N T</div>
			<div className='section-title'>마음 전하실 곳</div>
			<div className='space-box-2rem'/>

			<div style={{
				fontSize: '1.6rem' ,
				margin: 0,
				padding: 0,
			}}>
				참석이 어려우신 분들을 위해<br/>
				계좌번호를 기재하였습니다<br/>
				너그러운 마음으로 양해 부탁드립니다
			</div>
		
			<div className='space-box-2rem'/>

			<AccountAccordion sectionKey='groom' defaultOpen={randomKey==='groom'}/>

			<div className='space-box-2rem'/>

			<AccountAccordion sectionKey='bride' defaultOpen={randomKey==='bride'}/>

			<div className='space-box-4rem'/>

		</div>
	)
}

export default Account
