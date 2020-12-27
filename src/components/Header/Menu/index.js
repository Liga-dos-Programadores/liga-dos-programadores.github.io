import React from "react";

import * as S from "./styled";

export default function Menu ({ open }) {
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