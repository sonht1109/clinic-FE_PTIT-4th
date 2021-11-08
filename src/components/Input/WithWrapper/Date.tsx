import { DayPickerInputProps } from 'react-day-picker';
import {
  Control,
  Controller,
  FieldValues,
  RegisterOptions,
  SetValueConfig,
} from 'react-hook-form';
import { FaCalendar, FaTimes } from 'react-icons/fa';
import DatePicker from '../Date';
import Wrapper from '../Wrapper';

export interface IDateWithWrapper {
  datepickerProps?: DayPickerInputProps;
  wrapperProps: {
    label: string;
    className?: string;
  };
  name: string;
  control: Control<FieldValues>;
  setValue: (name: any, value: any, config?: SetValueConfig) => void;
  watch: any;
  rules?: Exclude<
    RegisterOptions,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs'
  >;
  defaultValue?: any;
}

const DateWithWrapper = (props: IDateWithWrapper) => {
  const {
    datepickerProps,
    wrapperProps,
    name,
    control,
    watch,
    setValue,
    rules,
    defaultValue = null
  } = props;

  const handleClear = () => {
    setValue(`${name}`, undefined);
  };

  const watchValue = watch(`${name}`);
  const isLabelOnTop = watchValue !== undefined;

  return (
    <Wrapper
      {...wrapperProps}
      icon={<FaCalendar size={16} />}
      isLabelOnTop={isLabelOnTop}
      handleRightIconClick={handleClear}
      rightIcon={isLabelOnTop && <FaTimes size={16} />}
    >
      <Controller
        name={name}
        control={control}
        rules={rules}
        defaultValue={defaultValue}
        render={({ ref, onChange, value, ...rest }) => (
          <DatePicker
            {...rest}
            {...datepickerProps}
            onDayChange={onChange}
            value={value}
            placeholder=""
          />
        )}
      />
    </Wrapper>
  );
};

export default DateWithWrapper;
