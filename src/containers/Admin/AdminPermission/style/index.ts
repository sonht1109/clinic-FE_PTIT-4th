/*
 *
 * AdminPermission style css file
 * make by phamthainb
 */

import { SModalContent } from 'components/Modal';
import Button from 'components/Button';
import styled from 'styled-components';

const WrapAdminPermission = styled.div``;

export default WrapAdminPermission;

export const SDetailModal = styled(SModalContent)`
  margin-top: 44px;
  @media (max-width: 991px) {
    margin-top: 20px;
  }

  .body {
    &__input {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -10px 10px;
      .input-item {
        margin: 0 10px 10px;
        flex-basis: calc(50% - 20px);
        flex-grow: 1;
      }
    }

    &__button {
      margin: 56px -8px -8px auto;
      width: fit-content;
      display: flex;
      flex-wrap: wrap;
      @media (max-width: 991px) {
        margin-top: 20px;
      }
      & > ${Button} {
        flex-grow: 1;
        margin: 0 8px 8px;
      }
    }
  }
`;
