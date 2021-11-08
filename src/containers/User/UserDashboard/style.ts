import styled from 'styled-components';

export const SUserDashboad = styled.div`
  padding: 32px 0px 32px ;
  background: #eaf1fa;
  .tab-container {
    margin-top: 32px;
    .tab-header {
      .tab-list {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        .tab-item {
          font-size: 16px;
          font-weight: 500;
          line-height: 24px;
          color: white;
          margin-right: 4px;
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
          background: #718098;
          cursor: pointer;
          width: 190px;
          display: flex;
          justify-content: center;
          padding: 10px 0;
          &.active {
            background: #00cb82;
          }
        }
      }
    }
    .tab-content {
      border-bottom-left-radius: 12px;
      border-top-right-radius: 12px;
      border-bottom-right-radius: 12px;
      background: #ffffff80;
      padding: 20px;
    }
  }
  @media only screen and (max-width: 700px) {
    padding: 32px 0px;
    .tab-container {
      .tab-header {
        .tab-list {
          .tab-item {
            font-size: 13px;
            font-weight: 400;
            width: 140px;
            padding: 5px 0;
          }
        }
      }
    }
  }
`;
export const SAccountStatus = styled.div`
  max-width: 100%;
  border-radius: 20px;
  background: #ffffff80;
  padding: 40px 56px;
  .title {
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    color: #333b6a;
    margin-bottom: 16px;
  }
  .content {
    overflow: hidden;
    .chain-container {
      display: flex;
      width: 100%;
      max-width: 989px;
      margin: 0 auto;
      .item {
        width: 33.3%;
        position: relative;
        display: flex;
        align-items: center;
        flex-direction: column;
        .status-container {
          width: 100%;
          display: flex;
          justify-content: center;
          position: relative;
          .status {
            display: inline-block;
            position: relative;
            width: 62px;
            height: 62px;

            img {
              position: absolute;
              z-index: 1;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 100%;

              &.finish {
                opacity: 0;
              }
              &.unfinished {
                opacity: 1;
              }
            }
            &.active {
              /* &::before,
            &::after {
              background: #00cb82;
            } */
              img {
                &.finish {
                  opacity: 1;
                }
                &.unfinished {
                  opacity: 0;
                }
              }
            }
          }
          &.active {
            &::before,
            &::after {
              background: #00cb82 !important;
            }
          }
          &::before {
            display: block;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            height: 2px;
            background: #dfe9f5;
            right: 50%;
            width: 100%;
            content: '';
          }
          &.first-child {
            &::before {
              width: 170px;
            }
          }
          &.last-child {
            &::after {
              display: block;
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              height: 2px;
              background: #dfe9f5;
              left: 50%;
              content: '';
              width: 170px;
            }
          }
        }

        .desc {
          width: 200px;
          padding: 12px 0;
          font-size: 14px;
          font-weight: 500;
          line-height: 21px;
          color: #718098;
          display: flex;
          justify-content: center;
          border: 1px solid #dfe9f5;
          background: #ffffff;
          border-radius: 12px;
          margin-top: 16px;
          &.active {
            color: #333b6a;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 1090px) {
    .content {
      .chain-container {
        .item {
          .status-container {
            .status {
              width: 50px;
              height: 50px;
            }
          }
          .desc {
            font-size: 12px;
            width: unset;
            padding: 10px 10px;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 700px) {
    padding: 20px 15px;
    .content {
      .chain-container {
        /* flex-wrap: wrap;
        justify-content:center; */
        display: block;
        .item {
          padding-left:20%;
          width: 100%;
          margin-bottom: 15px;
          flex-direction: row;
          justify-content: flex-start;
          .status-container {
            margin-right: 40px;
            width: unset;
            &:after,
            &:before {
              display: none !important;
            }
            .status {
            }
          }
          .desc {
            margin-top: 5px;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 450px) { 
    .content {
      .chain-container { 
        .item {
          padding-left:10%; 
          .status-container {
            margin-right: 20px;
          }
          /* .desc {
            margin-top: 5px;
          } */
        }
      }
    }
  }
`;
export const SDashboardEvent = styled.div`
  /* display: flex; */
  /* flex-wrap: wrap; */
  /* justify-content: space-between;
  margin-left: -10px;
  margin-right: -10px; */
`;
export const SEventItem = styled.div<{ status: string }>`
.item-containter{
  width:100%;
  display: flex;
  justify-content:center;
  padding: 10px 0;
}
.item-slide{
  padding: 12px;
  border: 1px solid #dfe9f5;
  border-radius: 20px;
  width: 244px;
  transition: all 0.2s; 
  max-width:100%;
  .image-container {
    position: relative;
    width: 100%;
    height: 128px;
    border-radius: 12px;
    margin-bottom: 16px;
    overflow: hidden;
    img {
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }
  .desc {
    // font-family: Lato;
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
    margin-bottom: 20px;
    text-align: center;
    color: #718098;
  }
  .status {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 167px;
    border-radius: 8px;
    margin: 0 auto;
    color: ${props =>
      props.status === 'ended'
        ? '#718098'
        : props.status === 'waiting'
        ? '#FF9D33'
        : '#00CB82'};
    background: ${props =>
      props.status === 'ended'
        ? '#DFE9F5'
        : props.status === 'waiting'
        ? '#FBF1DE'
        : '#DCFCF0'};
  }
  &:hover {
    cursor: pointer;
    box-shadow: 0px 12px 32px 0px #6c7f9b1a;
    .desc {
      color: #333b6a;
    }
  }}
`;

export const SModalDetail = styled.div`
  margin: 44px 56px 0;
  border-radius:12px;
  overflow:hidden;
  border: 1px solid #dfe9f5;
  table { 
    width: 100%; 
    border-collapse: collapse;  
    tr {   
      td {
        border: 1px solid #dfe9f5;
        padding: 20px 20px 16px 20px;
        font-size: 14px;
        font-weight: 400;
        line-height: 21px;

        &.title {
          width: 33%;
          color: #333b6a;
          font-weight: 500;
        }
        &.content {
          width: 67%;
          color: #718098;
        }
      }
    }
  }
`;

export const CommonArrow = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  box-sizing: border-box;
  border: 1.4px solid #00cb82;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;

  transition: all 0.2s;
  .active {
    display: none;
  }
  .nomal {
    display: block;
  }

  &:hover {
    background: #00cb82;
    cursor: pointer;
    .active {
      display: block;
    }
    .nomal {
      display: none;
    }
  }
`;

export const SNextArrow = styled(CommonArrow)`
  right: 0;
  transform: translate(40px, -50%);
  @media only screen and (max-width: 1000px){
    transform: translate(30px, -50%);
  } 
`;

export const SPrevArrow = styled(CommonArrow)`
  left: 0;
  transform: translate(-40px, -50%);
  @media only screen and (max-width: 1000px){
    transform: translate(-30px, -50%);
  } 
`;
