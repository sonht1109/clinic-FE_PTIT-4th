/*
 * AdminEventManagement  Messages
 *
 * This contains all the text for the AdminEventManagement component.
 */

import { defineMessages } from "react-intl";

const scope = "AdminEventManagement";
const status = "AdminEventManagement.status";

const adminEventMessages = defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: "title",
  },
  accepted: {
    id: `${status}.accepted`,
    defaultMessage: "Chưa diễn ra"
  },
  waiting: {
    id: `${status}.accepted`,
    defaultMessage: "Chờ duyệt"
  },
  denied: {
    id: `${status}.denied`,
    defaultMessage: "Tạm dừng"
  },
  creating: {
    id: `${status}.creating`,
    defaultMessage: "Đang tạo"
  },
  processing: {
    id: `${status}.processing`,
    defaultMessage: "Đang xử lý"
  },
  finished: {
    id: `${status}.finished`,
    defaultMessage: "Hoàn thành"
  }
});

export default adminEventMessages;