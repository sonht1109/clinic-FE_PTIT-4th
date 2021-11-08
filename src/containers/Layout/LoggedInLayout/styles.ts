import styled from 'styled-components';
import leftBg from 'assets/images/layout/menu-left-bg.png';

export const SLoggedIn = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  height: max-content;
  background-color: #eaf1fa;
  padding: 20px;
  padding-left: 310px;
  @media (max-width: 991px) {
    padding: 15px;
  }
`;

export const SLeft = styled.div<{ isOpen: boolean }>`
  width: calc(280px);
  height: 100%;

  transition: 0.15s ease-out;

  overflow: scroll;
  position: fixed;

  top: 0px;
  left: 0px;
  z-index: 6;

  padding: 20px 0 20px 20px;
  &::-webkit-scrollbar {
    display: none;
  }

  .left-container {
    width: 100%;
    background-image: url(${leftBg});
    background-position: top;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 160px 12px 32px;
    position: relative;
    border-radius: 32px;
  }

  .left {
    &__logo {
      position: absolute;
      top: 45px;
    }

    &__list {
      width: 100%;
    }

    &__right {
      margin: 0 8px;
      margin-top: 143px;
      border-radius: 24px;
      background-color: white;
      padding: 20px;
      & > img {
        margin-top: -47px;
      }
      & > p {
        margin-bottom: 8px;
        margin-top: 16px;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        color: #677079;
      }
      @media (max-width: 991px) {
        margin-top: 80px;
      }
    }

    &__close {
      @media (min-width: 992px) {
        display: none;
      }
      position: absolute;
      right: 5px;
      top: 10px;
      padding: 10px;
    }
  }

  @media (max-width: 991px) {
    padding: 15px 0 15px 15px;
    left: ${props => (props.isOpen ? '0px' : '-280px')};
  }
`;

export const SRight = styled.div`
  flex-grow: 1;
  padding-right: 10px;
  overflow-x: visible;
  max-width: 100%;

  @media (max-width: 991px) {
    padding-right: 0;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 5;
  background-color: rgba(24, 26, 41, 0.7);
`;
