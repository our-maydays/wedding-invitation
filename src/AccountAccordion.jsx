import { useState } from 'react'
import './Account.css'

const copyIcon = `${import.meta.env.BASE_URL}/icon/copy.svg`
const upIcon = `${import.meta.env.BASE_URL}/icon/up.svg`
const downIcon = `${import.meta.env.BASE_URL}/icon/down.svg`

export default function AccountAccordion({sectionKey, defaultOpen=false}) {

  const data = [
    {
      key: 'groom',
      title: '신랑측',
      accounts: [
        { name: '강대원', bank: '신한은행', number: '110-000-00000' },
        { name: '노신조', bank: '우리은행', number: '110-000-00000' },
        { name: '강경보', bank: '국민은행', number: '110-000-00000' },
      ],
    },
    {
      key: 'bride',
      title: '신부측',
      accounts: [
        { name: '장상문', bank: '하나은행', number: '110-000-00000' },
        { name: '한현순', bank: '카카오뱅크', number: '110-000-00000' },
        { name: '장유진', bank: '농협', number: '110-000-00000' },
      ],
    },
  ]
	const section = data.find((d) => d.key === sectionKey)

	const [open, setOpen] = useState(defaultOpen)

	if (!section) return null

	const toggle = () => setOpen( (prev) => !prev ) 

	const copy_account = (bank, account) => {
		const text = `${bank} ${account}`
		navigator.clipboard.writeText(text)
		alert('계좌번호가 복사되었습니다')
	}


  return (
    <div className='account-wrapper'>
			<div className='account-card'>
          
          {/* 헤더 */}
          <div className='account-header'
            onClick={toggle}
          >
            <div style={{
							position: 'relative',
							left: '50%',
							transform:'translateX(-50%)'
						}}>{section.title}</div>
						<img src={open ? upIcon : downIcon } className='icon'/>
          </div>

          {/* 드롭다운 */}
          <div className='account-dropdown'
            style={{
              maxHeight: open ? section.accounts.length * 58 : 0,
            }}
          >
            {section.accounts.map((acc, idx) => (
              <div className='account-row' 
								key={idx} 
								onClick={()=>
									copy_account(acc.bank, acc.number)
								}
							>
								<div style={{
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
								}}>
									<img src={copyIcon} className='icon'/>
 		              <span className='bold-text' style={{marginLeft:'5px'}}> {acc.name}</span>
								</div>
                <span>
                  {acc.bank} {acc.number}
                </span>
              </div>
            ))}
          </div>

        </div>
    </div>
  )
}
