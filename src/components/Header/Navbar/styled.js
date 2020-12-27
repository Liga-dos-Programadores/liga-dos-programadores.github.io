import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  margin: 30px 0 100px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    margin: 25px 0 50px 0;
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