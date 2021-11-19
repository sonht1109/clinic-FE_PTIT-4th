/*
 *
 * Nurse
 * make by phamthainb
 */

import React, { memo } from 'react';
import ErrorBound from 'components/ErrorBound';
import useInjectReducer from 'redux/useInjectReducer';
import reducersNurse from './store/reducers';
import { ColRightWrapper } from 'containers/Layout/LoggedInLayout';
import DataTable from './DataTable';
import WrapDoctor from 'containers/Doctor/style';

interface Props {}

// eslint-disable-next-line
function Nurse({}: Props) {
  useInjectReducer('Nurse', reducersNurse);
  return (
    <ErrorBound>
      <ColRightWrapper header="Y tá">
        <WrapDoctor>
          <DataTable />
        </WrapDoctor>
      </ColRightWrapper>
    </ErrorBound>
  );
}
export default memo(Nurse);
