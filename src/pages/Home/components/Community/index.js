import React from 'react';
import Iframe from 'react-iframe';

import BigTerminal from './BigTerminal';
import Text from './Text';

import * as S from './styled';

export default function Features() {
  return (
    <>
      <S.CommunityTitle>
        <S.TitleAlign>
          <S.Span>&lt;</S.Span>
          A comunidade
          <S.Span>/&gt;</S.Span>
        </S.TitleAlign>
      </S.CommunityTitle>
      <S.CommunityContainer>
        <BigTerminal />
        <Text />
      </S.CommunityContainer>
    </>
  );
}
