import { Ithead } from 'components/Table';
import globalMessages from 'configs/global-message';
import REGEX from 'helpers/regex';
import {
  FaCalendar,
  FaCode,
  FaGraduationCap,
  FaLayerGroup,
  FaPhone,
  FaStethoscope,
  FaUser,
  FaVial,
} from 'react-icons/fa';
import { IntlShape } from 'react-intl';

export const theads: Ithead[] = [
  { name: '#' },
  { name: 'Tên' },
  { name: 'Trình độ' },
  { name: 'Trình độ học vấn' },
  { name: 'Khoa' },
  { name: 'Thâm niên' },
];

export const viewFields = (t: IntlShape) => [
  {
    name: 'doctor.name',
    type: 'text',
    icon: <FaUser />,
    label: 'Tên',
    rules: {
      required: t.formatMessage(
        { ...globalMessages.required },
        { field: 'Tên' },
      ),
    },
  },
  {
    name: 'doctor.nationalId',
    type: 'text',
    icon: <FaCode />,
    label: 'CCCD',
    rules: {
      required: t.formatMessage(
        { ...globalMessages.required },
        { field: 'CCCD' },
      ),
    },
  },
  {
    name: 'doctor.level',
    type: 'text',
    icon: <FaLayerGroup />,
    label: 'Trình độ',
    rules: {
      required: t.formatMessage(
        { ...globalMessages.required },
        { field: 'Trình độ' },
      ),
    },
  },
  {
    name: 'doctor.degree',
    type: 'text',
    icon: <FaStethoscope />,
    label: 'Khoa',
    rules: {
      required: t.formatMessage(
        { ...globalMessages.required },
        { field: 'Khoa' },
      ),
    },
  },
  {
    name: 'doctor.literacy',
    type: 'text',
    icon: <FaGraduationCap />,
    label: 'Trình độ học vấn',
    rules: {
      required: t.formatMessage(
        { ...globalMessages.required },
        { field: 'Trình độ học vấn' },
      ),
    },
  },
  {
    name: 'doctor.experience',
    type: 'text',
    icon: <FaVial />,
    label: 'Thâm niên',
    rules: {
      required: t.formatMessage(
        { ...globalMessages.required },
        { field: 'Thâm niên' },
      ),
      validate: {
        wrongPattern: (value: any) =>
          !isNaN(value) || 'Thâm niên phải là định dạng số',
        greaterThanZero: (value: any) =>
          Number(value) > 0 || 'Thâm niên phải lớn hơn 0',
      },
    },
  },
  {
    name: 'doctor.birthDate',
    type: 'date',
    icon: <FaCalendar />,
    label: 'Ngày sinh',
    rules: {
      required: t.formatMessage(
        { ...globalMessages.required },
        { field: 'Ngày sinh' },
      ),
    },
  },
  {
    name: 'doctor.phone',
    type: 'tel',
    icon: <FaPhone />,
    label: 'SĐT',
    rules: {
      required: t.formatMessage(
        { ...globalMessages.required },
        { field: 'SĐT' },
      ),
      pattern: {
        value: REGEX.PHONE,
        message: t.formatMessage(
          { ...globalMessages.wrongPattern },
          { field: 'SĐT' },
        ),
      },
    },
  },
];
