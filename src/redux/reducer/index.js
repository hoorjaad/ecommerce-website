import handleCart from "../reducer/handleCart";
import { combineReducers } from "redux";
import authReducer from "./authReducer";

const rootReducers = combineReducers({
  handleCart,
  auth: authReducer, // Add authReducer to handle user authentication state in the store.
});

export default rootReducers;
