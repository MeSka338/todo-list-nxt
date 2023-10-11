import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import TodoReducer from "./reducers/TodoReducers";
const reduser = combineReducers({
  Todo: TodoReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reduser,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
