/**
 *
 * DemoComponent
 *
 */
import React, { memo } from "react";
import styled from "styled-components";

interface Props {
  name: string;
}

function DemoComponent({ name }: Props) {
  return <StylesDemoComponent>This is {name}</StylesDemoComponent>;
}
const StylesDemoComponent = styled.div`
  text-decoration: underline;
`;

export default memo(DemoComponent);
