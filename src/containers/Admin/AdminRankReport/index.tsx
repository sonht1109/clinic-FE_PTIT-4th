/*
 *
 * AdminRankReport
 * make by phamthainb
 */

import React, { memo } from 'react';
import ErrorBound from 'components/ErrorBound';
import useInjectReducer from 'redux/useInjectReducer';
import reducersAdminRankReport from './store/reducers';
import WrapAdminRankReport from './style';
import { ColRightWrapper } from 'containers/Layout/LoggedInLayout';
import { ILink } from 'components/Breadcum';
import Search from './Search';
import Handle from './Handle';
import DataTable from './DataTable';

interface Props {}

const links: ILink[] = [
  { name: 'Trang chủ' },
  { name: 'Báo cáo' },
  { name: 'Bảng xếp hạng' },
];

// eslint-disable-next-line
function AdminRankReport({}: Props) {
  useInjectReducer('AdminRankReport', reducersAdminRankReport);
  return (
    <ErrorBound>
      <ColRightWrapper header="Báo cáo" links={links}>
        <WrapAdminRankReport>
          <Search />
          <Handle />
          <DataTable />
        </WrapAdminRankReport>
      </ColRightWrapper>
    </ErrorBound>
  );
}
export default memo(AdminRankReport);
