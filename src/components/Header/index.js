import React from "react";

import LigaLogo from "../LigaLogo/styled";

import * as S from "./styled";

export default function Header(props) {
  return (
    <S.Container>
      <S.Header>
        <S.StyledLink to="/" exact>
          <LigaLogo />
        </S.StyledLink>

        <S.Nav>
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
                Codiga
              </S.StyledLink>
            </li>
          </ul>
        </S.Nav>
      </S.Header>
    </S.Container>
  );
}
