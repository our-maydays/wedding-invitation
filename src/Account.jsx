import AccountAccordion from './AccountAccordion'

import Space from './Space'
import './App.css'
import './Account.css'

const sectionHeight = 6
const sectionDivide = 3

const Account = () => {

	const randomKey = Math.random() < 0.5 ? 'groom' : 'bride'
	return (
		<div className='content-box'>
			<Space height={`${sectionHeight}rem`}/>

			<div className='section-subtitle'>ACCOUNT</div>
			<div className='section-title'>마음 전하실 곳</div>
			<Space height={`${sectionDivide}rem`}/>

			<div style={{
				fontSize: '1.6rem' ,
				lineHeight: '2.5rem',
				margin: 0,
				padding: 0,
			}}>
				멀리서도 축하의 마음을 <br/>
				전하고
				싶으신 분들을	위해<br/>
				계좌번호를 안내드립니다<br/><br/>

				소중한 축하를 보내주셔서 감사드립니다<br/>
				{/*따뜻한 마음에 깊이 감사드립니다<br/> */}
			</div>
		
			<Space height={`${sectionDivide}rem`}/>

			<AccountAccordion sectionKey='groom' defaultOpen={randomKey==='groom'}/>

			<Space height={`${sectionDivide}rem`}/>

			<AccountAccordion sectionKey='bride' defaultOpen={randomKey==='bride'}/>

			<Space height={`${sectionHeight}rem`}/>

		</div>
	)
}

export default Account
