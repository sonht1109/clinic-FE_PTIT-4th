import globalMessages from 'configs/global-message';
import { FaCapsules, FaPencilAlt } from 'react-icons/fa';
import { IntlShape } from 'react-intl';
import { GiRaggedWound } from 'react-icons/gi';

export const theads = [
  {
    name: '#',
  },
  {
    name: 'Tên',
  },
  {
    name: 'Mô tả',
  },
  {
    name: 'Thuốc chữa',
  },
];

export const viewFields = (t: IntlShape) => [
  {
    name: 'disease.name',
    type: 'text',
    icon: <GiRaggedWound />,
    label: 'Tên',
    rules: {
      required: t.formatMessage(
        { ...globalMessages.required },
        { field: 'Tên' },
      ),
    },
  },
  {
    name: 'disease.description',
    type: 'text',
    icon: <FaPencilAlt />,
    label: 'Mô tả',
    rules: {
      required: t.formatMessage(
        { ...globalMessages.required },
        { field: 'Mô tả' },
      ),
    },
  },
  {
    name: 'disease.drugs',
    type: 'select',
    icon: <FaCapsules />,
    label: 'Thuốc chữa',
    rules: {
      required: t.formatMessage(
        { ...globalMessages.required },
        { field: 'Thuốc chữa' },
      ),
    },
  },
];
