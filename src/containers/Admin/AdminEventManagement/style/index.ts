/*
 *
 * AdminEventManagement style css file
 * make by phamthainb
 */

import Button from 'components/Button';
import styled from 'styled-components';

const WrapAdminEventManagement = styled.div`
  margin-top: 36px;
`;

export const SHandle = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 4px;

  .handle-item {
    margin: 0 8px 8px;
  }
`;

export const SSearch = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  .search {
    &__title {
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #333b6a;
      text-transform: uppercase;
    }

    &__container {
      margin-left: auto;
      flex-grow: 1;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      align-items: center;
      & > ${Button} {
        border: 1px solid #dfe9f5;
        box-sizing: border-box;
        border-radius: 0px 6px 6px 0px;
        height: 40px;
        width: 160px;
        @media (max-width: 991px) {
          border-radius: unset;
        }
      }
    }
  }
`;

export default WrapAdminEventManagement;
