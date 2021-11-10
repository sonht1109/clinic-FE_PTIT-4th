import {
  AiOutlineHome,
} from 'react-icons/ai';
import loadable from "components/Loading/Loadable";

//containers
const AdminDashboard = loadable(() => import('containers/Admin/Dashboard'));

export interface ItemRoute {
  name: string;
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
      name: 'Trang chủ',
      private: true,
      component: <AdminDashboard />,
      path: '/',
      exact: true,
    },
  ],
  SIDEBAR: [
    {
      name: 'Trang chủ',
      private: true,
      component: <AdminDashboard />,
      path: '/admin',
      icon: <AiOutlineHome size={16} color="white" />,
    },
  ],
};

// export default ROUTES;
