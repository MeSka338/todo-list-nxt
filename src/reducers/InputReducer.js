const InputReducer = (state = { selectInput: null }, action) => {
  switch (action.type) {
    case "SET_INPUT":
      return { selectInput: action.payload };
    default:
      return state;
  }
};

export default InputReducer;
