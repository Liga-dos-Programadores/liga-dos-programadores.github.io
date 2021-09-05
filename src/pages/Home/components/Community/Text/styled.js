import styled from 'styled-components';

export const TextContainer = styled.div`
  flex-direction: column;
  width: 500px;
`;

export const Description = styled.p`
  color: var(--color-gray);
  font-size: 3.3em;
  line-height: 3rem;
  text-align: right;

  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 2rem;
    padding-top: 3rem;
  }
`;
