/*
 *
 * Disease
 * make by phamthainb
 */

import React, { memo } from 'react';
import ErrorBound from 'components/ErrorBound';
import useInjectReducer from 'redux/useInjectReducer';
import reducersDisease from './store/reducers';
import { ColRightWrapper } from 'containers/Layout/LoggedInLayout';
import WrapDoctor from 'containers/Doctor/style';
import Handle from './Handle';
import DataTable from './DataTable';

interface Props {}

// eslint-disable-next-line
function Disease({}: Props) {
  useInjectReducer('Disease', reducersDisease);
  return (
    <ErrorBound>
      <ColRightWrapper header="Loại bệnh">
        <WrapDoctor> 
          <Handle />
          <DataTable />
        </WrapDoctor>
      </ColRightWrapper>
    </ErrorBound>
  );
}
export default memo(Disease);
