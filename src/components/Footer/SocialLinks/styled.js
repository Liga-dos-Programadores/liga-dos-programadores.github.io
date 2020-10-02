import styled from "styled-components";

export const Social = styled.div`
  ul {
    display: flex;
    flex-direction: row;
  }
`;

export const Link = styled.a`
  size:40px;
  color: var(--color-white);
  transition: all 150ms linear 0s;
  :hover {
    color: var(--color-blue);
    cursor: pointer;
  }
`;