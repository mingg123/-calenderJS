import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import CreateDateDialog from "./dialog/CreateDateDialog";
import { connect } from "react-redux";
import { openDialog } from "./modules/Dialog";
function App(AppProps) {
  const { open, openDialog } = AppProps;
  return (
    <div className="AppWrapper">
      <div className="dialogBtnWrapper">
        <button className="dialogBtn" onClick={openDialog}>
          열기
        </button>
        {open && <CreateDateDialog />}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    open: state.dialogReducer.open,
  };
};

const mapDispatchToProps = {
  openDialog,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
