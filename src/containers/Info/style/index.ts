/*
 *
 * Info style css file
 * make by phamthainb
 */

import styled from 'styled-components';

const WrapInfo = styled.div`
  .form {
    margin-top: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  @media (max-width: 991px) {
    .form {
      grid-template-columns: 1fr;
    }
  }
`;

export default WrapInfo;
