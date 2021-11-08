import styled from 'styled-components';
import theme from 'styles/theme';
import { SInputWrapper } from 'components/Input/Wrapper';

export const SEvents = styled.div`
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid #ffffff;
  box-sizing: border-box;
  box-shadow: 0px 12px 32px rgba(108, 127, 155, 0.1);
  border-radius: 12px;
  padding: 32px;
  margin-top: 32px;

  @media (max-width: 991px) {
    padding: 15px;
  }

  .module-header {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    ${SInputWrapper} {
      margin-left: auto;
    }
  }

  .module-content {
    margin-top: 20px;
    .event {
      &__list {
        margin-bottom: 32px;
        display: grid;
        grid-gap: 20px;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        @media (max-width: 1199px) {
          grid-template-columns: 1fr 1fr 1fr;
        }
        @media (max-width: 991px) {
          grid-gap: 10px;
          margin-bottom: 20px;
        }
        @media (max-width: 767px) {
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 575px) {
          grid-template-columns: 1fr;
        }
      }
    }
  }
`;

export const SEventItem = styled.div`
  padding: 8px;
  border: 1px solid #dfe9f5;
  box-sizing: border-box;
  box-shadow: 0px 12px 32px rgba(108, 127, 155, 0.1);
  border-radius: 20px;
  .event-item {
    &__img {
      width: 100%;
      height: 100px;
      border-radius: 12px;
      overflow: hidden;
      & > img {
        object-fit: cover;
      }
    }
    &__name {
      font-weight: bold;
      font-size: 12px;
      line-height: 18px;
      color: #333b6a;
      margin-top: 12px;
      text-align: center;
      font-family: 'Lato', sans-serif;
    }

    &__status {
      margin: 20px auto 12px;
      max-width: 140px;
      width: 100%;
      height: 32px;
      text-align: center;
      border-radius: 8px;
      font-family: 'Lato', sans-serif;
      font-size: 14px;
      line-height: 32px;
      color: #718098;
      font-weight: bold;

      &.accepted {
        background-color: #dcfcf0;
        color: ${theme.color.green};
      }
      &.waiting {
        background-color: #fbf1de;
        color: #ff9d33;
      }
      &.finished {
        color: ${theme.color.text_gray};
        background-color: #dfe9f5;
      }
    }
  }
`;
