/*
 *
 * AdminPermission
 * make by phamthainb
 */

import React, { memo } from 'react';
import ErrorBound from 'components/ErrorBound';
import useInjectReducer from 'redux/useInjectReducer';
import reducersAdminPermission from './store/reducers';
import { ColRightWrapper } from 'containers/Layout/LoggedInLayout';
import { ILink } from 'components/Breadcum';
import WrapAdminEventManagement, {
  SSearch,
} from '../AdminEventManagement/style';
import Handle from './Handle';
import DataTable from './DataTable';

interface Props {}

const PERMISSION_CODE = "1"

const links: ILink[] = [{ name: 'Trang chủ' }, { name: 'Quyền hạn' }];

// eslint-disable-next-line
function AdminPermission({}: Props) {
  useInjectReducer('AdminPermission', reducersAdminPermission);

  return (
    <ErrorBound>
      <ColRightWrapper header="Quyền hạn" links={links}>
        <WrapAdminEventManagement>
          <SSearch>
            <span className="search__title">Quyền hệ thống</span>
          </SSearch>
          
          <Handle code={PERMISSION_CODE} />
          <DataTable />

        </WrapAdminEventManagement>
      </ColRightWrapper>
    </ErrorBound>
  );
}
export default memo(AdminPermission);
