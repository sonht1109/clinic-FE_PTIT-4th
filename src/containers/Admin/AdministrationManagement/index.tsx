/*
*
* AdministrationManagement
* make by phamthainb
*/

import React, { memo } from 'react';
import ErrorBound from 'components/ErrorBound';
import useInjectReducer from 'redux/useInjectReducer';
import reducersAdministrationManagement from './store/reducers';
import WrapAdministrationManagement from './style';
import { ColRightWrapper } from 'containers/Layout/LoggedInLayout';
import { ILink } from 'components/Breadcum';
import Search from './Search';
import Handle from './Handle';
import DataTable from './DataTable';

interface Props { }

const PERMISSION_CODE = "2"

// eslint-disable-next-line
function AdministrationManagement({ }: Props) {
  useInjectReducer('AdministrationManagement', reducersAdministrationManagement);
  const links: ILink[] = [
    { name: 'Trang chủ' },
    { name: 'Sự kiện' },
    { name: 'Quản lý tài khoản' },
  ];

  return (
    <ErrorBound>
      <ColRightWrapper header="Quản lý tài khoản" links={links}>
        <WrapAdministrationManagement>
          <Search />
          <Handle code={PERMISSION_CODE} />
          <DataTable />
        </WrapAdministrationManagement>
      </ColRightWrapper>
    </ErrorBound>
  );
}
export default memo(AdministrationManagement);
