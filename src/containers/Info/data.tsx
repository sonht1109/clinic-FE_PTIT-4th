import { FaCalendar, FaEnvelope, FaLayerGroup, FaUser } from "react-icons/fa";

export const fields = [
  {
    name: "info.username",
    type: "text",
    label: "Username",
    icon: <FaUser />
  },
  {
    name: "info.email",
    type: "text",
    label: "Email",
    icon: <FaEnvelope />
  },
  {
    name: "info.createdAt",
    type: "text",
    label: "Ngày tạo",
    icon: <FaCalendar />
  },
  {
    name: "info.role.name",
    type: "text",
    label: "Role",
    icon: <FaLayerGroup />
  }
]