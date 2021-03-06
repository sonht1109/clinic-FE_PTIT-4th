import React from 'react';
import { FaCheck } from 'react-icons/fa';
import styled from 'styled-components';
import { mixinFlexCenter } from 'styles/mixins';

interface Props {
  checked: boolean;
  onChange?: () => void;
}

export default function Checkbox({ checked, onChange }: Props) {
  return (
    <SCheckbox onClick={onChange} checked={checked}>
      <FaCheck color="white" size={8} style={{ minWidth: '8px' }} />
    </SCheckbox>
  );
}

export const SCheckbox = styled.div<{ checked: boolean }>`
  margin: 0;
  transition: 0.15s ease-out;
  /* width: ${({ checked }) => (checked ? '16px' : '16px')}; */
  /* height: ${({ checked }) => (checked ? '16px' : '16px')}; */
  width: 16px;
  height: 16px;
  border-radius: 4px;
  border-color: ${({ checked }) => (checked ? '#00CB82' : '#A6B0CF')};
  border-width: ${({ checked }) => (checked ? '8px' : '1px')};
  border-style: solid;
  background-color: white;
  ${mixinFlexCenter};
`;
