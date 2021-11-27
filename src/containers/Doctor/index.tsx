/*
 *
 * Doctor
 * make by phamthainb
 */

import React, { memo } from 'react';
import ErrorBound from 'components/ErrorBound';
import useInjectReducer from 'redux/useInjectReducer';
import reducersDoctor from './store/reducers';
import WrapDoctor from './style';
import { ColRightWrapper } from 'containers/Layout/LoggedInLayout';
import DataTable from './DataTable';
import Handle from './Handle';

interface Props {}

// eslint-disable-next-line
function Doctor({}: Props) {
  useInjectReducer('Doctor', reducersDoctor);
  return (
    <ErrorBound>
      <ColRightWrapper header="Bác sỹ">
        <WrapDoctor> 
          <Handle />
          <DataTable />
        </WrapDoctor>
      </ColRightWrapper>
    </ErrorBound>
  );
}
export default memo(Doctor);
