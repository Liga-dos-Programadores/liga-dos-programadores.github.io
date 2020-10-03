import React from "react";

import Logo from "../../LigaLogo/index";

import Burger from '../Burger/index';

import * as S from "./styled";

export default function Navbar() {
  return (
      <S.Header>
        <Logo to="/" exact/>
        <Burger />
      </S.Header>
  );
}