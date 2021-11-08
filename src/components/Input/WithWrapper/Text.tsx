import { InputHTMLAttributes, ReactNode } from 'react';
import Text from '../Text';
import Wrapper from '../Wrapper';

export interface ITextWithWrapper {
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  wrapperProps: {
    icon?: ReactNode;
    label: string;
    rightIcon?: ReactNode;
    handleRightIconClick?: () => void;
    className?: string;
  };
  register?: any;
}

const TextWithWrapper = (props: ITextWithWrapper) => {
  const { inputProps, wrapperProps, register } = props;

  return (
    <Wrapper {...wrapperProps}>
      <Text {...inputProps} ref={register} placeholder=" " />
    </Wrapper>
  );
};

export default TextWithWrapper;
