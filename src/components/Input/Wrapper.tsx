import { ReactNode } from 'react';
// import { FaCaretDown, FaTimes } from 'react-icons/fa';
import styled, { css } from 'styled-components';
import theme from 'styles/theme';
import Text from './Text';

export interface IWrapper {
  icon?: ReactNode;
  rightIcon?: ReactNode;
  children?: ReactNode;
  label: string;
  isLabelOnTop?: boolean;
  handleRightIconClick?: () => void;
  className?: string;
  onFocus?: () => void;
}

export default function Wrapper({
  children,
  icon = null,
  label,
  rightIcon = null,
  isLabelOnTop = false,
  handleRightIconClick = () => {},
  className = "",
  onFocus = () => {}
}: IWrapper) {

  return (
    <SInputWrapper onClick={onFocus} className={className} isLabelOnTop={isLabelOnTop}>
      {icon && <div className="icon">{icon}</div>}
      <div className="input-wrapper">
        {children}
        <span className="label">{label}</span>
      </div>
      {rightIcon && (
        <div className="icon pointer" onClick={handleRightIconClick}>
          {rightIcon}
        </div>
      )}
    </SInputWrapper>
  );
}

export const SInputWrapper = styled.label<{ isLabelOnTop: boolean }>`
  border: 1px solid ${theme.color.border_gray};
  background-color: white;
  transition: 0.2s;
  border-radius: 8px;
  display: flex;
  min-height: 38px;
  padding-left: 16px;
  min-width: 200px;

  &:focus-within {
    border-color: ${theme.color.green};
    .icon {
      svg {
        path {
          fill: ${theme.color.green};
        }
      }
    }
    ${props =>
      !props.isLabelOnTop &&
      css`
        .input-wrapper {
          .label {
            font-size: 10px;
            top: 3px;
          }
        }
      `}
  }

  .icon {
    padding: 9px 12px 9px 0;
    svg {
      width: 16px;
      height: 16px;
      path {
        fill: #9ab1cc;
      }
    }
  }
  .input-wrapper {
    position: relative;
    padding-bottom: 4px;
    padding-top: 15px;
    flex-grow: 1;
    .label {
      transition: 0.2s;
      position: absolute;
      top: ${props => (props.isLabelOnTop ? '3px' : '10px')};
      left: 0;
      z-index: 0;
      color: #718098;
      font-size: ${props => (props.isLabelOnTop ? '10px' : '12px')};
      line-height: 18px;
    }
    ${Text}:not(:placeholder-shown),  textarea:not(:placeholder-shown){
      &:not(:focus) ~ .label {
        font-size: 10px;
        top: 3px;
      }
    }
  }

  .react-datepicker__close-icon {
    padding-right: 12px;
    &::after {
      background-color: white;
      color: ${theme.color.icon_gray};
      font-size: 20px;
      padding: 0;
    }
  }
`;
