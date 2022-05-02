import React from "react";
import { connect } from "react-redux";
import DateSelectZone from "../components/DateSelectZone";
import { closeDialog } from "../modules/Dialog";
import "./CreateDateDialog.scss";

const CreateDateDialog = (CreateDateDialogProps) => {
  const { closeDialog } = CreateDateDialogProps;
  return (
    <div className="dialogWrapper">
      <div className="dialogBack" onClick={closeDialog} />
      <div className="dialogContainer">
        <p className="dialogtitle">응시 기간 설정</p>
        <DateSelectZone isStart={true} />
        <div className="divider" />
        <DateSelectZone isStart={false} />
        <div className="dialogBtnWrapper">
          <button className="dialogCancelBtn" onClick={closeDialog}>
            취소
          </button>
          <button className="dialogApplyBtn" onClick={closeDialog}>
            확인
          </button>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    open: state.dialogReducer.open,
  };
};

const mapDispatchToProps = {
  closeDialog,
};
export default connect(mapStateToProps, mapDispatchToProps)(CreateDateDialog);
