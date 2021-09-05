import styled from 'styled-components';

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 180px;
  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

export const Title = styled.h1`
  font-size: 6.4em;
  line-height: 1.3em;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 30px;
    line-height: 3.2rem;
  }
`;

export const Description = styled.p`
  color: var(--color-gray);
  font-size: 3.3em;
  line-height: 3rem;
  margin: 1em 0;

  @media (max-width: 768px) {
    font-size: 17px;
    line-height: 2.5rem;
  }
`;

export const Button = styled.a`
  font-size: 3.3em;
  font-weight: 500;
  margin: 19px 0 0;
  padding: 12px 35px;
  text-decoration: none;
  border-radius:50px;
  transition: all 150ms linear 0s;
  width: 45%;
  text-align: center;
  display: inline-block;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: var(--button-font);
  background-color: var(--button-background);
  :hover {
    background-color: var(--color-light-blue);
    cursor: pointer;
  }
  justify-content: space-between;
  @media (max-width: 768px) {
    font-size: 3em;
    width: 85%;
    padding: 10px 26px;
  }
`;

export const AlignButton = styled.div`
  display: flex;
  flex-direction: row;
  display: inline-block;
`;
