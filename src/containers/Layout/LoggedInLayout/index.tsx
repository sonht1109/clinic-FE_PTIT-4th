import React, { Children, ReactNode, useEffect } from 'react';
import { Overlay, SLeft, SLoggedIn, SRight } from './styles';
import logo from 'assets/images/layout/logo.png';
import { ItemRoute } from 'configs/routes';
import MenuParent from './MenuParent';
import { useHistory, useLocation } from 'react-router';
import right from 'assets/images/layout/menu-right.png';
import Button from 'components/Button';
import { FaTimes } from 'react-icons/fa';
import Header from './Header';
import { ILink } from 'components/Breadcum';
import { selectAppStore } from 'containers/App/store/selecters';
import { useDispatch, useSelector } from 'react-redux';
import { setInfo, toggleSidebar } from 'containers/App/store/actions';

interface Props {
  children: ReactNode;
  sidebarRoutes: ItemRoute[];
}

interface IColRight {
  children: ReactNode;
  header: string;
  links?: ILink[];
}

export default function LoggedInLayout({ children, sidebarRoutes }: Props) {
  return (
    <SLoggedIn>
      <ColLeft sidebarRoutes={sidebarRoutes} />
      {children}
    </SLoggedIn>
  );
}

const ColLeft = ({ sidebarRoutes }: { sidebarRoutes: ItemRoute[] }) => {
  const { isSidebarOpen } = useSelector(selectAppStore);
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const { pathname } = location;

  useEffect(() => {
    if (isSidebarOpen) {
      dispatch(toggleSidebar());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const handleLogout = () => {
    history.replace('/login');
    localStorage.removeItem('token');
    dispatch(setInfo(null));
  };
  
  // return <></>;

  return (
    <>
      {isSidebarOpen && <Overlay onClick={() => dispatch(toggleSidebar())} />}
      <SLeft isOpen={isSidebarOpen}>
        <div className="left-container">
          <div
            className="left__close"
            onClick={() => dispatch(toggleSidebar())}
          >
            <FaTimes color="white" size={20} />
          </div>
          <img
            className="left__logo"
            src={logo}
            alt="logo"
            width={94}
            height={30}
          />
          <div className="left__list">
            {Children.toArray(
              sidebarRoutes.map((r: ItemRoute) => {
                return <MenuParent route={r} currentPath={pathname} />;
              }),
            )}
          </div>
          <div className="left__right">
            <img src={right} width={180} height={160} alt="right" />
            <p>
              Copyright &copy; {new Date().getFullYear()} BYTESOFT. All rights
              reserved.
            </p>
            <Button
              width="100%"
              height="40px"
              style={{ borderRadius: '10px' }}
              onClick={handleLogout}
            >
              Đăng xuất
            </Button>
          </div>
        </div>
        
      </SLeft>
    </>
  );
};

export const ColRightWrapper = ({
  children,
  header,
  links = [],
}: IColRight) => {
  return (
    <SRight>
      <Header {...{ header, links }} />
      {children}
    </SRight>
  );
};
