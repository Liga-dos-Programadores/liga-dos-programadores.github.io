import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 40px 0;
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  color: var(--color-white);
  background: var(--color-background-dark);

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

export const FooterContent = styled.div`
  width: 90%;
  max-width: 1230px;
  margin: 0 auto;
`;

export const Up = styled.div`
  display: flex;
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
`;

export const LogoText = styled.div`
  font-size: 16px;
  margin-left: 10px;
  font-weight: 400;
`;

export const Down = styled.div`
  display: flex;
  justify-content: center;
`;

export const Copyright = styled.div`
  opacity: 0.4;
  font-weight: 400;
  margin-top: 20px;
  font-size: 16px;
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: var(--white);
  &.is-active {
    color: var(--yellow);
  }
`;
