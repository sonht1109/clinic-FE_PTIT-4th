import useWindowSize from 'hooks/useWindowSize';
import { Children, memo, useEffect, useRef, useState } from 'react';
import { FaBell } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SBell, SBellDropdown } from './styles';
import Notification from './Notification';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from './store/actions';
import reducersBell from './store/reducers';
import useInjectReducer from 'redux/useInjectReducer';
import { selectBellStore } from './store/selecters';
import useDetectClickOutSide from 'hooks/useDetectClickOutSide';

function Bell() {
  useInjectReducer('Bell', reducersBell);

  const [state, setState] = useState(false);
  const ref = useRef(null);

  const dispatch = useDispatch();
  const { pageNumber, pageSize, unread } = useSelector(selectBellStore);

  useEffect(() => {
    dispatch(getData(pageSize, pageNumber));
  }, [pageSize, pageNumber, dispatch]);

  useDetectClickOutSide(
    () => {
      setState(false);
    },
    () => {},
    ref,
  );

  return (
    <BellWrapper>
      <SBell
        ref={ref}
        className="header__right-item pointer"
        onClick={() => {
          setState(prev => !prev);
        }}
      >
        <FaBell size={20} fill="#A6B0CF" />
        {unread > 0 && <div className="badge"></div>}
        <BellDropdown state={state} unread={unread} />
      </SBell>
    </BellWrapper>
  );
}

export default memo(Bell);

const BellDropdown = ({
  state,
  unread,
}: {
  state: boolean;
  unread: number;
}) => {
  const { width } = useWindowSize();

  const refBody = useRef(null);

  const { data } = useSelector(selectBellStore);

  if (!width || (width && width < 768)) {
    return <></>;
  }

  return (
    <SBellDropdown state={state}>
      <div className="bell-dropdown__header">
        <h4 className="header">
          Thông báo <span style={{ color: '#FF4B4B' }}>({unread})</span>
        </h4>
        <Link className="link" to="/notifications">
          Xem tất cả
        </Link>
      </div>
      <div className="bell-dropdown__list" ref={refBody}>
        {Children.toArray(data.map(n => <Notification n={n} />))}
      </div>
    </SBellDropdown>
  );
};

const BellWrapper = ({ children }: { children: any }) => {
  const { width } = useWindowSize();

  if(!width) return <></>;

  if ((width && width < 768)) {
    return <Link to="/notifications">{children}</Link>;
  }
  return children;
};
