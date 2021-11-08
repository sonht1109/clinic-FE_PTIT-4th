/*
 *
 * AdminKycManagement style css file
 * make by phamthainb
 */

import Button from 'components/Button';
import { SModalContent } from 'components/Modal';
import styled from 'styled-components';
import { mixinFlexCenter } from 'styles/mixins';
import theme from 'styles/theme';

const WrapAdminKycManagement = styled.div``;

export default WrapAdminKycManagement;

export const SKycDetailModal = styled(SModalContent)`
  margin-top: 44px;
  @media (max-width: 991px) {
    margin-top: 20px;
  }
  .body {
    &__input {
      margin: 0 -8px 12px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      @media (max-width: 767px) {
        grid-template-columns: 1fr;
      }
      .input-item {
        margin: 0 8px 20px;
      }
    }

    &__img {
      margin: 0 -8px -8px;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }

    &__button {
      margin: 56px -8px -8px;
      margin-left: auto;
      display: flex;
      flex-wrap: wrap;
      width: fit-content;

      & > ${Button} {
        flex-grow: 1;
        margin: 0 8px 8px;
      }
    }
  }
`;

export const SKycUpload = styled.label`
  margin: 0 8px 8px;
  .upload-container {
    max-width: 200px;
    width: 190px;
    height: 120px;
    border: 1px solid #dfe9f5;
    box-sizing: border-box;
    border-radius: 8px;
    background: #f5faff;
    flex-grow: 1;
    cursor: pointer;

    ${mixinFlexCenter};
    position: relative;
    & > input[type='file'] {
      display: none;
    }
    .icon {
      position: absolute;
      bottom: -16px;
      left: calc(50% - 16px);
      background-color: ${theme.color.green};
      border-radius: 50%;
      width: 32px;
      height: 32px;
      ${mixinFlexCenter};
    }

    .img-uploaded {
      border-radius: 8px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .upload-title {
    font-size: 12px;
    line-height: 18px;
    color: #718098;
    margin-top: 20px;
    margin-bottom: 0;
    text-align: center;
  }
`;

export const SDenyModal = styled(SModalContent)`
  margin-top: 44px;
  @media (max-width: 991px) {
    margin-top: 20px;
  }
`;
