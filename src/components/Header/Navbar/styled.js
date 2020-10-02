import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  padding-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
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

  /* &::after {
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
  } */
`;
