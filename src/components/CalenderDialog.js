import React from 'react';
import './CalenderDialog.scss';
import DatePicker from './DatePicker';
const CalenderDialog = () => {
  return (
    <div className="wrapper">
      <div>응시 기간 설 정</div>
      <div>응시 시작일</div>
      <DatePicker />
      <diiv>응시 마감일</diiv>
    </div>
  );
};
export default CalenderDialog;
