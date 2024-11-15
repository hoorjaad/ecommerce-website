// src/redux/store.js (Create this file)
// src/redux/store.js
import { createStore } from "redux";
import rootReducers from "./reducer";

const store = createStore(rootReducers);

export default store;
