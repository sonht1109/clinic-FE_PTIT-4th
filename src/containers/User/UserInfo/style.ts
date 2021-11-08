import { SNomalBound } from './../../../components/NomalBound/index';
import styled from 'styled-components';

export const SUserInfo = styled.div``;

export const SUserInfoBound = styled(SNomalBound)`
  margin-top: 32px;
  box-sizing: border-box;
  .header {
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    color: #333b6a;
    margin-bottom: 44px;
    text-transform: uppercase;
  }
  .content {
    max-width: 860px;
    margin: 0 auto;
    .title {
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      color: #333b6a;

      .desc {
        font-size: 14px;
        font-weight: 400;
        line-height: 21px;
        color: #718098;
        margin-bottom: 20px;
      }
    }

    .form {
      display: flex;
      flex-wrap: wrap;
      margin-right: -10px;
      align-items: flex-start;
      .avatar-upload_container {
        width: 33.3333%;
        .avatar-upload {
          max-width: 100%;
          padding-bottom: 0px;
          position: relative;
          width: 256px;
          .desc {
            font-size: 14px;
            font-weight: 400;
            line-height: 21px;
            text-align: center;
            color: #718098;
            margin-top: 22px;
          }
          .avatar-container {
            width: 100%;
            position: relative;
            padding-bottom: 110%;
            border-radius: 12px;
            overflow: hidden;
            img {
              position: absolute;
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          .button-upload {
            position: absolute;
            left: 50%;
            bottom: 24px;
            transform: translateX(-50%);
            width: 40px;
            height: 40px;
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
      }

      .handle {
        width: 66.6667%;
        display: flex;
        flex-wrap: wrap;
        /* margin-right: -10px; */
        /* margin-left: -10px;  */
        .handle-item {
          box-sizing: border-box;
          padding-right: 10px;
          padding-left: 10px;
          width: 50%;
          margin-bottom: 20px;
          &.handle-address {
            width: 100%;
          }
        }
        .button-group {
          padding-right: 10px;
          padding-left: 10px;
          width: 100%;
          display: flex;
          justify-content: flex-end;
          margin-top: 12px;
        }
      }
    }
  }

  @media only screen and (max-width: 1300px) {
    padding: 30px 15px;
  }
  @media only screen and (max-width: 700px) {
    .content {
      .form {
        flex-direction: column;
        margin-right: 0;
        .avatar-upload_container {
          width: 100%;
          display: flex;
          justify-content: center;
          margin-bottom: 30px;
        }
        .handle {
          width: 100%;
          .button-group {
            justify-content: center;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 500px) {
    .content {
      .form {
        flex-direction: column;
        margin-right: 0;
        .avatar-upload_container {
          width: 100%;
          display: flex;
          justify-content: center;
          margin-bottom: 30px;
        }
        .handle {
          width: 100%;
          .handle-item{
            width:100%;
            padding:0;
            margin-bottom:10px;
          }
          .button-group {
            button{
              width:110px;
              font-size:14px;
              font-weight:400;
              height:30px;
            }
          }
        }
      }
    }
  }
`;
