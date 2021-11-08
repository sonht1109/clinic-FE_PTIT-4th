import { Ithead } from "components/Table";
import { defaultOption } from "configs";
import { EventStatusEnum } from "enum";

export const theads:Ithead[]= [
  {name:'#'},
  {name:'Mã sự kiện'},
  {name:'Tên sự kiện'},
  {name:'Tài khoản tạo'},
  {name:'Ngày bắt đầu'},
  {name:'Ngày kết thúc'},
  {name:'Trạng thái'},
  {name:'Người xét duyệt'}
];

export const statusSearch = [
  {...defaultOption},
  { value: EventStatusEnum.ACCEPTED, label: "Chưa diễn ra" },
  { value: EventStatusEnum.DENIED, label: "Tạm dừng hoạt động" },
  { value: EventStatusEnum.FINISHED, label: "Kết thúc" },
  { value: EventStatusEnum.PROCESSING, label: "Đang diễn ra" },
  { value: EventStatusEnum.WAITING, label: "Chờ xét duyệt" },
];