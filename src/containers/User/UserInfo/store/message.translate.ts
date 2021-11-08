/*
 *  Messages
 *
 * This contains all the text for the  component.
 */
import { defineMessages } from "react-intl";

export const scope = "user_informations";

export default defineMessages({
  details: {
    id: `${scope}.details`,
    defaultMessage: "Thông tin cá nhân",
  },
  cv: {
    id: `${scope}.cv`,
    defaultMessage: "Hồ sơ",
  },
  orther: {
    id: `${scope}.orther`,
    defaultMessage:
      "Một số thông tin có thể hiển thị cho những người dùng khác đang sử dụng dịch vụ của Bvote khi bạn khởi tạo sự kiện",
  },
  down_file: {
    id: `${scope}.down_file`,
    defaultMessage: "Tải file",
  },
  name: {
    id: `${scope}.name`,
    defaultMessage: "Họ và tên",
  },
  birthday: {
    id: `${scope}.birthday`,
    defaultMessage: "Ngày sinh",
  },
  sex: {
    id: `${scope}.sex`,
    defaultMessage: "Giới tính",
  },
  address: {
    id: `${scope}.address`,
    defaultMessage: "Địa chỉ",
  },
  company: {
    id: `${scope}.company`,
    defaultMessage: "Công ty",
  },
  lang: {
    id: `${scope}.lang`,
    defaultMessage: "Ngôn ngữ",
  },
  link_details: {
    id: `${scope}.link_details`,
    defaultMessage: "Thông tin liên hệ",
  },
});
