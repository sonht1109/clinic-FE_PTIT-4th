/*
 *
 * SystemSetup style css file
 * make by phamthainb
 */
import qrBg from 'assets/images/qr-bg.png';
import styled from 'styled-components';

const WrapSystemSetup = styled.div`
  border: 1px solid #dfe9f5;
  background: #ffffff80;
  border-radius: 20px;
  margin-top: 36px;
  width: 100%;
  padding: 8px 40px 40px;
  display: flex;
  justify-content: center;
  .setup-container {
    width: 552px;
    max-width: 100%;
    .setup-item {
      padding-bottom: 32px;
      position: relative;
      &.change-language {
        &::after {
          display: none;
        }
      }
      &::after {
        display: block;
        content: '';
        width: 100%;
        height: 1px;
        position: absolute;
        bottom: 0;
        left: 0;
        background: #cbddf2;
      }
      .title {
        padding-top: 32px;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        color: #333b6a;
        margin-bottom: 20px;
        text-transform: uppercase;
      }
      .content {
        .handle-item {
          margin-bottom: 20px;
        }
        &.authen {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          .authen-item {
            display: flex;
            flex-wrap: wrap;
            background: #ffffff;
            border-radius: 12px;
            display: flex;
            margin-bottom: 20px;
            align-items: center;
            box-sizing: border-box;
            &.google-authen {
              width: 100%;
              padding: 32px;
              justify-content: space-between;
              img {
                width: 80px;
              }
              .desc {
                margin-top: 12px;
                font-size: 16px;
                font-weight: 500;
                line-height: 24px;
                color: #718098;
              }
              flex-direction: column;
            }
            &.apple-authen,
            &.android-authen {
              justify-content: flex-start;
              width: 47%;
              padding: 14px 0px 9px 20px;
              .right {
                font-size: 16px;
                padding-left: 26px;
                font-weight: 400;
                line-height: 24px;
                color: #718098;
                .bold {
                  font-weight: 500;
                  color: #333b6a;
                }
              }
            }
          }
          .warning {
            font-size: 14px;
            font-weight: 400;
            line-height: 21px;
            color: #ff6c6c;
            margin-bottom: 32px;
          }
          .button-group {
            margin: 0 auto;
            padding-top: 0;
          }
        }
      }
    }
    .button-group {
      padding-top: 32px;
      display: flex;
      justify-content: center;
      button {
        margin-left: 8px;
        margin-right: 8px;
      }
    }
  }

  @media only screen and (max-width: 700px) {
    padding: 8px 15px;
    .setup-container {
      .setup-item {
        .content {
          &.authen {
            .authen-item {
              &.google-authen {
                .desc {
                  font-size: 14px;
                }
              }
              &.apple-authen,
              &.android-authen {
                .right {
                  font-size: 14px;
                }
              }
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 500px) {
    padding: 8px 15px;
    .setup-container {
      .setup-item {
        .content {
          &.authen {
            .authen-item {
              &.google-authen {
                .desc {
                  font-size: 14px;
                }
              }
              &.apple-authen,
              &.android-authen {
                width: 49.5%;
                padding: 14px 0px 9px 10px;
                .right {
                  padding-left: 10px;
                }
              }
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 420px) {
    padding: 8px 15px;
    .setup-container {
      .setup-item {
        .content {
          &.authen {
            .authen-item {
              &.apple-authen,
              &.android-authen { 
                flex-direction: column; 
                width:48%;
                .right{
                  padding: 5px;
                }
              }
            } 
          }
        }
      }
    }
  }
`;

export default WrapSystemSetup;

export const SModalOn = styled.div`
  padding: 44px 56px 0;
  .qr {
    display: flex;
    flex-direction: column;
    align-items: center;
    .qr-img {
      width: 218px;
      height: 218px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-image: url(${qrBg});
      background-size: 100% 100%;
      img {
        width: 98%;
      }
    }
    .copy {
      margin-top: 58px;
      margin-bottom: 20px;
      height: 40px;
      padding: 4px;
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      width: 100%;
      border: 1px solid #dfe9f5;
      border-radius: 8px;
      input {
        width: 100%;
        padding: 0 10px;
        border: none;
        color: #333b6a;
        font-size: 14px;
        font-weight: 400;
        line-height: 21px;
      }
      button {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          margin-right: 8px;
        }
      }
    }
  }
  .note {
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    color: #718098;
    margin-bottom: 20px;
    span {
      color: #ff6c6c;
      font-weight: 500;
    }
  }
  .handle-item {
  }
  .button-group {
    padding-top: 56px;
    display: flex;
    margin-right: -8px;
    justify-content: flex-end;
    button {
      margin: 0 8px;
    }
  }
  @media only screen and (max-width:550px){
    padding: 30px 15px 0;
  }
`;

export const SModalOff = styled.div`
  padding: 24px 56px 0px;
  .button-group {
    padding-top: 56px;
    display: flex;
    margin-right: -8px;
    justify-content: flex-end;
    button {
      margin: 0 8px;
    }
  }
`;
