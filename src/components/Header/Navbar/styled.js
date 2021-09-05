import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  margin: 40px 0 140px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 2.5em;

  @media (max-width: 768px) {
    margin: 30px 0 60px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: var(--color-white);

  &.is-active {
    color: var(--color-blue);
  }

  padding: 0 1em 0 1em;
  transition: all 150ms linear 0s;
  position: relative;
`;
