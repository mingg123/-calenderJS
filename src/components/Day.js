import React from "react";
import { connect } from "react-redux";
import "./Days.scss";

const Day = (DayProps) => {
  const { isStart, date, newDate, startDate, endDate, onClick } = DayProps;
  return <div className="dayContent">{newDate.date()}</div>;
};

const mapStateToProps = (state) => {
  return {
    date: state.dateReducer.date,
    startDate: state.dateReducer.startDate,
    endDate: state.dateReducer.endDate,
  };
};

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Day);
