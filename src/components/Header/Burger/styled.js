import styled from "styled-components";

export const Burger = styled.div`
  width: 2rem;
  height: 2rem;
  top: 15px;
  right: 20px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
 
  div {
    width: 2rem;
    height: 0.25rem;
    background: var(--color-white);
    border: 1px solid var(--color-white);
    border-radius: 10px;
  }
`;