import globalMessages from "configs/global-message";
import { FaCapsules, FaCoins } from "react-icons/fa";
import { IntlShape } from "react-intl";

export const theads = [
  {
    name: '#',
  },
  {
    name: 'Tên',
  },
  {
    name: 'Giá',
  },
];

export const viewFields = (t: IntlShape) => [
  {
    name: 'drug.name',
    type: 'text',
    icon: <FaCapsules />,
    label: 'Tên',
    rules: {
      required: t.formatMessage(
        { ...globalMessages.required },
        { field: 'Tên' },
      ),
    },
  },
  {
    name: 'drug.price',
    type: 'number',
    icon: <FaCoins />,
    label: 'Giá',
    rules: {
      required: t.formatMessage(
        { ...globalMessages.required },
        { field: 'Giá' },
      ),
      validate: {
        wrongPattern: (value: any) =>
          !isNaN(value) || 'Giá phải là định dạng số',
        greaterThanZero: (value: any) =>
          Number(value) > 0 || 'Giá phải lớn hơn 0',
      },
    },
  },
]