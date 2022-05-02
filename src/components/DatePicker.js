import React, { useState } from "react";
import moment from "moment";
import { connect } from "react-redux";
import { changeMonth } from "../modules/Date";
import "./DatePicker.scss";
import downArrow from "../icons/downArrow.png";
import Days from "./Days";
import Head from "./Head";

const DatePicker = (DatePickerProps) => {
  const { isStart, startDate, endDate } = DatePickerProps;
  const [open, setOpen] = useState(true);

  return (
    <div>
      <div>
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
