import Demo from 'containers/Demo';
import { FaLayerGroup, FaRegUserCircle } from 'react-icons/fa';
import {
  AiOutlineCalendar,
  AiOutlineHome,
  AiOutlineEdit,
  AiOutlineSetting,
} from 'react-icons/ai';
import loadable from "components/Loading/Loadable";
import AdministrationManagement from 'containers/Admin/AdministrationManagement';

//containers
const AdminDashboard = loadable(() => import('containers/Admin/Dashboard'));
const AdminNoticeManagement = loadable(() => import('containers/Admin/AdminNoticeManagement'));
const UserAccountManagement = loadable(() => import('containers/Admin/UserAccountManagement'));
const AdminEventManagement = loadable(
  () => import('containers/Admin/AdminEventManagement'),
);
const SystemSetup = loadable(() => import('containers/User/SystemSetup'));
const UserDashboard = loadable(() => import('containers/User/UserDashboard'));
const UserEvent = loadable(() => import('containers/User/UserEvent'));
const UserInfo = loadable(() => import('containers/User/UserInfo'));
const UserKyc = loadable(() => import('containers/User/UserKyc'));
const AdminPermission = loadable(
  () => import('containers/Admin/AdminPermission'),
);
const AdminKycManagement = loadable(
  () => import('containers/Admin/AdminKycManagement'),
);
const AdminRankReport = loadable(
  () => import('containers/Admin/AdminRankReport'),
);
const Notifications = loadable(
  () => import('containers/Notifications'),
);


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

export const ADMIN_ROUTES: IRoutesInRole = {
  COMPONENT: [
    {
      name: 'Trang chủ',
      private: true,
      component: <AdminDashboard />,
      path: '/',
      exact: true,
    },
    {
      name: 'Demo',
      private: false,
      component: <Demo />,
      path: '/demo',
      exact: true,
    },
    {
      name: 'Notifications',
      private: true,
      component: <Notifications />,
      path: '/notifications',
      exact: true,
    },
    {
      name: 'Trang chủ',
      private: true,
      component: <AdminDashboard />,
      path: '/admin',
      exact: true,
    },
    {
      name: 'Xem thông báo',
      private: true,
      component: <Demo />,
      path: '/view-notification/:id',
    },
    {
      name: 'Sự kiện',
      private: true,
      path: '',
      icon: '/images/icon-feedback.png',
      child: [
        {
          name: 'Quản lý sự kiện',
          private: true,
          path: '/admin/events',
          component: <AdminEventManagement />,
        },
        {
          name: 'Tạo sự kiện',
          private: true,
          path: '/admin/create-event',
          component: <Demo />,
        },
        {
          name: 'Chi tiết sự kiện',
          private: true,
          path: '/admin/create-event/:eventId',
          component: <Demo />,
        },
        {
          name: 'Thiết lập giao diện',
          private: true,
          path: '/admin/event-theme/:eventId',
          component: <Demo />,
        },
      ],
    },
    {
      name: 'Quản lý tài khoản',
      private: true,
      path: '',
      icon: '/images/icon_info.png',
      child: [
        {
          name: 'Tài khoản người dùng',
          private: true,
          path: '/admin/account-officer',
          component: <UserAccountManagement />,
        },
        {
          name: 'Tài khoản quản trị',
          private: true,
          path: '/admin/account-admin',
          component: <AdministrationManagement />,
        },
        {
          name: 'Xét duyệt KYC',
          private: true,
          path: '/admin/kyc',
          component: <AdminKycManagement />,
        },
      ],
    },
    {
      name: 'Quyền hạn',
      private: true,
      component: <AdminPermission />,
      path: '/admin/permissions',
    },
    {
      name: 'Thiết lập hệ thống',
      private: true,
      path: '',
      icon: '/images/icon-setting.png',
      child: [
        {
          name: 'Cài đặt',
          private: true,
          path: '/admin/setting',
          component: <SystemSetup />,
        },
        {
          name: 'Thông báo',
          private: true,
          path: '/admin/notify',
          component: <AdminNoticeManagement />,
        },
      ],
    },
    {
      name: 'Báo cáo',
      private: true,
      path: '',
      child: [
        {
          name: 'Bảng xếp hạng',
          private: true,
          path: '/admin/rank',
          component: <AdminRankReport />,
        },
      ],
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
    {
      name: 'Sự kiện',
      private: true,
      path: '',
      icon: <AiOutlineCalendar size={16} color="white" />,
      child: [
        {
          name: 'Quản lý sự kiện',
          private: true,
          path: '/admin/events',
          component: <AdminEventManagement />,
        },
        {
          name: 'Tạo sự kiện',
          private: true,
          path: '/admin/create-event',
          component: <Demo />,
        },
      ],
    },
    {
      name: 'Quản lý tài khoản',
      private: true,
      path: '',
      icon: <FaRegUserCircle size={16} color="white" />,
      child: [
        {
          name: 'Tài khoản người dùng',
          private: true,
          path: '/admin/account-officer',
          component: <Demo />,
        },
        {
          name: 'Tài khoản quản trị',
          private: true,
          path: '/admin/account-admin',
          component: <Demo />,
        },
        {
          name: 'Xét duyệt KYC',
          private: true,
          path: '/admin/kyc',
          component: <AdminKycManagement />,
        },
      ],
    },
    {
      name: 'Quyền hạn',
      private: true,
      component: <AdminPermission />,
      path: '/admin/permissions',
      icon: <FaLayerGroup size={16} color="white" />,
    },
    {
      name: 'Thiết lập hệ thống',
      private: true,
      path: '',
      icon: <AiOutlineSetting size={16} color="white" />,
      child: [
        {
          name: 'Cài đặt',
          private: true,
          path: '/admin/setting',
          component: <SystemSetup />,
        },
        {
          name: 'Thông báo',
          private: true,
          path: '/admin/notify',
          component: <AdminNoticeManagement />,
        },
      ],
    },
    {
      name: 'Báo cáo',
      private: true,
      icon: <AiOutlineEdit size={16} color="white" />,
      path: '',
      child: [
        {
          name: 'Bảng xếp hạng',
          private: true,
          path: '/admin/rank',
          component: <AdminRankReport />,
        },
      ],
    },
  ],
};

export const USER_ROUTES: IRoutesInRole = {
  COMPONENT: [
    {
      name: 'Trang chủ',
      private: true,
      component: <UserDashboard />,
      path: '/',
      icon: '/images/icon-home.png',
    },
    
    {
      name: 'Notifications',
      private: true,
      component: <Notifications />,
      path: '/notifications',
      exact: true,
    },
    {
      name: 'Trang chủ',
      private: true,
      component: <UserDashboard />,
      path: '/user',
      icon: '/images/icon-home.png',
    },
    {
      name: 'Demo',
      private: false,
      component: <Demo />,
      path: '/',
      exact: true,
    },
    {
      name: 'Quản lý thông tin',
      private: true,
      path: '',
      icon: '/images/icon_info.png',
      child: [
        {
          name: 'Thông tin cá nhân',
          private: true,
          path: '/user/infor',
          component: <UserInfo />,
        },
        {
          name: 'Xác minh danh tính (KYC)',
          private: true,
          path: '/user/identity-info',
          component: <UserKyc />,
        },
      ],
    },
    {
      name: 'Quản lý sự kiện',
      private: true,
      path: '',
      icon: '/images/icon-feedback.png',
      child: [
        {
          name: 'Tạo sự kiện',
          private: true,
          path: '/user/create-event',
          component: <UserEvent />,
        },
        {
          name: 'Thiết lập nội dung',
          private: true,
          path: '/user/setup',
          component: <UserEvent />,
        },
      ],
    },
    // {
    //   name: "Bảo mật",
    //   private: true,
    //   path: "/user/security",
    //   component: <Security />,
    //   icon: "/images/icon-private.png",
    // },
    {
      name: 'Cài đặt',
      private: true,
      path: '/user/setting',
      component: <SystemSetup />,
      icon: '/images/icon-setting.png',
    },
  ],
  SIDEBAR: [
    {
      name: 'Trang chủ',
      private: true,
      component: <UserDashboard />,
      path: '/user',
      icon: <AiOutlineHome size={16} color="white" />,
    },
    {
      name: 'Quản lý thông tin',
      private: true,
      path: '',
      icon: <AiOutlineHome size={16} color="white" />,
      child: [
        {
          name: 'Thông tin cá nhân',
          private: true,
          path: '/user/infor',
          component: <UserInfo />,
        },
        {
          name: 'Xác minh danh tính (KYC)',
          private: true,
          path: '/user/identity-info',
          component: <UserKyc />,
        },
      ],
    },
    {
      name: 'Quản lý sự kiện',
      private: true,
      path: '',
      icon: <AiOutlineHome size={16} color="white" />,
      child: [
        {
          name: 'Tạo sự kiện',
          private: true,
          path: '/user/create-event',
          component: <UserEvent />,
        },
        {
          name: 'Thiết lập nội dung',
          private: true,
          path: '/user/setup',
          component: <UserEvent />,
        },
      ],
    },
    // {
    //   name: "Bảo mật",
    //   private: true,
    //   path: "/user/security",
    //   component: <Security />,
    //   icon: "/images/icon-private.png",
    // },
    {
      name: 'Cài đặt',
      private: true,
      path: '/user/setting',
      component: <SystemSetup />,
      icon: <AiOutlineHome size={16} color="white" />,
    },
  ],
};

// export default ROUTES;
