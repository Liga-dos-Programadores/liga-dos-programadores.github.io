import styled from 'styled-components';

export const Terminal = styled.div`
  display: flex;
  flex-direction: column;
  top: 0;
  right: 0;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const TerminalMenu = styled.div`
  width: 500px;
  height: 30px;
  background-color: var(--color-terminal-menu);
  margin: 0 auto;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;

  @media (max-width: 768px) {
    width: 310px;
  }
`;

export const Screen = styled.div`
  background: var(--color-terminal-screen);
  width: 500px;
  margin: 0 auto;
  padding: 20px;
  border-top: none;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  .prompt {
    color: #5f5f5e;
    margin-right: 7px;
  }

  @media (max-width: 768px) {
    width: 310px;
  }
`;

export const Underscore = styled.div`
  display: inline-block;
  position: relative;
`;
