import styled from 'styled-components';

import logoImg from '@assets/images/logos/liga-logo.png';

const Logo = styled.img.attrs({ src: logoImg, alt: 'Logo da Liga' })`
  height: 35px;

  @media (max-width: 768px) {
    height: 30px;
  }
`;

export default Logo;
