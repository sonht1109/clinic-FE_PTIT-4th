import { mixinFlexCenter } from 'styles/mixins';
import styled, { css } from 'styled-components';
import theme from 'styles/theme';
import { PermOptionEnum } from 'enum';
import usePermission from 'hooks/usePermission';

interface Props {
  children: any;
  onClick?: () => void;
  tooltip?: string;
  className?: string;
  tooltipColor?: string;
  borderColor?: string;
  borderColorOnHover?: string;
  permissionCode?: string;
  permissionType?: PermOptionEnum;
}

export default function HandleButton({
  children,
  onClick,
  tooltip = '',
  className,
  tooltipColor = '#00CB82',
  borderColor = '#DFE9F5',
  borderColorOnHover = '#00CB82',
  permissionCode = '',
  permissionType,
}: Props) {
  const hasTooltip = tooltip !== '';

  const permissionOption = usePermission(permissionCode);

  if (
    !permissionOption ||
    (permissionType && !permissionOption[permissionType])
  )
    return <></>;

  return (
    <SHandle
      {...{
        hasTooltip,
        onClick,
        className,
        tooltipColor,
        borderColor,
        borderColorOnHover,
      }}
      data-tooltip={tooltip}
    >
      {children}
    </SHandle>
  );
}

const SHandle = styled.div<{
  hasTooltip: boolean;
  tooltipColor: string;
  borderColor: string;
  borderColorOnHover: string;
}>`
  cursor: pointer;
  ${mixinFlexCenter};
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: 1px solid ${({ borderColor }) => borderColor};
  background-color: white;
  transition: 0.2s;
  position: relative;
  svg > path {
    fill: #a6b0cf;
  }
  &:hover {
    border-color: ${theme.color.green};
    svg > path {
      fill: ${theme.color.text_gray};
    }
  }
  ${({ hasTooltip, tooltipColor }) =>
    hasTooltip &&
    css`
      &:after {
        content: unset;
        position: absolute;
        bottom: calc(100% + 4px);
        color: ${tooltipColor};
        font-size: 12px;
        line-height: 21px;
        z-index: 2;
        padding: 1px 10px;
        max-width: 80px;
        text-align: center;
        background-color: white;
        border-radius: 4px;
        white-space: nowrap;
      }
      &:hover:after {
        content: attr(data-tooltip);
      }
    `}

  &:hover {
    border-color: ${({ borderColorOnHover }) => borderColorOnHover};
  }
`;
