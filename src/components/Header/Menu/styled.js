import styled from "styled-components";

export const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    font-size: 1.2em;

    @media (max-width: 768px) {
      display: none;
      flex-flow: column nowrap;
      background: var(--color-background-dark);
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      position: absolute;
      align-items: center;
      justify-content: center;
      width: 100vw;
      height: 100vh;
    }
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

  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    bottom: 12px;
    left: 0;
    width: 0;
    height: 3px;
    background-color: #dddddd;
    border-radius: 4px;
    -webkit-transition: width 0.25s;
    transition: width 0.25s;
  }
`;
