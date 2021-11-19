import loadable from "components/Loading/Loadable";
import { FaStethoscope, FaUserInjured, FaUserNurse } from 'react-icons/fa';

//containers
// const AdminDashboard = loadable(() => import('containers/Admin/Dashboard'));
const Doctor = loadable(() => import('containers/Doctor'));
const Nurse = loadable(() => import('containers/Nurse'));
const Patient = loadable(() => import('containers/Patient'));

export interface ItemRoute {
  name?: string;
  private: boolean;
  component?: JSX.Element;
  path: string;
  child?: ItemRoute[];
  icon?: JSX.Element | string;
  exact?: boolean;
}

export interface IRoutesInRole {
  COMPONENT: ItemRoute[];
  SIDEBAR: ItemRoute[];
}

export const ROUTES: IRoutesInRole = {
  COMPONENT: [
    {
      private: true,
      component: <Doctor />,
      path: '/doctor',
      exact: true,
    },
    {
      private: true,
      component: <Nurse />,
      path: '/nurse',
      exact: true,
    },
    {
      private: true,
      component: <Patient />,
      path: '/patient',
      exact: true,
    },
  ],
  SIDEBAR: [
    {
      name: 'Quản lý bác sỹ',
      private: true,
      component: <Doctor />,
      path: '/doctor',
      icon: <FaStethoscope size={16} color="white" />,
    },
    {
      name: 'Quản lý y tá',
      private: true,
      component: <Nurse />,
      path: '/nurse',
      icon: <FaUserNurse size={16} color="white" />,
    },
    {
      name: 'Quản lý bệnh nhân',
      private: true,
      component: <Patient />,
      path: '/patient',
      icon: <FaUserInjured size={16} color="white" />,
    },
  ],
};

// export default ROUTES;
