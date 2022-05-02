import React from "react";
import { connect } from "react-redux";
import "./Days.scss";

const Day = (DayProps) => {
  const { isStart, date, newDate, startDate, endDate, onClick } = DayProps;
  function getStyleFromDateState(newDate) {
    let style = [];
    if (newDate.isBefore(startDate, "day")) {
      style.push("inactive");
    }
    if (
      newDate.isSame(startDate, "day") ||
      newDate.isSame(endDate, "day") ||
      newDate.isBetween(startDate, endDate, "day")
    ) {
      style.push("selected");
    }
    if (!newDate.isSame(date, "month")) {
      style.push("muted");
    }
    return style.join(" ");
  }

  return (
    <span
      onClick={() => onClick(newDate, isStart)}
      className={getStyleFromDateState(newDate)}
    >
      {newDate.date()}
    </span>
  );
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
