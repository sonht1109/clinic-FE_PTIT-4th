import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface IAccordion {
  parent: ReactNode;
  children: ReactNode;
  childrenHeight?: string;
  isOpen: boolean;
}

export default function Accordion({
  parent,
  children,
  childrenHeight = '500px',
  isOpen,
}: IAccordion) {
  return (
    <SAccordion childrenHeight={childrenHeight}>
      {parent}
      <div className={`children-wrapper ${isOpen ? 'open' : ''}`}>{children}</div>
    </SAccordion>
  );
}

export const SAccordion = styled.div<{ childrenHeight: string }>`
  width: 100%;
  height: auto;
  .children-wrapper {
    width: 100%;
    height: 0;
    overflow: hidden;
    &.open {
      height: max-content;
    }
  }
`;
