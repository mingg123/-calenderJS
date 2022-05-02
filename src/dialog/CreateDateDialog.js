import React from "react";
import { connect } from "react-redux";
import DateSelectZone from "../components/DateSelectZone";
import { closeDialog } from "../modules/Dialog";
import "./CreateDateDialog.scss";

const CreateDateDialog = (CreateDateDialogProps) => {
  const { closeDialog } = CreateDateDialogProps;
  return (
    <div className="wrapper">
      <p className="modal-title">응시 기간 설정</p>
      <DateSelectZone isStart={true} />
      <br />
      <DateSelectZone isStart={false} />
      <button onClick={closeDialog}>취소</button>
      <button onClick={closeDialog}>확인</button>
    </div>
  );
};
const mapStateToProps = (state) => {};

const mapDispatchToProps = {
  closeDialog,
};
export default connect(mapStateToProps, mapDispatchToProps)(CreateDateDialog);
