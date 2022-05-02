import React, { useEffect, useState } from "react";

import HourSelector from "./HourSelector";
import MinuteSelector from "./MinuteSelector";
import DatePicker from "./DatePicker";
import "./DateSelectZone.scss";

const DateSelectZone = (DateSelectZoneProps) => {
  const { isStart } = DateSelectZoneProps;
  const [title, setTitle] = useState("");
  useEffect(() => {
    isStart ? setTitle("시작일") : setTitle("마감일");
  }, [isStart]);
  return (
    <>
      <p className="timeSelectorTitle">응시 {title}</p>
      <div className="dateSelectZoneWrapper">
        <DatePicker isStart={isStart} />
        <HourSelector isStart={isStart} />
        <MinuteSelector isStart={isStart} />
      </div>
    </>
  );
};

export default DateSelectZone;
