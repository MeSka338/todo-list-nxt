const MouseReducer = (state = { mouse: { x: 0, y: 0 } }, action) => {
  switch (action.type) {
    case "SET_MOUSE":
      return { mouse: action.payload };
    default:
      return state;
  }
};

export default MouseReducer;
