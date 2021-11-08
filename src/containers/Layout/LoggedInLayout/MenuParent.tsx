import Accordion from 'components/Accordion';
import { ItemRoute } from 'configs/routes';
import { mixinFlexCenter } from 'styles/mixins';
import React, { Children, useEffect, useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MenuChild from './MenuChild';

interface Props {
  route: ItemRoute;
  currentPath: string;
}

interface IMenuParent {
  route: ItemRoute;
  canDropdown: boolean;
  onClick?: () => void;
  isOpen?: boolean;
  active?: boolean;
}

export default function MenuParent({ route, currentPath }: Props) {
  const [isOpen, toggleOpen] = useState(false);

  useEffect(() => {
    if (route?.child) {
      const childrenPaths = route.child.map(c => c.path);
      const active = childrenPaths.includes(currentPath);
      toggleOpen(active);
    }
    else {
      toggleOpen(route.path === currentPath);
    }
  }, [currentPath, route]);

  if (route?.child) {
    return (
      <Accordion
        isOpen={isOpen}
        parent={
          <MainMenuParent
            active={isOpen}
            route={route}
            canDropdown
            isOpen={isOpen}
            onClick={() => toggleOpen(prev => !prev)}
          />
        }
      >
        <SChildrenWrapper>
          {Children.toArray(
            route.child.map((c: ItemRoute) => (
              <MenuChild active={c.path === currentPath} route={c} />
            )),
          )}
        </SChildrenWrapper>
      </Accordion>
    );
  }

  return (
    <MainMenuParent
      active={isOpen}
      route={route}
      canDropdown={false}
    />
  );
}

const MainMenuParent = ({
  route,
  canDropdown,
  onClick,
  isOpen = false,
  active = false,
}: IMenuParent) => {
  if (canDropdown) {
    return (
      <SMenuParent onClick={onClick} className={active ? 'active' : ''}>
        <div className="icon">{route?.icon}</div>
        <span className="name">{route.name}</span>
        <div className={`indicator ${isOpen ? 'rotate' : ''}`}>
          <FaChevronRight color="white" size={10} />
        </div>
      </SMenuParent>
    );
  }
  return (
    <Link to={route.path}>
      <SMenuParent className={active ? 'active' : ''}>
        <div className="icon">{route?.icon}</div>
        <span className="name">{route.name}</span>
      </SMenuParent>
    </Link>
  );
};

const SMenuParent = styled.div`
  display: flex;
  align-items: center;
  color: white;
  cursor: pointer;
  border-radius: 10px;
  padding: 4px 14px 4px 4px;
  margin-top: 10px;
  &:hover,
  &.active {
    background: rgba(255, 255, 255, 0.16);
    transition: 0.2s;
    .icon {
      background-color: white;
      & > svg > path {
        fill: #00cb82;
      }
    }
  }
  .icon {
    ${mixinFlexCenter};
    width: 32px;
    height: 32px;
    border-radius: 8px;
    transition: 0.2s;
  }
  .name {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    margin-left: 15px;
    flex-grow: 1;
  }
  .indicator {
    transition: 0.1s;
    &.rotate {
      transform: rotate(90deg);
    }
  }
`;

const SChildrenWrapper = styled.div`
  margin: 8px 0 14px 56px;
  width: auto !important;
`;
