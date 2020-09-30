import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  max-width: 1232px;
  margin: auto;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: var(--color-background);

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-content: center;
    text-align: center;
    justify-content: center;
  }
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    flex-direction: none;
    list-style-type: none;
    font-size: 1.2em;
  }
`;

export const StyledLink = styled.a`
    text-decoration: none;
    color: var(--color-white);
    &.is-active {
        color: var(--color-blue);
    }
`;