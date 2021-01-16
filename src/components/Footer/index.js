import React from 'react';

import LigaLogo from '@components/Logo';
import SocialMedia from './SocialMedia';

import * as S from './styled';

export default function Footer() {
  const firstYear = 2018;
  const actualYear = new Date().getFullYear();
  const copyRightString = `Copyright © ${firstYear}-${actualYear} Liga dos Programadores`;

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
        <S.Copyright>{copyRightString}</S.Copyright>
      </S.Down>
    </S.FooterContainer>
  );
}
