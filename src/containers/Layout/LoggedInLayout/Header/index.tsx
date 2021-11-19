import HeaderText from 'components/HeaderText';
import Breadcum, { ILink } from 'components/Breadcum';
import { FaBars, FaEllipsisV } from 'react-icons/fa';
import avtSrc from 'assets/images/layout/avt-placeholder.png';
import { useRouteMatch } from 'react-router';
import { SBell, SHeader, SHeaderRightItem } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { selectAppStore } from 'containers/App/store/selecters';
import { toggleSidebar } from 'containers/App/store/actions';

interface Props {
  header: string;
  links: ILink[];
}

export default function Header({ header, links }: Props) {
  const { path } = useRouteMatch();
  const isDashboard = ['/admin', '/user', '/notifications', '/'].includes(path);
  const dispatch = useDispatch();

  const { info } = useSelector(selectAppStore);

  return (
    <SHeader>
      <div className="header__left">
        {isDashboard && <p className="username">Welcome</p>}
        <HeaderText className={`${isDashboard ? 'is-dashboard' : ''}`}>
          {header}
        </HeaderText>
        {links.length > 0 && <Breadcum links={links} />}
      </div>

      <div className="header__right">

        <SHeaderRightItem className="sub-menu pointer">
          <div className="avt round">
            <img src={avtSrc} alt="avt" width={40} height={40} />
          </div>
          <FaEllipsisV color="#718098" />
        </SHeaderRightItem>

        <SBell
          className="toggle-menu"
          onClick={() => {
            dispatch(toggleSidebar());
          }}
        >
          <FaBars size={20} fill="#A6B0CF" />
        </SBell>
      </div>
    </SHeader>
  );
}
