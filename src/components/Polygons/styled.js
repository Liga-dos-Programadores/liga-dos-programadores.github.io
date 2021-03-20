import styled from 'styled-components';

import polygonImage from '@assets/images/polygons.png';

const Icon = styled.img.attrs({ src: polygonImage, alt: 'Icons polygons' })`
  height: 14px;
  position: relative;
  top: 8px;
  left: 20px;
`;

export default Icon;
