/*
 *
 * Notifications style css file
 * make by phamthainb
 */

import styled, { css } from 'styled-components';
import theme from 'styles/theme';

const WrapNotifications = styled.div`
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid #ffffff;
  box-sizing: border-box;
  box-shadow: 0px 12px 32px rgba(108, 127, 155, 0.1);
  border-radius: 12px;
  padding: 40px 56px;
  margin-top: 36px;

  @media (max-width: 767px) {
    padding: 15px;
  }

  .module-header {
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    text-transform: uppercase;
    color: #333b6a;
    & > span {
      color: #ff4b4b;
    }
  }

  .module-content {
    .list {
      padding: 0 16px;
      margin: 24px 0;

      @media (max-width: 767px) {
        padding: 0 5px;
      }
    }
  }
`;

export default WrapNotifications;

export const SNotification = styled.div<{ isRead: boolean }>`
  background: #ffffff;
  border: 1px solid #e8eff3;
  box-sizing: border-box;
  border-radius: 12px;
  padding: 20px 28px;
  margin: 16px 0;
  position: relative;

  .action-btn {
    position: absolute;
    right: 24px;
    top: 20px;
    cursor: pointer;
  }

  .notification {
    &__title {
      color: ${({ isRead }) =>
        isRead ? theme.color.text_gray : theme.color.primary};
      font-weight: 500;
      font-size: 14px;
      line-height: 21px;
      padding-right: 16px;
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
      margin-bottom: 16px;
    }

    &__content {
      font-size: 12px;
      line-height: 16px;
      color: ${theme.color.text_gray};
      padding-top: 16px;
      border-top: 1px solid #e8eff3;
    }
  }
`;

export const SAction = styled.div`
  position: absolute;
  width: max-content;
  top: 20px;
  right: 0;

  background: #ffffff;
  border: 1px solid #dfe9f5;
  box-sizing: border-box;
  box-shadow: 0px 12px 32px rgba(108, 127, 155, 0.1);
  border-radius: 8px;

  padding: 11px 0;

  .action-item {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    padding: 5px 16px;
    &__icon {
      margin-right: 8px;
    }
    &__label {
      font-size: 14px;
      line-height: 21px;
      text-align: center;
      color: #333b6a;
    }
    &:hover {
      .action-item__icon {
        & > svg > path {
          fill: #00cb82;
        }
      }
      .action-item__label {
        color: #00cb82;
      }
    }
  }
`;
