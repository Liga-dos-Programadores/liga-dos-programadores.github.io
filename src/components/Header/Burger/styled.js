import styled from 'styled-components';

const BurgerComponent = styled.div`
  width: 2.3rem;
  height: 2rem;
  top: 25px;
  right: 20px;
  padding: 0;
  z-index: 30;
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2.3rem;
    height: 2px;
    background: var(--color-white);
    border: 2px solid var(--color-white);
    border-radius: 10px;
    transition-duration: 0.3s;
    
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg) translate(0, 5px) ' : 'rotate(0)'}; }

    &:nth-child(2) {
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg) translate(5px, -10px)' : 'rotate(0)'};
    }
  }
`;

export default BurgerComponent;
