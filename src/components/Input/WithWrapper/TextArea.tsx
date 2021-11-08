import { ReactNode } from 'react';
import Wrapper from '../Wrapper';
import Textarea from '../Textarea';
import { TextareaAutosizeProps } from 'react-textarea-autosize';

export interface ITextWithWrapper {
  textareaProps?: TextareaAutosizeProps;
  wrapperProps: {
    icon?: ReactNode;
    label: string;
    rightIcon?: ReactNode;
    handleRightIconClick?: () => void;
    className?: string;
  };
  register: any;
}

const TextareaWithWrapper = (props: ITextWithWrapper) => {
  const { textareaProps, wrapperProps, register } = props;

  return (
    <Wrapper {...wrapperProps}>
      <Textarea
        minRows={3}
        maxRows={5}
        ref={register}
        {...textareaProps}
        placeholder=" "
      />
    </Wrapper>
  );
};

export default TextareaWithWrapper;
