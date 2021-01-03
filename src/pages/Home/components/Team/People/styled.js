import styled from 'styled-components';

import projecta from '../../../../../assets/images/project-a.png';

export const Projecta = styled.img.attrs({ src: projecta , alt: 'Logo do Project A' })`
  height: 130px;
`;

export const Link = styled.a`
  transition: all 150ms linear 0s;
  :hover {
    border: var(--color-blue);
    border-radius: 8px;
    cursor: pointer;
  }
`;