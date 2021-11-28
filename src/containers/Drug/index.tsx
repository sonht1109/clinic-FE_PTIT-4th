/*
 *
 * Drug
 * make by phamthainb
 */

import React, { memo } from 'react';
import ErrorBound from 'components/ErrorBound';
import useInjectReducer from 'redux/useInjectReducer';
import reducersDrug from './store/reducers';
import { ColRightWrapper } from 'containers/Layout/LoggedInLayout';
import WrapDoctor from 'containers/Doctor/style';
import Handle from './Handle';
import DataTable from './DataTable';

interface Props {}

// eslint-disable-next-line
function Drug({}: Props) {
  useInjectReducer('Drug', reducersDrug);
  return (
    <ErrorBound>
      <ColRightWrapper header="Thuốc">
        <WrapDoctor> 
          <Handle />
          <DataTable />
        </WrapDoctor>
      </ColRightWrapper>
    </ErrorBound>
  );
}
export default memo(Drug);
