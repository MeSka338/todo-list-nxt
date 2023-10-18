const DoneTriggerReducer = (state = { doneTrigger: false }, action) => {
  switch (action.type) {
    case "TRUE_DONE":
      return { doneTrigger: action.payload };
    case "FALSE_DONE":
      return { doneTrigger: action.payload };

    default:
      return state;
  }
};

export default DoneTriggerReducer;
