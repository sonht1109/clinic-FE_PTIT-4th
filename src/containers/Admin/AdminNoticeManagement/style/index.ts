/*
 *
 * AdminNoticeManagement style css file
 * make by phamthainb
 */

import styled from 'styled-components';

const WrapAdminNoticeManagement = styled.div`
  margin-top: 32px;
  .header-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    .title {
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      color: #333b6a;
      text-transform: uppercase;
    }
    .search {
      display: flex;
      input {
        width: 277px;
        height: 40px;
        box-sizing: border-box;
        border: 1px solid #dfe9f5;
        padding: 10px 10px 10px 16px;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        color: #9ab1cc;
        &::placeholder {
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
          color: #9ab1cc;
        }
      }
      button {
        margin-left: 1px;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
      }
    }
  }
  .tools {
    padding-top: 32px;
    padding-bottom: 8px;
    .tool-item {
      margin-left: 16px;
      .delete {
        &:after {
          color: #ff6c6c;
        }
        &:hover {
          border-color: #ff6c6c;
        }
      }
    }
  }
  @media only screen and (max-width: 600px) {
    .header-container {
      display: block;
      .search {
        margin-top: 10px;
        display: flex;
        justify-content: flex-end;
        input {
          height: 36px;
        }
        button {
          height: 36px;
        }
      }
    }
  }
`;

export default WrapAdminNoticeManagement;

export const SModalCreateNoti = styled.div`
  padding: 44px 56px;
  .handle {
    padding-bottom: 36px;
    .handle-item {
      margin-bottom: 20px;
    }
  }
  .button-group {
    display: flex;
    justify-content: flex-end;
    margin: 0 -8px;
    button {
      margin: 0 8px;
    }
  }
  @media only screen and (max-width: 600px) {
    padding: 30px 15px;
    .button-group {
      justify-content: center;
      button {
        font-size: 14px;
        width: 135px;
        margin: 0 4px;
      }
    }
  }
`;
export const SModalDeleteNoti = styled.div`
  padding: 44px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .desc {
    margin-top: 44px;
    margin-bottom: 32px;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
    color: #333b6a;
  }
  .button-group {
    display: flex;
    justify-content: center;
    margin: 0 -8px;
    button {
      margin: 0 8px;
    }
  }
  @media only screen and (max-width: 600px) {
    padding: 30px 15px;
    .button-group {
      button {
        font-size: 14px;
        width: 135px;
        margin: 0 4px;
      }
    }
  }
`;
