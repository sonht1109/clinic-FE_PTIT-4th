import { SBreadcum } from 'components/Breadcum';
import styled from 'styled-components';
import theme from 'styles/theme';

export const SHeader = styled.div`
  margin-top: 20px;
  display: flex;

  @media (max-width: 991px) {
    margin-top: 0;
  }

  .header {
    &__left {
      flex-grow: 1;
      .username {
        margin: 0;
        color: ${theme.color.text_gray};
        font-size: 12px;
        line-height: 14px;
      }
      .is-dashboard {
        font-size: 24px;
        line-height: 36px;
      }
      @media (max-width: 991px) {
        ${SBreadcum} {
          display: none;
        }
      }
    }

    &__right {
      display: flex;
      align-items: center;
      margin: 0 -10px;

      @media (max-width: 991px) {
        margin: 0 -5px;
      }

      .sub-menu {
        cursor: pointer;
        align-items: center;
        display: flex;
      }

      .avt {
        margin-right: 4px;
        overflow: hidden;
        min-width: 40px;
        width: 40px;
        height: 40px;
        user-select: none;
        & > img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .toggle-menu {
        @media (min-width: 992px) {
          display: none;
        }
      }

      .balance {
        width: auto;
        padding: 4px 12px;
        min-width: 180px;
        text-align: left;

        @media (max-width: 991px) {
          display: none;
        }

        & > p {
          margin: 0;
          color: #333b6a;
          font-size: 10px;
          line-height: 16px;
        }
        & > span {
          color: ${theme.color.green};
          font-weight: 500;
          font-size: 14px;
          line-height: 16px;
        }
        .toggle-show {
          position: absolute;
          bottom: 0px;
          right: 12px;
        }
      }
    }
  }
`;

export const SHeaderRightItem = styled.div`
  margin: 0 10px;
  @media (max-width: 991px) {
    margin: 0 5px;
  }
`;

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
