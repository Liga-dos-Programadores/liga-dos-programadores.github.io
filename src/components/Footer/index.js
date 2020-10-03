import React from "react";

import LigaLogo from "../LigaLogo/index";
import SocialLinks from "../Footer/SocialLinks/index";

import * as S from "./styled";

export default function Footer() {
  return (
    <S.FooterContainer>
      <S.Up>
        <S.Logo>
          <LigaLogo to="/" exact />
          Liga dos Programadores
        </S.Logo>

        <SocialLinks />
      </S.Up>
      <S.Down>
        <S.Copyright>Copyright © 2020 Liga dos Programadores</S.Copyright>
      </S.Down>
    </S.FooterContainer>
  );
}
