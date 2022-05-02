import moment from "moment";
import "moment/locale/ko";

export const SET_HOUR = "SET_HOUR";
export const SET_MIN = "SET_MIN";

export const setHour = (hour, start) => {
  return {
    type: "SET_HOUR",
    payload: hour,
    start: start,
  };
};

export const setMinute = (min, start) => {
  return {
    type: "SET_MIN",
    payload: min,
    start: start,
  };
};

const date = moment().format("LT").split(":");
const min = Math.floor(date[1] / 10) * 10;

const INITIAL_STATE = {
  startTime: {
    hour: `${date[0]} 시`,
    min: `${min} 분`,
  },
  endTime: {
    hour: `${date[0]} 시`,
    min: `${min} 분`,
  },
};

export default function timeReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_HOUR:
      if (action.start) {
        return {
          ...state,
          startTime: { ...state.startTime, hour: action.payload },
        };
      } else {
        return {
          ...state,
          endTime: { ...state.endTime, hour: action.payload },
        };
      }

    case SET_MIN:
      if (action.start) {
        return {
          ...state,
          startTime: { ...state.startTime, min: action.payload },
        };
      } else {
        return {
          ...state,
          endTime: { ...state.endTime, min: action.payload },
        };
      }

    default:
      return state;
  }
}
