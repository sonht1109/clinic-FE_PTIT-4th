import { Ithead } from "components/Table";
import { defaultOption } from "configs";
import { ISelect } from "configs/types";
import { KycStatusEnum } from "enum";

export const theads: Ithead[] = [
  {name: "#"},
  {name: "Tài khoản"},
  {name: "Ngày yêu cầu"},
  {name: "Ngày xử lí"},
  {name: "Chú thích"},
  {name: "Trạng thái"},
  {name: "Người xét duyệt"},
]

export const uploadImgs = [
  {name: "imgUrl1", title: "Mặt trước giấy tờ tùy thân"},
  {name: "imgUrl2", title: "Mặt sau giấy tờ tùy thân"},
  {name: "imgUrl3", title: "Tự chụp khuôn mặt cùng tài liệu"},
]

export const statusSearch: ISelect[] = [
  {...defaultOption},
  {label: "Chấp nhận", value: KycStatusEnum['ACCEPTED']},
  {label: "Chờ xét duyệt", value: KycStatusEnum['WAITING']},
  {label: "Từ chối", value: KycStatusEnum['DENIED']},
]