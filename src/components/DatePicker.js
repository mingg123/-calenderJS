import React from 'react';
import moment from 'moment';
import './DataPicker.scss';
const DatePicker = () => {
  return (
    <div className="datePickerWrapper">
      <Days />
    </div>
  );
};

export const Days = () => {
  const currentDate = moment();
  const firstDate = moment(currentDate).startOf('month');
  const monthDays = moment(currentDate).daysInMonth();
  const prevMonth = moment(currentDate).subtract(1, 'month');
  const prevMonthDays = prevMonth.daysInMonth();
  const nextMonth = moment(currentDate).add(1, 'month');

  let labels = ['일', '월', '화', '수', '목', '금', '토'];
  let days = [];

  for (let i = firstDate.day(); i > 1; i--) {
    prevMonth.date(prevMonthDays - i + 2);
    days.push(<Day date={moment(prevMonth)} />);
  }

  for (let i = 1; i <= monthDays; i++) {
    currentDate.date(i);
    days.push(<Day date={moment(currentDate)} />);
  }

  const remainDay = 7 - (days.length % 7);
  if (remainDay < 7) {
    for (let i = 1; i <= remainDay; i++) {
      nextMonth.date(i);
      days.push(<Day date={moment(nextMonth)} />);
    }
  }
  return (
    <div>
      <div className="daysWrapper">
        {labels.map(elem => (
          <span key={elem}>{elem}</span>
        ))}
      </div>
      <div className="daysWrapper">{days.concat()}</div>
    </div>
  );
};

const Day = DayProps => {
  const { date } = DayProps;
  return (
    <>
      <span>{date.date()}</span>
    </>
  );
};
export default DatePicker;
