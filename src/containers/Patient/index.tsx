/*
*
* Patient
* make by phamthainb
*/

import React, { memo } from 'react';
import ErrorBound from 'components/ErrorBound';
import useInjectReducer from 'redux/useInjectReducer';
import reducersPatient from './store/reducers';
import WrapPatient from './style';

interface Props {}

// eslint-disable-next-line
function Patient({}: Props) {
useInjectReducer('Patient', reducersPatient);
return (
<ErrorBound>
  <WrapPatient> Patient </WrapPatient>
</ErrorBound>
);
}
export default memo(Patient);