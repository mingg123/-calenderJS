import React, { useState } from 'react';
import moment from 'moment';
import './DatePicker.scss';
import leftArrow from '../icons/leftArrow.png';
import rightArrow from '../icons/rightArrow.png';
const DatePicker = () => {
  const currentDate = moment();
  return (
    <div className="datePickerWrapper">
      {/* <Head /> */}
      <span>
        {currentDate.format('YYYY')}년 {currentDate.format('MM')}월{' '}
      </span>
      <img
        src={leftArrow}
        onClick={e => {
          currentDate.subtract(1, 'month');
        }}
      />
      <img
        src={rightArrow}
        onClick={e => {
          currentDate.subtract(-1, 'month');
        }}
      />
      <Days currentDate={currentDate} />
    </div>
  );
};

export const Head = () => {
  const currentDate = moment();
  const onClickNextMonth = () => {};
  const onclickPrevMonth = () => {};
  return (
    <>
      <span>
        {currentDate.format('YYYY')}년 {currentDate.format('MM')}월{' '}
      </span>
      <img src={leftArrow} onClick={e => {}} />
      <img src={rightArrow} onClick={e => {}} />
    </>
  );
};
export const Days = DaysProps => {
  const { currentDate } = DaysProps;
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

  function getStyleFromDate(date) {
    const startDate = moment().subtract(0, 'day');
    const endDate = moment().subtract(-30, 'day');

    let style = [];

    if (
      date.isSame(startDate, 'day') ||
      date.isSame(endDate, 'day') ||
      date.isBetween(startDate, endDate, 'day')
    ) {
      style.push('selected');
    }
    if (date.isBefore(startDate, 'day') || date.isAfter(endDate, 'day')) {
      style.push('inactiove');
    } else {
      style.push('default');
    }

    return style.join(' ');
  }

  return (
    <>
      <span className={getStyleFromDate(date)}>{date.date()}</span>
    </>
  );
};
export default DatePicker;
