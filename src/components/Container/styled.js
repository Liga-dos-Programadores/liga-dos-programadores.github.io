import styled from 'styled-components';

const ContainerWrapper = styled.div`
  width: 90%;
  max-width: 1250px;
  margin: 0 auto;
  background-color: var(--color-background);

  @media (max-width: 1124px) {
    max-width: 850px;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    max-width: 300px;
    flex-direction: column;
  }
`;

export default ContainerWrapper;
