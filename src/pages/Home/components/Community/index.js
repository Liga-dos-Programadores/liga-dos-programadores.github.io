import React from 'react';

import BigTerminal from './BigTerminal';
import Text from './Text';

import * as S from './styled';

export default function Features() {
  return (
    <>
      <S.CommunityTitle>A comunidade</S.CommunityTitle>
      <S.CommunityContainer>
        <BigTerminal />
        <Text />
      </S.CommunityContainer>
    </>
  );
}
