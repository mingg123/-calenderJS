import moment from "moment";
import "moment/locale/ko";
export const CHANGE_MONTH = "CHANGE_MONTH";
export const CHANGE_DATE = "CHANGE_DATE";

export const changeMonth = (month) => {
  return {
    type: "CHANGE_MONTH",
    payload: month,
  };
};

export const changeDate = (date, isStart) => {
  return {
    type: CHANGE_DATE,
    payload: date,
    isStart: isStart,
  };
};

const initialState = {
  date: moment(),
  startDate: moment(),
  endDate: moment(),
};

export default function dateReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_MONTH: {
      return { ...state, date: state.date.month(action.payload).clone() };
    }
    case CHANGE_DATE: {
      const { startDate, endDate } = state;
      if (action.isStart) {
        if (isAfterEndTime(endDate, action.payload)) {
          return state;
        } else {
          return {
            ...state,
            startDate: moment(action.payload),
          };
        }
      } else {
        if (isSameStartTime(startDate, action.payload)) {
          return {
            ...state,
            endDate: moment(action.payload),
          };
        } else if (isBeforeStartTime(startDate, action.payload)) {
          return {
            ...state,
            endDate: moment(action.payload),
          };
        } else {
          return state;
        }
      }
    }
    default:
      return state;
  }
}

function isAfterEndTime(endDate, currentDate) {
  return currentDate.isAfter(endDate);
}
function isBeforeStartTime(startDate, currentDate) {
  return startDate.isBefore(currentDate);
}

function isSameStartTime(startDate, currentDate) {
  return startDate.isSame(currentDate);
}
