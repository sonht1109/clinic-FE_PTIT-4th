import styled, { css } from 'styled-components';
import { mixinScrollBar, mixinTextOverflow } from 'styles/mixins';
import theme from 'styles/theme';
import { SHeaderRightItem } from '../styles';

export const SBell = styled(SHeaderRightItem)`
  position: relative;
  background: #ffffff;
  box-sizing: border-box;
  box-shadow: 0px 8px 16px rgba(166, 176, 207, 0.2);
  border-radius: 12px;
  width: 40px;
  height: 40px;
  text-align: center;
  padding-top: 10px;
  .badge {
    position: absolute;
    top: 4px;
    right: 4px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #ff4b4b;
  }
`;

export const SBellDropdown = styled.div<{ state: boolean }>`
  width: 300px;
  max-height: ${props => (props.state ? '400px' : '0px')};
  position: absolute;
  top: calc(100% + 20px);
  right: 0;
  background-color: white;
  box-shadow: 0px 12px 32px rgba(108, 127, 155, 0.1);
  border-radius: 12px;
  border: solid #dfe9f5;
  border-width: ${props => (props.state ? '1px' : '0px')};
  z-index: 4;
  transition: 0.2s;
  overflow: hidden;
  text-align: left;
  display: flex;
  flex-direction: column;

  .bell-dropdown {
    &__header {
      display: flex;
      align-items: center;
      padding: 24px 24px 16px;
      .header {
        margin: 0;
        flex-grow: 1;
        text-transform: uppercase;
        color: #243656;
        font-size: 14px;
        line-height: 21px;
        font-weight: bold;
      }
      .link {
        color: ${theme.color.green};
        font-size: 14px;
        line-height: 21px;
      }
    }

    &__list {
      flex-grow: 1;
      padding: 0 24px;
      overflow: auto;
      ${mixinScrollBar(
        '4px',
        '4px',
        '4px',
        'transparent',
        '#9AB1CC',
        '#9AB1CC',
      )};

      .fetch-more {
        text-align: center;
        color: #718098;
        font-size: 12px;
        margin-bottom: 10px;
      }
    }
  }
`;

export const SNotification = styled.div<{ isRead: boolean }>`
  padding: 16px 0px;
  border-top: 1px solid #dfe9f5;
  .notification {

    &__title {
      color: ${({ isRead }) =>
        isRead ? theme.color.text_gray : theme.color.primary};
      font-weight: 500;
      font-size: 14px;
      line-height: 21px;
      .title {
        position: relative;
      }
      ${props =>
        !props.isRead &&
        css`
          .title:after {
            content: '';
            width: 8px;
            height: 8px;
            border-radius: 4px;
            background-color: #ff4b4b;
            position: absolute;
            left: calc(100% + 8px);
            top: 6px;
          }
        `};
    }

    &__timestamp {
      font-size: 10px;
      line-height: 21px;
      color: ${theme.color.green};
      margin-bottom: 4px;
    }

    &__content {
      ${mixinTextOverflow(3)};
      font-size: 12px;
      line-height: 16px;
      color: ${theme.color.text_gray};
    }
  }
`;
