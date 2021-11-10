/**
 * This file export all of type the Reducers
 * File is export only type, not the logic
 * phamthainb
 */

import { combineReducers } from "redux";
import App from "containers/App/store/reducers";
import About from "containers/About/store/reducers";
import Demo from "containers/Demo/store/reducers";
import Dashboard from "containers/Admin/Dashboard/store/reducers";
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly








//pages
const rootReducer = combineReducers({
  App,
  About,
  Demo,
  Dashboard,
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly





});

export default rootReducer;
