import styled from 'styled-components';

export const TerminalContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TerminalMenu = styled.div`
  width: 551px;
  background-color: var(--color-terminal-menu);
  height: 30px;
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

export const Icons = styled.ul`
  background-color: #181D26;
  padding: 15px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  @media (max-width: 768px) {
    width: 25%;
    text-align: left;
  }
`;

export const Icon = styled.li`
  display: flex;
  margin: 25px 0;
  cursor: pointer;
  color: #ffffff;
  transition: all 150ms linear 0s;
  :hover {
    color: var(--color-blue);
    cursor: pointer;
  }
`;

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;

  > img {
    margin: 15px auto;
  }
`;

export const Text = styled.p`
  color: #fff;
  width: 80%;
  font-size: 15px;
  line-height: 20px;
`;

// export const IconSelected = styled.img.attrs({
//   src: logoIcon
// })`
//   height: 200px;
//   margin-bottom: 20px;
// `;
