import styled from "styled-components";

export const Terminal = styled.div`
  display: flex;
  flex-direction: column
`;

export const TerminalMenu = styled.div`
  width: 400px;
  height: 30px;
  background-color: #252831;
  margin: 0 auto;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`;

export const Screen = styled.div`
  background: var(--color-background-dark);
  width: 400px;
  margin: 0 auto;
  padding: 20px;
  border-top: none;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  .prompt {
    color: #5F5F5E;
    margin-right: 7px;
  }
`;

export const Underscore = styled.div`
  display: inline-block;
  position: relative;
`;