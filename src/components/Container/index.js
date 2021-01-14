import React from 'react';
import PropTypes from 'prop-types';

import ContainerWrapper from './styled';

function Container({ children }) {
  return <ContainerWrapper>{children}</ContainerWrapper>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired
};

export default Container;
