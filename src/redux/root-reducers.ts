/**
 * This file export all of type the Reducers
 * File is export only type, not the logic
 * phamthainb
 */

import { combineReducers } from "redux";
import App from "containers/App/store/reducers";
import About from "containers/About/store/reducers";
import Demo from "containers/Demo/store/reducers";
import UserDashboard from "containers/User/UserDashboard/store/reducers";
import UserInformations from "containers/User/UserInfo/store/reducers";
import SystemSetup from "containers/User/SystemSetup/store/reducers";
import UserKyc from "containers/User/UserKyc/store/reducers";
import UserEvent from "containers/User/UserEvent/store/reducers";
import Dashboard from "containers/Admin/Dashboard/store/reducers";
import Bell from 'containers/Layout/LoggedInLayout/Header/Bell/store/reducers'
import AdminEventManagement from "containers/Admin/AdminEventManagement/store/reducers";
import UserAccountManagement from "containers/Admin/UserAccountManagement/store/reducers";
import AdminKycManagement from "containers/Admin/AdminKycManagement/store/reducers";
import AdminNoticeManagement from "containers/Admin/AdminNoticeManagement/store/reducers";
import AdminPermission from "containers/Admin/AdminPermission/store/reducers";
import AdminRankReport from "containers/Admin/AdminRankReport/store/reducers";
import Notifications from "containers/Notifications/store/reducers";
import AdministrationManagement from "containers/Admin/AdministrationManagement/store/reducers";
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly










//pages
const rootReducer = combineReducers({
  App,
  About,
  Demo,
  Dashboard,

  Bell,

  SystemSetup,
  UserDashboard,
  UserInformations,
  UserKyc,
  UserEvent,
  AdminEventManagement,
  UserAccountManagement,
  AdministrationManagement,
  AdminKycManagement,
  AdminNoticeManagement,
  AdminPermission,
  AdminRankReport,
  Notifications,
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly





});

export default rootReducer;
