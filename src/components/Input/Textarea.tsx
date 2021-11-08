import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';

const Textarea = styled(TextareaAutosize)`
  border: none;
  background-color: white;
  padding: 0;
  color: #333b6a;
  font-size: 14px;
  line-height: 16px;
  width: 100%;
  flex-grow: 1;
  resize: none;
  padding-right: 10px;
  padding-top: 4px;
  font-family: 'Roboto', sans-serif;
  /* min-height: 50px; */
`;

export default Textarea;
