import React from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';

export interface ILink {
  name: string;
}

interface Props {
  links: ILink[];
}

export default function Breadcum({ links }: Props) {
  return (
    <SBreadcum>
      {React.Children.toArray(
        links.map((l, i) => (
          <>
            <span className="link">{l.name}</span>
            {i !== links.length - 1 && <span>{'>'}</span>}
          </>
        )),
      )}
    </SBreadcum>
  );
}

export const SBreadcum = styled.div`
  display: flex;
  align-items: center;
  margin: 0 -4px;
  & > span {
    color: ${theme.color.text_gray};
    font-size: 12px;
    line-height: 14px;
  }
  .link {
    margin: 0 4px;
  }
`;
