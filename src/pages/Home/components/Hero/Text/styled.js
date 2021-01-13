import styled from 'styled-components';

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 45px;
  line-height: 4.5rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 30px;
    line-height: 3.2rem;
  }
`;

export const Description = styled.p`
  color: var(--color-gray);
  font-size: 23px;
  line-height: 2.5rem;
  margin: 10px 0;

  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 2rem;
  }
`;

export const Button = styled.a`
  font-size: 21px;
  font-weight: 500;
  color: var(--color-white);
  background-color: var(--color-blue);
  margin: 19px 0 0;
  padding: 16px 35px;
  text-decoration: none;
  border-radius: 5px;
  transition: all 150ms linear 0s;
  width: 40%;
  text-align: center;
  :hover {
    background-color: var(--color-blue-light);
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 82%;
  }
`;
