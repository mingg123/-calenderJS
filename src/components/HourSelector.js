import React, { useState, useCallback } from "react";
import { connect } from "react-redux";
import { setHour } from "../modules/Time";
import "./HourSelector.scss";
import downArrow from "../icons/downArrow.png";

const HourSelector = (HourSelectorProps) => {
  const { isStart, startTime, endTime, setHour } = HourSelectorProps;
  const Hour = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const [open, setOpen] = useState(false);
  const onClickHourZoneOpen = () => {
    setOpen(!open);
  };

  const getHour = () => {
    if (!isStart) return endTime.hour;
    return startTime.hour;
  };

  const onClickHourSelect = useCallback(
    (hour, isAm) => {
      if (isAm) {
        setHour(`오전 ${hour} 시`, isStart);
      } else {
        setHour(`오후 ${hour} 시`, isStart);
      }
      setOpen(false);
    },
    [setHour, open]
  );
  return (
    <div>
      <div
        className={open ? "HourSelectorWrapperActive" : "HourSelectorWrapper"}
        onClick={onClickHourZoneOpen}
      >
        <span className="HourTitle">{getHour()}</span>
        <img src={downArrow} />
      </div>
      {open && (
        <div className="HourSelectorContent">
          <ul>
            {Hour.map((hour) => {
              return (
                <li
                  className="option"
                  key={hour}
                  onClick={() => {
                    onClickHourSelect(hour, true);
                  }}
                >
                  오전 {hour} 시
                </li>
              );
            })}
            {Hour.map((hour) => {
              return (
                <li
                  className="option"
                  key={hour}
                  onClick={() => {
                    onClickHourSelect(hour, false);
                  }}
                >
                  오후 {hour} 시
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
  setHour,
};
export default connect(mapStateToProps, mapDispatchToProps)(HourSelector);
