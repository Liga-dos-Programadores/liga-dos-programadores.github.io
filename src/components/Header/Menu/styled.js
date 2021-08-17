import styled from 'styled-components';

export const Nav = styled.nav`
  @media (max-width: 768px) {
    display: contents;
  }

  ul {
    list-style: none;
    display: flex;
    font-size: 1.1em;

    @media (max-width: 768px) {
      flex-flow: column nowrap;
      background: var(--color-background-dark);
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      overflow: none;
      z-index: 20;

      transition: transform 0.3s ease-in-out;
      transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    }
  }

  a {
    text-decoration: none;
    padding: 0px 10px;
    word-wrap: normal;
    display: inline-block;
  }

  li {
    position: relative;
    width: 100%;
    text-decoration: none;
    text-decoration-line: none;
    color: #fff;
    transition: all 150ms linear 0s;
    position: relative;
    cursor: pointer;
    @media (max-width: 768px) {
      padding: 20px;
    }
  }

  li:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    margin: -10px 0;
    border: 1px solid var(--color-blue);
    border-radius: 5px;
    background-color: var(--color-blue);
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.4s ease-in-out 0s;
  }

  li:hover:before {
    visibility: visible;
    transform: scaleX(1);
  }
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: var(--color-white);

  &.is-active {
    color: var(--color-blue);
  }

  padding-left: 30px;
  transition: all 150ms linear 0s;
  position: relative;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 0;
  }
`;
