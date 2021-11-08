import useToggle from 'hooks/useToggle';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Text from '../Text';
import Wrapper from '../Wrapper';
import { ITextWithWrapper } from './Text';

const PasswordWithWrapper = (props: ITextWithWrapper) => {
  const { inputProps, wrapperProps, register } = props;
  const { state, toggle } = useToggle();

  return (
    <Wrapper
      {...wrapperProps}
      rightIcon={state ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
      handleRightIconClick={toggle}
    >
      <Text
        {...inputProps}
        ref={register}
        placeholder=" "
        type={state ? 'text' : 'password'}
      />
    </Wrapper>
  );
};

export default PasswordWithWrapper;
