import { combineReducers } from "redux";
import dialogReducer from "./Dialog";
import dateReducer from "./Date";
import timeReducer from "./Time";

const rootReducer = combineReducers({
  dialogReducer,
  dateReducer,
  timeReducer,
});

export default rootReducer;
