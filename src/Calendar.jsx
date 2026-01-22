import './Calendar.css'
import './App.css'
import Space from './Space'

import moment from 'moment'
import 'moment/dist/locale/ko'

import Dday from './Dday'

const sectionHeight = 4
const sectionDivide = 3

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
						: (index === 0) ? 'sunday' : ''}> 
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
			<p className='bold-text' style = {{
				fontSize: '1.8rem', 
				fontFamily: 'Bold',
				margin: 0,
				padding: 0,
				color: '#2F2359',
			}}>
				2026. 5. 9.
			</p>
			<p style={{
				fontSize: '1.4rem',
				margin: 0,
				padding: 0,
				color: 'gray',
				}}
			>
				토요일 오후 1시<br/>
			</p>
			
			<Space height={`${sectionDivide}rem`}/>
			
			<hr style={{
				outline: 'none',
				border: '0.5px solid gray',
				margin: '0 auto',
				padding: 0,
				width: '65%',
			}}/>

			<div style={{
				display: 'flex', 
				justifyContent: 'center', 
				margin: 0,
				padding: 0,
				}}
			>
				<table className='calendar'>
					<thead>
						<tr>
							{daysOfWeek.map((day,index) => (
								<th key={index} className={index === 0 ? 'sunday' : ''}>{day}</th>
							))}
						</tr>
					</thead>
					<tbody>
						{rows}
					</tbody>
				</table>
			</div>
			
			<hr style={{
				outline: 'none',
				border: '0.5px solid gray',
				width: '65%',
				margin: '0 auto',
				padding: 0,
			}}/>

			<Space height={`${sectionDivide}rem`}/>

			<Dday/>
			
			<Space height={`${sectionDivide}rem`}/>

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
