import globalMessages from "configs/global-message"
import REGEX from "helpers/regex"
import { FaCalendar, FaCode, FaMap, FaPhone, FaUser } from "react-icons/fa"
import { IntlShape } from "react-intl"

export const theads = [
  {name: "#"},
  {name: "Tên"},
  {name: "SĐT"},
  {name: "CCCD"},
  {name: "Địa chỉ"}
]

export const viewFields = (t: IntlShape) => [
  {
    name: 'patient.name',
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
    name: 'patient.nationalId',
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
    name: 'patient.birthDate',
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
    name: 'patient.phone',
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
  {
    name: 'patient.address',
    type: 'text',
    icon: <FaMap />,
    label: 'Địa chỉ',
    rules: {
      required: t.formatMessage(
        { ...globalMessages.required },
        { field: 'Địa chỉ' },
      ),
    },
  },
]