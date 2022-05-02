import React from "react";
import { connect } from "react-redux";
import { changeMonth } from "../modules/Date";
import leftArrow from "../icons/leftArrow.png";
import rightarrow from "../icons/rightArrow.png";
import "./Head.scss";
const Head = (HeadProps) => {
  const { date, changeMonth } = HeadProps;
  return (
    <div className="HeadWrapper">
      <span className="HeadTitle">
        {date.format("YYYY")}년 {date.format("MM")}월
      </span>
      <div className="HeadBtnwrapper">
        <div
          className="HeadRightBtn"
          onClick={() => {
            changeMonth(date.month() - 1);
          }}
        >
          <img src={leftArrow} />
        </div>
        <div
          onClick={() => {
            changeMonth(date.month() + 1);
          }}
        >
          <img src={rightarrow} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    date: state.dateReducer.date,
  };
};

const mapDispatchToProps = {
  changeMonth: changeMonth,
};
export default connect(mapStateToProps, mapDispatchToProps)(Head);
