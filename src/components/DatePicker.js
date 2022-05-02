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
    <div>
      <div onClick={onClickDatePickZoneOpen}>
        {getInputTitle()}
        <img src={downArrow} />
      </div>
      {open && (
        <div>
          <Head />
          <Days isStart={true} />
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
