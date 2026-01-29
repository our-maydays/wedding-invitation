import './Calendar.css'
import './App.css'
import Space from './Space'

import moment from 'moment'
import 'moment/dist/locale/ko'

import Dday from './Dday'

const sectionHeight = 6
const sectionDivide = 3
const calendarSpace = 1
const ddaySpace = 2
const cw = '80%'

const Calendar = () => {

	moment.locale('ko')
	const today = new Date();
	const tg_date = new Date(2026,4,9,13,0,0);
	const daysOfWeek = ['일','월','화','수','목','금','토']
	const daysInMonth = 31;
	const firstDayOfMonth = new Date(2026,4,1).getDay();
	const target_day = 9;

	const calendarDays = [];
	for (let i = 0; i < firstDayOfMonth; i++) {
		calendarDays.push(<td key={`empty-${i}`}></td>);
	}

	for (let day=1; day <= daysInMonth; day++) {
		calendarDays.push(
			<td key={day}>
				{day}
			</td>
			);
	}

	const rows = [];
	for (let i = 0; i < calendarDays.length; i+=7) {
		const week = calendarDays.slice(i, i+7);
		rows.push(
			<tr key={`row-${i}`}>
				{week.map((day, index) => (
					<td key={index} className={
						(day.props.children  === target_day) ? 'special-day' 
						: (index === 0) ? 'sunday' : `${day.props.children}`}> 
						{day.props.children}
					</td>
				))}
			</tr>
			);
	}

	const dayLeft = Math.floor((dateOnly(tg_date)-dateOnly(today))/(1000*60*60*24))

	return (
		<div className='calendar-box' style={{background:'#F3E3B880'}}>
		<Space height={`${sectionHeight}rem`}/>
			<div className='section-title' style={{
			}}>
				2026. 5. 9.
			</div>
			
			<Space height={'0.7rem'}/>

			<div style={{
				fontSize: '1.6rem',
				margin: 0,
				padding: 0,
				color: 'black',
				}}
			>
				토요일 오후 1시<br/>
			</div>
			
			<Space height={`${sectionDivide}rem`}/>
			
			<hr style={{
				outline: 'none',
				border: '0.5px solid rgba(128,128,128,0.2)',
				margin: '0 auto',
				padding: 0,
				width: `${cw}`,
			}}/>

			<Space height={`${calendarSpace}rem`}/>

			<div style={{
				display: 'flex', 
				justifyContent: 'center', 
				margin: 0,
				padding: 0,
				}}
			>
				<table className='calendar' style={{width:`${cw}`}}>
					<thead>
						<tr>
							{daysOfWeek.map((day,index) => (
								<th key={index} className={index === 0 ? 'sunday' : `${index}`}>{day}</th>
							))}
						</tr>
					</thead>
					<tbody>
						{rows}
					</tbody>
				</table>
			</div>
			
			<Space height={`${calendarSpace}rem`}/>

			<hr style={{
				outline: 'none',
				border: '0.5px solid rgba(128,128,128,0.2)',
				width: `${cw}`,
				margin: '0 auto',
				padding: 0,
			}}/>

			<Space height={`${sectionDivide}rem`}/>

			<Dday/>
			
			<Space height={`${ddaySpace}rem`}/>

			<div style={{margin: 0, padding: 0}}> 
				
				경보, 유진의 결혼식이 &nbsp;
				{(dayLeft > 0) ? (
					<>
						<span className='bold-text' style={{fontFamily: 'Bold'}}>
							{dayLeft}
						</span>
						<span style={{}}>
							일 남았습니다
						</span>
					</>
				) : (
					((dayLeft < 0) ? (
						<>
							<span className='bold-text' style={{fontFamily: 'Bold'}}>
								{-dayLeft}
							</span>
							<span style={{}}>
								일 지났습니다
							</span>
						</>
					) : (
						<>
							<span className='bold-text' style={{fontFamily: 'Bold'}}>
								오늘
							</span>
							<span> 
								입니다
							</span>
						</>
					))
				)}
			</div>
			
			<Space height={`${sectionHeight}rem`}/>
		</div>
	);
};

function dateOnly(d) {
	return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}
export default Calendar
