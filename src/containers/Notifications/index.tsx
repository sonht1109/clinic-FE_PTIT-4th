/*
 *
 * Notifications
 * make by phamthainb
 */

import React, { Children, memo, useEffect } from 'react';
import ErrorBound from 'components/ErrorBound';
import useInjectReducer from 'redux/useInjectReducer';
import reducersNotifications from './store/reducers';
import WrapNotifications from './style';
import { ColRightWrapper } from 'containers/Layout/LoggedInLayout';
import { useDispatch, useSelector } from 'react-redux';
import {
  getData,
  handleChangePage,
  handleChangePageSize,
} from './store/actions';
import { selectNotificationsStore } from './store/selecters';
import Notification from './Notification';
import Pagination from 'components/Pagnination';

interface Props {}

// eslint-disable-next-line
function Notifications({}: Props) {
  useInjectReducer('Notifications', reducersNotifications);
  const dispatch = useDispatch();

  const { data, total, pageNumber, pageSize, shouldRefetch, unread } = useSelector(
    selectNotificationsStore,
  );

  useEffect(() => {
    dispatch(getData({ pageNumber, pageSize }));
  }, [shouldRefetch, pageNumber, pageSize, dispatch]);

  return (
    <ErrorBound>
      <ColRightWrapper header="Dashboard">
        <WrapNotifications>
          <div className="module-header">
            thông báo <span>({unread})</span>
          </div>
          <div className="module-content">
            <div className="list">
              {Children.toArray(data.map(n => <Notification n={n} />))}
            </div>

            <Pagination
              current={pageNumber}
              pageSize={pageSize}
              total={total}
              handleChangePageSize={(size: number) =>
                dispatch(handleChangePageSize(size))
              }
              onChange={(page: number) => dispatch(handleChangePage(page))}
            />
          </div>
        </WrapNotifications>
      </ColRightWrapper>
    </ErrorBound>
  );
}
export default memo(Notifications);
