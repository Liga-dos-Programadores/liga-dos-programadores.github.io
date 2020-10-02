import React from "react";

import LigaLogo from "../../LigaLogo/styled";

import Menu from '../Menu/index';
import Burger from '../Burger/index';

import * as S from "./styled";

export default function Navbar() {
  return (
      <S.Header>
        <LigaLogo to="/" exact/>
  
        <Menu />
        <Burger />
      </S.Header>
  );
}