import styled from 'styled-components';

import projectA from '../../../../../assets/images/project-a.png';

export const Projecta = styled.img.attrs({
  src: projectA,
  alt: 'Logo do Project A'
})`
  height: 130px;
  transition: all 200ms linear 0s;
  :hover {
    border: 2px solid var(--color-blue);
    border-radius: 5px;
    cursor: pointer;
  }
`;

export const Link = styled.a`
  :hover {
    cursor: pointer;
  }
`;
