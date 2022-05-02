import React, { useState } from "react";
import { connect } from "react-redux";
import { changeMonth } from "../modules/Date";
import "./DatePicker.scss";
import downArrow from "../icons/downArrow.png";
import Days from "./Days";
import Head from "./Head";

const DatePicker = (DatePickerProps) => {
  const { isStart, startDate, endDate } = DatePickerProps;
  const [open, setOpen] = useState(false);

  const onClickDatePickZoneOpen = () => {
    setOpen(!open);
  };

  function getInputTitle() {
    if (isStart) return startDate.format("LL");
    else return endDate.format("LL");
  }

  return (
    <div className="dataPicker">
      <div
        className={open ? "datePickerWrapper active" : "datePickerWrapper"}
        onClick={onClickDatePickZoneOpen}
      >
        <span className="dataPickerTitle"> {getInputTitle()}</span>
        <img className="downArrow" src={downArrow} />
      </div>
      {open && (
        <div className="dataPickerContent">
          <Head />
          <Days isStart={isStart} />
        </div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    date: state.dateReducer.date,
    startDate: state.dateReducer.startDate,
    endDate: state.dateReducer.endDate,
  };
};

export default connect(mapStateToProps, {
  changeMonth: changeMonth,
})(DatePicker);
