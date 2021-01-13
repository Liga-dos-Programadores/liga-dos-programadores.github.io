import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

function Menu({ open }) {
  return (
    <S.Nav open={open}>
      <ul>
        <li>
          <S.StyledLink activeClassName="is-active" to="/" exact>
            Início
          </S.StyledLink>
        </li>

        <li>
          <S.StyledLink activeClassName="is-active" to="/blog" exact>
            Blog
          </S.StyledLink>
        </li>

        <li>
          <S.StyledLink activeClassName="is-active" to="/comunidade" exact>
            Comunidade
          </S.StyledLink>
        </li>

        <li>
          <S.StyledLink activeClassName="is-active" to="/codiga" exact>
            LigaCode
          </S.StyledLink>
        </li>
      </ul>
    </S.Nav>
  );
}

Menu.propTypes = {
  open: PropTypes.bool.isRequired
};

// TODO nao sei talvez false
// Menu.defaultProps = {
//   open: true
// };

export default Menu;
