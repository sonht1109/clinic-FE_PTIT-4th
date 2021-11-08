import RS, { Props } from 'react-select';
import styled from 'styled-components';

export interface IRSelect extends Props {
  isMultiple?: boolean;
  wrapperClassName?: string;
}

export default function Select({
  isMultiple = false,
  wrapperClassName,
  ...rest
}: IRSelect) {
  return (
    <SSelect className={wrapperClassName}>
      <RS
        classNamePrefix="rs"
        placeholder={rest.placeholder || 'Chọn ...'}
        components={{
          IndicatorSeparator: () => null,
          DropdownIndicator: () => null,
        }}
        {...rest}
      />
    </SSelect>
  );
}

const SSelect = styled.div`
  width: 100%;
  height: 20px;
  .rs {
    &__control {
      border: none;
      height: 20px;
      font-size: 14px;
      padding: 0;
      flex-grow: 1;
      box-shadow: none;
      min-height: 0;
    }
    &__input {
      color: #333b6a;
    }
    &__menu {
      font-size: 14px;
    }
    &__single-value {
      color: #333b6a;
      margin: 0;
    }
    &__value-container {
      padding: 0;
    }
    &__placeholder {
      margin: 0;
    }
  }
`;
