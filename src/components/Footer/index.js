import React from 'react';

import LigaLogo from '../Logo';
import SocialMedia from './SocialMedia';

import * as S from './styled';

export default function Footer() {
  return (
    <S.FooterContainer>
      <S.Up>
        <S.Logo>
          <LigaLogo to="/" exact />
          Liga dos Programadores
        </S.Logo>

        <SocialMedia />
      </S.Up>
      <S.Down>
        <S.Copyright>Copyright © 2021 Liga dos Programadores</S.Copyright>
      </S.Down>
    </S.FooterContainer>
  );
}
