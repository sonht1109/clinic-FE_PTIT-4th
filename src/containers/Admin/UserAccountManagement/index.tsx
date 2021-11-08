/*
*
* UserAccountManagement
* make by phamthainb
*/

import React, { memo } from 'react';
import ErrorBound from 'components/ErrorBound';
import useInjectReducer from 'redux/useInjectReducer';
import reducersUserAccountManagement from './store/reducers';
import WrapUserAccountManagement from './style';
import { ColRightWrapper } from 'containers/Layout/LoggedInLayout';
import { ILink } from 'components/Breadcum';
import Search from './Search';
import Handle from './Handle';
import DataTable from './DataTable';

interface Props { }

// eslint-disable-next-line
function UserAccountManagement({ }: Props) {
  useInjectReducer('UserAccountManagement', reducersUserAccountManagement);
  const links: ILink[] = [
    { name: 'Trang chủ' },
    { name: 'Sự kiện' },
    { name: 'Quản lý tài khoản' },
  ];

  return (
    <ErrorBound>
      <ColRightWrapper header="Quản lý tài khoản" links={links}>
        <WrapUserAccountManagement>
          <Search />
          <Handle />
          <DataTable />
        </WrapUserAccountManagement>
      </ColRightWrapper>
    </ErrorBound>
  );
}
export default memo(UserAccountManagement);
