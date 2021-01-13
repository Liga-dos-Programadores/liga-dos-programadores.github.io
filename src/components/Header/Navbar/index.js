import React from 'react';

import Logo from '@components/Logo';
import Burger from '@components/Header/Burger';

import * as S from './styled';

export default function Navbar() {
  return (
    <S.Header>
      <Logo to="/" exact />
      <Burger />
    </S.Header>
  );
}
