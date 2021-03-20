import styled from 'styled-components';

import logoImg from '@assets/images/logos/liga-logo.png';

const Logo = styled.img.attrs({ src: logoImg, alt: 'Logo da Liga' })`
  height: 40px;
  margin-right: 15px;
`;

export default Logo;
