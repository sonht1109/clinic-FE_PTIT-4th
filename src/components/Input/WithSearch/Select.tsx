import { FaCaretDown } from 'react-icons/fa';
import RS from 'react-select';
import styled from 'styled-components';
import { IRSelect } from '../Select';

export default function WithSearchSelect({
  wrapperClassName,
  ...rest
}: IRSelect) {
  return (
    <SWithSearchSelect className={wrapperClassName}>
      <RS
        classNamePrefix="rs"
        placeholder={rest.placeholder || 'Chọn ...'}
        components={{
          IndicatorSeparator: () => null,
          DropdownIndicator: () => <FaCaretDown size={12} color="#A6B0CF" />,
        }}
        {...rest}
      />
    </SWithSearchSelect>
  );
}

export const SWithSearchSelect = styled.div`
  max-width: 100%;
  width: 256px;
  min-width: 200px;
  height: 40px;
  padding: 0 10px;
  background: #ffffff;
  border: 1px solid #dfe9f5;
  &.is-first {
    border-radius: 6px 0 0 6px;
    @media (max-width: 991px) {
      border-radius: unset;
    }
  }

  .rs {
    &__control {
      border: none;
      height: 38px;
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
    }
    &__value-container {
      padding: 0;
    }
    &__placeholder {
      margin: 0;
    }
  }
`;
