import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setMinute } from "../modules/Time";
import "./MinuteSelector.scss";
import downArrow from "../icons/downArrow.png";

const minArr = [0, 10, 20, 30, 40, 50];

const MinuteSelector = (MinuteSelectorProps) => {
  const { isStart, startTime, endTime, setMinute } = MinuteSelectorProps;

  const [open, setOpen] = useState(false);

  const onClickMinuteZone = () => {
    setOpen(!open);
  };

  const getMinutes = () => {
    if (!isStart) return endTime.min;
    return startTime.min;
  };

  return (
    <div className="minuteSelectorZone">
      <div
        className={
          open ? "minutesSelectorWrapper active" : "minutesSelectorWrapper"
        }
        onClick={onClickMinuteZone}
      >
        <span className="minuteTitle">{getMinutes(isStart)}</span>
        <img src={downArrow} />
      </div>
      {open && (
        <div className="minutesSelectorContent">
          <ul>
            {minArr.map((min, index) => {
              return (
                <li
                  onClick={() => {
                    setMinute(`${min} 분`, isStart);
                    setOpen(false);
                  }}
                  key={index}
                >
                  {min} 분
                </li>
              );
            })}
          </ul>
        </div>
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

const mapDispatchToProps = {
  setMinute,
};
export default connect(mapStateToProps, mapDispatchToProps)(MinuteSelector);
