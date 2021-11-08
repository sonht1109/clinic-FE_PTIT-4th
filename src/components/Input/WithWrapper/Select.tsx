import React, { ReactNode } from 'react';
import {
  Control,
  Controller,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form';
import { FaCaretDown } from 'react-icons/fa';
import Select, { IRSelect } from '../Select';
import Wrapper from '../Wrapper';

interface ISelectWithWrapper {
  selectProps: IRSelect;
  wrapperProps: {
    label: string;
    className?: string;
    icon?: ReactNode;
  };
  name: string;
  control: Control<FieldValues>;
  watch: any;
  rules?: Exclude<
    RegisterOptions,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs'
  >;
  defaultValue?: any;
}

export default function SelectWithWrapper(props: ISelectWithWrapper) {
  const {
    selectProps,
    wrapperProps,
    name,
    control,
    watch,
    rules,
    defaultValue = null,
  } = props;

  const watchValue = watch(`${name}`);
  const isLabelOnTop =
    watchValue !== undefined || selectProps.defaultValue !== undefined;

  return (
    <Wrapper
      {...wrapperProps}
      isLabelOnTop={isLabelOnTop}
      rightIcon={<FaCaretDown size={16} />}
    >
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ ref, onChange, value, ...rest }) => (
          <Select
            defaultValue={undefined}
            {...rest}
            {...selectProps}
            {...{ onChange, value }}
            placeholder=""
            openMenuOnFocus
          />
        )}
        defaultValue={defaultValue}
      />
    </Wrapper>
  );
}
