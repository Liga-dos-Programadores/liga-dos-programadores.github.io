import styled from 'styled-components';

export const Social = styled.div`
  ul {
    display: flex;
    flex-direction: row;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 25px 0;
  }
`;

export const Link = styled.a`
  padding-left: 55px;
  color: var(--color-white);
  transition: all 150ms linear 0s;
  :hover {
    color: var(--color-blue);
    cursor: pointer;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;
