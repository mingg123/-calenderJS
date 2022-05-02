import React from "react";
import moment from "moment";
import "moment/locale/ko";
import { connect } from "react-redux";
import { changeDate } from "../modules/Date";
import "./Days.scss";
import Day from "./Day";

const Days = (DaysProps) => {
  const { isStart, date, changeDate } = DaysProps;
  const currentDate = moment(date);
  const daysInMonth = moment(date).daysInMonth();
  const firstDayDate = moment(date).startOf("month");
  const previousMonth = moment(date).subtract(1, "month");
  const previousMonthDays = previousMonth.daysInMonth();
  const nextMonth = moment(date).add(1, "month");

  let days = [];
  for (let i = firstDayDate.day(); i > 1; i--) {
    previousMonth.date(previousMonthDays - i + 2);

    days.push(
      <Day
        key={moment(previousMonth).format("DD MM YYYY")}
        onClick={(date, isStart) => changeDate(date, isStart)}
        newDate={moment(previousMonth)}
        isStart={isStart}
      />
    );
  }

  for (let i = 1; i <= daysInMonth; i++) {
    currentDate.date(i);

    days.push(
      <Day
        key={moment(currentDate).format("DD MM YYYY")}
        onClick={(date, isStart) => changeDate(date, isStart)}
        newDate={moment(currentDate)}
        isStart={isStart}
      />
    );
  }

  //이번 달 마지막 날 이후 들어갈 다음달 초기 날짜 생성
  const remainDay = 7 - (days.length % 7);

  if (remainDay < 7) {
    for (let i = 1; i <= remainDay; i++) {
      nextMonth.date(i);

      days.push(
        <Day
          key={moment(nextMonth).format("DD MM YYYY")}
          onClick={(date, isStart) => changeDate(date, isStart)}
          newDate={moment(nextMonth)}
          isStart={isStart}
        />
      );
    }
  }

  return <div>{days.concat()}</div>;
};

const mapStateToProps = (state) => {
  return {
    date: state.dateReducer.date,
  };
};

const mapDispatchToProps = {
  changeDate,
};
export default connect(mapStateToProps, mapDispatchToProps)(Days);
