import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as S from './styled';

function Menu({ open }) {
  return (
    <S.Nav open={open}>
      <ul>
        <Link to="/">
          <li>
            Início
          </li>
        </Link>
        <Link to="/comunity">
          <li>
            Comunidade
          </li>
        </Link>
        <Link to="/codiga">
          <li>
            Codiga
          </li>
        </Link>
      </ul>
    </S.Nav>
  );
}

Menu.propTypes = {
  open: PropTypes.bool.isRequired
};

export default Menu;
