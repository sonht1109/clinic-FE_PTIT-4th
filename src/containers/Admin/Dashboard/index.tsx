/*
 *
 * Dashboard
 * make by phamthainb
 */

import React, { memo } from 'react';
import ErrorBound from 'components/ErrorBound';
import useInjectReducer from 'redux/useInjectReducer';
import reducersDashboard from './store/reducers';
import WrapDashboard from './style';
import { ColRightWrapper } from 'containers/Layout/LoggedInLayout';

interface Props {}

// eslint-disable-next-line
function Dashboard({}: Props) {
  useInjectReducer('Dashboard', reducersDashboard);
  return (
    <ErrorBound>
      <ColRightWrapper header="Dashboard">
        <WrapDashboard>
          Dashboard
        </WrapDashboard>
      </ColRightWrapper>
    </ErrorBound>
  );
}
export default memo(Dashboard);
