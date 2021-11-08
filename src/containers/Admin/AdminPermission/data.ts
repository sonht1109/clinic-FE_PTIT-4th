import { Ithead } from "components/Table";
import { ISelect } from "configs/types";
import { PermOptionEnum } from "enum";

export const theads: Ithead[] = [
  {name: "#"},
  {name: "Tên nhóm quyền"},
  {name: "Chi tiết"},
  {name: "Trạng thái"},
]

export const permissionStatus: ISelect[] = [
  {
    label: 'Sử dụng',
    value: '1'
  },
  {
    label: 'Không sử dụng',
    value: '0'
  }
]

export const permissionTheads: Ithead[] = [
  {name: "#"},
  {name: "name"},
  {name: PermOptionEnum['ADD']},
  {name: PermOptionEnum['UPDATE']},
  {name: PermOptionEnum['DELETE']},
  {name: PermOptionEnum['VIEW']},
  {name: PermOptionEnum['VERIFY']},
  {name: PermOptionEnum['BLOCK']},
  {name: PermOptionEnum['DOWNLOAD']},
  {name: PermOptionEnum['EXPORT']},
]

export const slicedTheads: {name: PermOptionEnum}[] = [
  {name: PermOptionEnum['ADD']},
  {name: PermOptionEnum['UPDATE']},
  {name: PermOptionEnum['DELETE']},
  {name: PermOptionEnum['VIEW']},
  {name: PermOptionEnum['VERIFY']},
  {name: PermOptionEnum['BLOCK']},
  {name: PermOptionEnum['DOWNLOAD']},
  {name: PermOptionEnum['EXPORT']},
]