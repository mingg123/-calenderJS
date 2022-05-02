export const openDialog = () => {
  return {
    type: "OPEN_DIALOG",
  };
};

export const closeDialog = () => {
  return {
    type: "CLOSE_DIALOG",
  };
};

const initalState = {
  open: false,
};

export default function dialogReducer(state = initalState, action) {
  switch (action.type) {
    case "OPEN_DIALOG":
      return { ...state, open: true };
    case "CLOSE_DIALOG":
      return { ...state, open: false };
    default:
      return state;
  }
}
