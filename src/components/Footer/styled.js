import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 40px 220px;
  display: flex;
  flex-direction: column;
  color: var(--color-white);
  background: var(--color-background-dark);

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

export const Up = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  opacity: 0.4;
  font-weight: 500;
`;

export const Down = styled.div`
  display: flex;
  justify-content: center;
`;

export const Copyright = styled.div`
  opacity: 0.4;
  font-weight: 500;
  margin-top: 20px;
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: var(--white);
  &.is-active {
    color: var(--yellow);
  }
`;
