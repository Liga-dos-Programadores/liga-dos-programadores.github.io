import styled from 'styled-components';

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 100px;
`;

export const TerminalContainer = styled.div`
  display: grid;
  -ms-grid-columns: 1fr;
  grid-template-columns: 1fr;
  grid-gap: 20px;

  @media (max-width: 768px) {
    grid-gap: 35px;
    margin: 55px 0;
  }
`;

export const Terminal = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 191px;
  top: 0;
  right: 0;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const TerminalMenu = styled.div`
  width: 400px;
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
  background: var(--color-background-dark);
  width: 400px;
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
