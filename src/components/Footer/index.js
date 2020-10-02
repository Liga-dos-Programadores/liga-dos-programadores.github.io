import React from "react";

import LigaLogo from "../LigaLogo/styled";
import SocialLinks from "../Footer/SocialLinks/index";

import * as S from "./styled";

export default function Footer() {
  return (
    <S.Ft>
      <S.Up>
        <LigaLogo to="/" exact />

        <SocialLinks />

        <S.Copyright>Copyright © 2020 Liga dos Programadores</S.Copyright>
      </S.Up>
    </S.Ft>
  );
}
