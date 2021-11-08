import styled from 'styled-components';
import { mixinScrollBar } from 'styles/mixins';
import theme from 'styles/theme';

export const SStatistic = styled.div`
  display: grid;
  margin: -10px;
  margin-top: 40px;
  grid-template-columns: 1fr 1fr 1fr;

  overflow-y: auto;
  ${mixinScrollBar('4px', '4px', '4px', "transparent", undefined, undefined)};

  @media (max-width: 991px) {
    margin: -5px;
    margin-top: 20px;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const SStaticItem = styled.div`
  padding: 20px 28px;
  position: relative;
  border: 1px solid #dfe9f5;
  box-sizing: border-box;
  border-radius: 20px;
  background: #ffffff;
  margin: 10px;
  min-height: 140px;
  display: flex;
  transition: 0.2s;

  @media(hover: hover) and (pointer: fine) {
    &:hover {
      transform: translate(-5px, -5px);
      box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.5);
    }
  }

  @media (max-width: 991px) {
    padding: 10px;
    min-height: 120px;
    margin: 10px;
    margin: 5px;
  }

  .item {
    &__left {
      z-index: 1;
      display: flex;
      align-items: flex;
      flex-direction: column;
      height: 100%;
      justify-content: center;
      flex-grow: 1;

      @media (max-width: 991px) {
        background-color: rgba(255, 255, 255, 0.9);
        .title {
          max-width: 100%;
        }
      }
      .number {
        color: ${theme.color.primary};
        font-weight: bold;
        font-size: 40px;
        line-height: 47px;
      }
      .title {
        color: ${theme.color.text_gray};
        font-size: 14px;
        line-height: 20px;
        max-width: 150px;
      }
    }

    &__right {
      position: absolute;
      top: 20px;
      right: 28px;
      z-index: 0;
      @media (max-width: 991px) {
        top: 10px;
        right: 10px;
      }
    }
  }
`;
