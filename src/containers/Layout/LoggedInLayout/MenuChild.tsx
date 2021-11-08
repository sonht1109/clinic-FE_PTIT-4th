import { ItemRoute } from 'configs/routes';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from 'styles/theme';

interface Props {
  route: ItemRoute;
  active?: boolean;
}

export default function MenuChild({ route, active = false }: Props) {
  return (
    <Link to={route.path}>
      <SMenuChild className={active ? 'active' : ''}>
        <div className="dot"></div>
        <span className="name">{route.name}</span>
      </SMenuChild>
    </Link>
  );
}

const SMenuChild = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 8px;
  color: white;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  border-radius: 10px;
  &:hover, &.active {
    background: rgba(255, 255, 255, 0.16);
  }
  .name {
    margin-left: 8px;
  }
  .dot {
    width: 8px;
    min-width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: white;
    position: relative;
    &:after {
      content: '';
      width: 4px;
      height: 4px;
      position: absolute;
      top: 2px;
      left: 2px;
      background-color: ${theme.color.green};
      border-radius: 2px;
      box-shadow: 0px 0px 4px #ffffff;
    }
  }
`;
