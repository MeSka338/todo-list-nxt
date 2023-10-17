const InputReducer = (state = { text: null }, action) => {
  switch (action.type) {
    case "SET_INPUT":
      return { text: action.payload };
    default:
      return state;
  }
};

export default InputReducer;
