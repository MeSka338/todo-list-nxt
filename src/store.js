import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import TodoReducer from "./reducers/TodoReducers";
import InputReducer from "./reducers/InputReducer";
import DoneTriggerReducer from "./reducers/DoneTriggerReducer";
import MouseReducer from "./reducers/MouseReducer";
const reduser = combineReducers({
  Todo: TodoReducer,
  Input: InputReducer,
  DoneTrigger: DoneTriggerReducer,
  Mouse: MouseReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reduser,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
