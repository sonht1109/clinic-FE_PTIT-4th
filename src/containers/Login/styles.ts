import styled from 'styled-components';
import { mixinFlexCenter } from 'styles/mixins';
import {SModalContent} from 'components/Modal'

export const SLogin = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  padding: 40px 100px;
  box-sizing: border-box;
  background-color: #EAF1FA;
  ${mixinFlexCenter};

  @media (max-width: 991px) {
    padding: 40px 20px;
  }

  .login {
    &__container {
      background: rgba(255, 255, 255, 0.5);
      display: flex;
      flex-grow: 1;
      border: 1px solid #dfe9f5;
      box-sizing: border-box;
      box-shadow: 0px 12px 32px rgba(108, 127, 155, 0.1);
      border-radius: 20px;
    }
    &__col {
      flex-grow: 1;
      width: 50%;

      &-left {
        background: #ffffff;
        border: 1px solid #dfe9f5;
        box-sizing: border-box;
        border-radius: 20px;
        ${mixinFlexCenter};
        & > img {
          max-width: 100%;
          height: auto;
        }
        @media (max-width: 991px) {
          display: none;
        }
      }

      &-right {
        ${mixinFlexCenter};
        padding: 40px 80px;

        @media (max-width: 991px) {
          padding: 40px 20px;
        }

        .col-right {
          &__container {
            flex-grow: 1;
          }
          &__header {
            margin: 0;
            font-weight: bold;
            font-size: 24px;
            line-height: 36px;
            color: #333b6a;
          }
        }

        .col-right__form {
          max-width: 380px;
          flex-grow: 1;
          margin-top: 32px;

          @media (max-width: 991px) {
            max-width: none;
          }

          .form-item {
            margin-bottom: 20px;
          }

          & > button {
            margin-top: 12px;
            width: 100%;
          }
        }
      }
    }
  }
`;

export const SCodeModal = styled(SModalContent)`
  margin-top: 44px;
  @media(max-width: 991px) {
    margin-top: 20px;
  }
`
