/*
 *
 * Patient
 * make by phamthainb
 */

import React, { memo } from 'react';
import ErrorBound from 'components/ErrorBound';
import useInjectReducer from 'redux/useInjectReducer';
import reducersPatient from './store/reducers';
import { ColRightWrapper } from 'containers/Layout/LoggedInLayout';
import Handle from './Handle';
import DataTable from './DataTable';
import WrapDoctor from 'containers/Doctor/style';

interface Props {}

// eslint-disable-next-line
function Patient({}: Props) {
  useInjectReducer('Patient', reducersPatient);
  return (
    <ErrorBound>
      <ColRightWrapper header="Bệnh nhân">
        <WrapDoctor>
          <Handle />
          <DataTable />
        </WrapDoctor>
      </ColRightWrapper>
    </ErrorBound>
  );
}
export default memo(Patient);
