import styled from "styled-components";

export const TerminalContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TerminalMenu = styled.div`
  width: 551px;
  background-color: var(--color-terminal-menu);
  height: 38px;
  border: none;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;

  @media (max-width: 768px) {
    width: 327px;
    text-align: left;
  }
`;

export const Screen = styled.div`
  display: flex;
  flex-direction: row;
  width: 551px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top: 0px;
  background-color: var(--color-background-dark);
  transition: 0.5s ease-out;
  transition-delay: 0.3s;

  @media (max-width: 768px) {
    width: 327px;
    text-align: left;
  }
`;

export const Icons = styled.div`
  background-color: var(--color-terminal-menu);
  padding: 20px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  @media (max-width: 768px) {
    width: 327px;
    text-align: left;
  }
`;

export const Icon = styled.ul`
  display: flex;
  margin: 20px 0;
`
