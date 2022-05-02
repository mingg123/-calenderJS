import React from "react";
import { connect } from "react-redux";

const Day = (DayProps) => {
  const { isStart, date, newDate, startDate, endDate, onClick } = DayProps;
  return <div>{newDate.date()}</div>;
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
