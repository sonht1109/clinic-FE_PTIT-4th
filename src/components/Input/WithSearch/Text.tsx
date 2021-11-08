import styled from 'styled-components';
import theme from 'styles/theme';

const WithSearchText = styled.input`
  width: 256px;
  max-width: 100%;
  min-width: 200px;
  height: 40px;
  padding: 0 10px;
  color: ${theme.color.primary};
  font-size: 14px;
  line-height: 20px;
  background: #ffffff;
  border: 1px solid #dfe9f5;

  &.is-first {
    border-radius: 6px 0px 0px 6px;
  }
  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: #9ab1cc;
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    color: #9ab1cc;
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    color: #9ab1cc;
  }
  :-moz-placeholder {
    /* Firefox 18- */
    color: #9ab1cc;
  }
`;

export default WithSearchText;
