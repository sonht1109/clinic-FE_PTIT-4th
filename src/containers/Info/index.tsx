/*
 *
 * Info
 * make by phamthainb
 */

import React, { Children, memo, useEffect } from 'react';
import ErrorBound from 'components/ErrorBound';
import useInjectReducer from 'redux/useInjectReducer';
import reducersInfo from './store/reducers';
import WrapInfo from './style';
import { ColRightWrapper } from 'containers/Layout/LoggedInLayout';
import { useSelector } from 'react-redux';
import { selectAppStore } from 'containers/App/store/selecters';
import { fields } from './data';
import WithWrapper from 'components/Input/WithWrapper';
import { useForm } from 'react-hook-form';

interface Props {}

// eslint-disable-next-line
function Info({}: Props) {
  useInjectReducer('Info', reducersInfo);

  const { info } = useSelector(selectAppStore);

  const { register, setValue } = useForm();

  useEffect(() => {
    if (info) {
      info.createdAt = new Date(info.createdAt).toLocaleString();
      setValue('info', info);
    }
  }, [info, setValue]);

  return (
    <ErrorBound>
      <ColRightWrapper header="My Account">
        <WrapInfo>
          <form action="" className="form">
            {Children.toArray(
              fields.map(f => (
                <div className="form-item">
                  <WithWrapper.Text
                    wrapperProps={{ label: f.label, icon: f.icon }}
                    inputProps={{
                      name: f.name,
                      readOnly: true,
                    }}
                    register={register()}
                  />
                </div>
              )),
            )}
          </form>
        </WrapInfo>
      </ColRightWrapper>
    </ErrorBound>
  );
}
export default memo(Info);
