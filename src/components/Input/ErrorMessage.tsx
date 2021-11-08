import React from 'react';
import { DeepMap, FieldError, FieldValues } from 'react-hook-form';
import styled from 'styled-components';

interface Props {
  errors: DeepMap<FieldValues, FieldError>;
  field: string;
}

export default function ErrorMessage({ errors, field }: Props) {
  if (errors[field]) return <SErrorMessage>{errors[field].message}</SErrorMessage>;
  return null;
}

export const SErrorMessage = styled.p`
  text-align: right;
  font-size: 12px;
  color: #ff4b4b;
  font-weight: 600;
  margin-top: 4px;
  margin-bottom: 0;
`;
