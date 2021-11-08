/*
 *
 * Demo
 * make by phamthainb
 */

import React, { memo } from 'react';
import ErrorBound from 'components/ErrorBound';
import useInjectReducer from 'redux/useInjectReducer';
import reducersDemo from './store/reducers';
import WrapDemo from './style';
import DemoComponent from 'components/DemoComponent';
import HeaderText from 'components/HeaderText';
import Breadcum from 'components/Breadcum';
import HandleButton from 'components/Button/HandleButton';
import { FaAddressBook, FaInfo, FaLock, FaPlus, FaTrash } from 'react-icons/fa';
import Pagination from 'components/Pagnination';
import Button from 'components/Button';
import WithWrapper from 'components/Input/WithWrapper';
import { useForm } from 'react-hook-form';

interface Props {}

// eslint-disable-next-line
function Demo({}: Props) {
  useInjectReducer('Demo', reducersDemo);

  const { register, handleSubmit, control, setValue, watch } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <ErrorBound>
      <WrapDemo>
        <DemoComponent name="Header text" key="1" />
        <HeaderText>Header Text</HeaderText>
        <Button onClick={() => setValue('date', new Date())}>Thêm mới</Button>
        <DemoComponent name="Breadcum" key="2" />
        <Breadcum links={[{ name: '1' }, { name: '2' }, { name: '3' }]} />

        <DemoComponent name="HandleButton" key="3" />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <HandleButton tooltip="Thêm mới">
            <FaPlus size={16} color="#A6B0CF" />
          </HandleButton>
          <HandleButton>
            <FaTrash size={16} color="#A6B0CF" />
          </HandleButton>
        </div>

        <DemoComponent name="Pagination" key="4" />
        <Pagination
          total={100}
          current={2}
          pageSize={5}
          handleChangePageSize={n => {
            console.log('PAGE SIZE:', n);
          }}
        />

        <DemoComponent name="Button" key="5" />

        <WithWrapper.Password
          inputProps={{
            name: 'test',
          }}
          wrapperProps={{
            label: 'Password',
            icon: <FaLock size={16} />,
          }}
          register={register()}
        />

        <WithWrapper.Date
          wrapperProps={{
            label: 'Date',
          }}
          {...{ watch, setValue, control }}
          name="date"
        />

        <WithWrapper.Select
          name="select"
          control={control}
          wrapperProps={{
            label: 'Select',
            icon: <FaAddressBook size={16} />,
          }}
          watch={watch}
          selectProps={{
            options: [{ label: '1', value: '1' }],
          }}
        />

        <WithWrapper.Textarea
          wrapperProps={{ icon: <FaInfo size={12} />, label: 'Textarea' }}
          register={register()}
          textareaProps={{}}
        />

        <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
      </WrapDemo>
    </ErrorBound>
  );
}
export default memo(Demo);
