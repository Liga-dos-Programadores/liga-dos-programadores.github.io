import styled from "styled-components";


export const FooterContainer = styled.footer`
  padding: 40px 0;
  display: flex;
  flex-direction: column;
 
  color: var(--color-white);
  background: var(--color-background-dark);

`;

export const Up = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  opacity: .4;
  font-weight: 500;
`

export const Down = styled.div`
  display: flex;
  justify-content: center;
`;

export const Copyright = styled.div`
  opacity: .4;
  font-weight: 500;
  
`;

export const StyledLink = styled.a`
    text-decoration: none;
    color: var(--white);
    &.is-active {
        color: var(--yellow);
    }
`;
