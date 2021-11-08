/*
 *
 * UserKyc style css file
 * make by phamthainb
 */

import styled from 'styled-components';

const WrapUserKyc = styled.div`
  margin-top: 27px;
  background: #ffffff80;
  border-radius: 20px;
  padding: 44px 56px;
  .module {
    .module-header {
      .title {
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        color: #333b6a;
      }
      .desc {
        font-size: 14px;
        font-weight: 400;
        line-height: 21px;
        color: #718098;
      }
    }
    .module-content {
      .kyc-completed {
        padding-top: 100px;
        padding-bottom: 100px;
        display: flex;
        align-items: center;
        flex-direction: column;
        .image-container {
          max-width: 90%;
        }
        .desc {
          font-size: 14px;
          font-weight: 400;
          line-height: 21px;
          color: #718098;
          margin-top: 16px;
          padding: 0 10px;
          text-align: center;
        }
      }
      .step {
        margin-top: 44px;
        justify-content: center;
        margin-left: -10px;
        margin-right: -10px;
        display: none;
        position: relative;
        &.active {
          display: flex;
          flex-wrap: wrap;
        }
        .item {
          box-sizing: border-box;
          padding-left: 10px;
          padding-right: 10px;
          width: 50%;
          margin-bottom: 20px;
          max-width: 403px;
          &.item-images {
            width: 33.33%;
            .choose_img {
              padding-bottom: 18px;
              position: relative;
              .image-container {
                width: 100%;
                position: relative;
                border: 1px solid #dfe9f5;
                background: #ffffff;
                display: flex;
                justify-content: center;
                align-items: center;
                padding-bottom: 57%;
                border-radius: 8px;
                overflow: hidden;
                img {
                  position: absolute;
                  width: 101%;
                  height:101%;
                  top: -1px;
                  left: -1px;
                  object-fit: cover;
                  object-position: center;
                }
              }
              .button-upload {
                position: absolute;
                left: 50%;
                bottom: 0px;
                transform: translateX(-50%);
                width: 36px;
                height: 36px;
                border-radius: 50%;
                /* display: flex;
                justify-content: center;
                align-items: center; */
                background: #00cb82;
                cursor: pointer;
                transition: all 0.3s;
                label {
                  cursor: pointer;
                  border-radius: 50%;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  top: 0;
                  left: 0;
                  input {
                    display: none;
                  }
                  svg {
                    color: white;
                  }
                }
                &:hover {
                  box-shadow: 0px 1px 13px 2px rgb(0, 0, 0, 23%);
                }
              }
            }
            .desc {
              font-size: 12px;
              font-weight: 400;
              line-height: 18px;
              color: #718098;
              margin-top: 21px;
              text-align: center;
            }
          }
        }
      }

      .button-group {
        margin-top: 65px;
        display: flex;
        justify-content: center;
        button {
          margin-left: 8px;
          margin-right: 9px;
        }
      }
    }
  }
`;

export default WrapUserKyc;
