import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setMinute } from "../modules/Time";
import "./HourSelector.scss";
import downArrow from "../icons/downArrow.png";

const MinuteSelector = (MinuteSelectorProps) => {
  const { isStart, startTime, endTime, setMinute } = MinuteSelectorProps;

  const minute = [0, 10, 20, 30, 40, 50];
  const [open, setOpen] = useState(false);

  const onClickMinuteZone = () => {
    setOpen(!open);
  };

  const getMinutes = () => {
    if (!isStart) return endTime.min;
    return startTime.min;
  };

  return (
    <div className="dropdown">
      <div onClick={onClickMinuteZone}>
        <span className="dropdown-title">{getMinutes(isStart)}</span>
        <img className="dropdown-icon" src={downArrow} />
      </div>
      {open && (
        <ul>
          {minute.map((min) => {
            return (
              <li
                onClick={() => {
                  setMinute(`${min} 분`, isStart);
                  setOpen(false);
                }}
                key={min}
              >
                {min} 분
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    startTime: state.timeReducer.startTime,
    endTime: state.timeReducer.endTime,
  };
};

export default connect(mapStateToProps, { setMinute })(MinuteSelector);
