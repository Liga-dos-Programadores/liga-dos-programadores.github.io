import React from 'react';

import Logo from '../../Logo';
import Burger from '../Burger';

import * as S from './styled';

export default function Navbar() {
  return (
    <S.Header>
      <Logo to="/" exact />
      <Burger />
    </S.Header>
  );
}
