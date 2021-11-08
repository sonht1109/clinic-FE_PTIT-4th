/*
 *
 * AdminEventManagement
 * make by phamthainb
 */

import { memo } from 'react';
import ErrorBound from 'components/ErrorBound';
import useInjectReducer from 'redux/useInjectReducer';
import reducersAdminEventManagement from './store/reducers';
import WrapAdminEventManagement from './style';
import { ColRightWrapper } from 'containers/Layout/LoggedInLayout';
import { ILink } from 'components/Breadcum';
import Search from './Search';
import Handle from './Handle';
import DataTable from './DataTable';

interface Props {}

const PERMISSION_CODE = "3"

// eslint-disable-next-line
function AdminEventManagement({}: Props) {
  useInjectReducer('AdminEventManagement', reducersAdminEventManagement);

  const links: ILink[] = [
    { name: 'Trang chủ' },
    { name: 'Sự kiện' },
    { name: 'Quản lý sự kiện' },
  ];

  return (
    <ErrorBound>
      <ColRightWrapper header="Quản lý sự kiện" links={links}>
        <WrapAdminEventManagement>

          <Search />
          <Handle code={PERMISSION_CODE} />
          <DataTable />
          
        </WrapAdminEventManagement>
      </ColRightWrapper>
    </ErrorBound>
  );
}
export default memo(AdminEventManagement);
