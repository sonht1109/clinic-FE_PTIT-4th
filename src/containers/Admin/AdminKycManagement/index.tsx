/*
 *
 * AdminKycManagement
 * make by phamthainb
 */

import React, { memo } from 'react';
import ErrorBound from 'components/ErrorBound';
import useInjectReducer from 'redux/useInjectReducer';
import reducersAdminKycManagement from './store/reducers';
import { ColRightWrapper } from 'containers/Layout/LoggedInLayout';
import WrapAdminEventManagement from '../AdminEventManagement/style';
import { ILink } from 'components/Breadcum';
import Search from './Search';
import Handle from './Handle';
import DataTable from './DataTable';

interface Props {}

const PERMISSION_CODE = "4"

// eslint-disable-next-line
function AdminKycManagement({}: Props) {
  useInjectReducer('AdminKycManagement', reducersAdminKycManagement);

  const links: ILink[] = [
    { name: 'Trang chủ' },
    { name: 'Quản lý tài khoản' },
    { name: 'Xét duyệt KYC' },
  ];

  return (
    <ErrorBound>
      <ColRightWrapper header="Quản lý tài khoản" links={links}>
        <WrapAdminEventManagement>

          <Search />
          <Handle code={PERMISSION_CODE} />
          <DataTable />

        </WrapAdminEventManagement>
      </ColRightWrapper>
    </ErrorBound>
  );
}
export default memo(AdminKycManagement);
