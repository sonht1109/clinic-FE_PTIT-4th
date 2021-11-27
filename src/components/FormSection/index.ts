import styled from 'styled-components';

const FormSection = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  @media (max-width: 991px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

export default FormSection;
