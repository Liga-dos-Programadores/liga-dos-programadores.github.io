import styled from 'styled-components';

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
`;

export const Description = styled.p`
  color: var(--color-white);
  font-size: 23px;
  line-height: 2.5rem;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 3rem;
    line-height: 2rem;
  }
`;
