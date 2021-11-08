/*
 * AdminKycManagement  Messages
 *
 * This contains all the text for the AdminKycManagement component.
 */

import { defineMessages } from "react-intl";

export const scope = "AdminKycManagement";
const status = "AdminKycManagement.status";

const adminKycMessages =  defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: "title",
  },
  
  accepted: {
    id: `${status}.accepted`,
    defaultMessage: "Đã đồng ý"
  },
  denied: {
    id: `${status}.denied`,
    defaultMessage: 'Từ chối'
  },
  waiting: {
    id: `${status}.waiting`,
    defaultMessage: 'Chờ xét duyệt'
  }
});


export default adminKycMessages;