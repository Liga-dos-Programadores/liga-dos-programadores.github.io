import React from "react";

import LigaLogo from "../../LigaLogo/styled";

import Burger from '../Burger/index';

import * as S from "./styled";

export default function Navbar() {
  return (
      <S.Header>
        <LigaLogo to="/" exact/>
        <Burger />
      </S.Header>
  );
}