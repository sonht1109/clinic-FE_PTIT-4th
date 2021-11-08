import useToggle from 'hooks/useToggle';
import React from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import theme from 'styles/theme';
import { SBell } from './Bell/styles';

export default function Balance() {
  const {state, toggle} = useToggle(false);

  return (
    <SBell className="balance pointer" onClick={toggle}>
      <p>Số dư tài khoản của bạn là:</p>
      <span>{state ? '123.456.789' : 'xxx.xxx.xxx'}</span>
      <div
        className="toggle-show" >
        {state ? (
          <FaEyeSlash color={theme.color.icon_gray} size={14} />
        ) : (
          <FaEye color={theme.color.icon_gray} size={14} />
        )}
      </div>
    </SBell>
  );
}
