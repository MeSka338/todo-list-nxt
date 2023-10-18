const DoneTriggerReducer = (state = { doneTrigger: false }, action) => {
  switch (action.type) {
    case "SET_DONE":
      return { doneTrigger: action.payload };

    default:
      return state;
  }
};

export default DoneTriggerReducer;
