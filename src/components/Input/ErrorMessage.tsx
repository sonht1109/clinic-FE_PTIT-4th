import React from 'react';
import { DeepMap, FieldError, FieldValues } from 'react-hook-form';
import styled from 'styled-components';
import { ErrorMessage as EM } from '@hookform/error-message';

interface Props {
  errors: DeepMap<FieldValues, FieldError>;
  field: string;
}

export default function ErrorMessage({ errors, field }: Props) {
  return (
    <EM
      errors={errors}
      name={field}
      render={({ message }) => <SErrorMessage>{message}</SErrorMessage>}
    />
  );
}

export const SErrorMessage = styled.p`
  text-align: right;
  font-size: 12px;
  color: #ff4b4b;
  font-weight: 600;
  margin-top: 4px;
  margin-bottom: 0;
`;
