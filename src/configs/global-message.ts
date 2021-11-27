import { defineMessages } from "react-intl";

const validate = "global.validate";
// const button = "global.button";
const input = "global.input";

const globalMessages = defineMessages({
  // validate
  required: {
    id: `${validate}.required`,
    defaultMessage: "{field} không được bỏ trống"
  },
  wrongPattern: {
    id: `${validate}.wrongPattern`,
    defaultMessage: "{field} sai định dạng"
  },
  passwordNotMatch: {
    id: `${validate}.passwordNotMatch`,
    defaultMessage: "Mật khẩu không khớp"
  },
  passwordAnyPattern: {
    id: `${validate}.passwordAnyPattern`,
    defaultMessage: "Mật khẩu phải dài từ 6-50 ký tự"
  },
  passwordPattern: {
    id: `${validate}.password_pattern`,
    defaultMessage:
      "Mật khẩu phải chứa 6 ký tự, bao gồm chữ hoa, chữ thường và ký tự đặc biệt",
  },

  // input
  phone: {
    id: `${input}.phone`,
    defaultMessage: "SĐT"
  },
  username: {
    id: `${input}.username`,
    defaultMessage: "Username"
  },
  password: {
    id: `${input}.password`,
    defaultMessage: "Mật khẩu"
  },
  confirmPassword: {
    id: `${input}.confirmPassword`,
    defaultMessage: "Xác nhận mật khẩu"
  },
  title: {
    id: `${input}.title`,
    defaultMessage: "Chủ đề"
  },
  receiver: {
    id: `${input}.receiver`,
    defaultMessage: "Người nhận"
  },
  status: {
    id: `${input}.status`,
    defaultMessage: "Trạng thái"
  },
  content: {
    id: `${input}.content`,
    defaultMessage: "Nội dung"
  },
  email: {
    id: `${input}.email`,
    defaultMessage: "Email"
  },
  token: {
    id: `${input}.token`,
    defaultMessage: "Mã"
  },

})

export default globalMessages;