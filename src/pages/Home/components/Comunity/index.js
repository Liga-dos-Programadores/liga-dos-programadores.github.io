import React from 'react';

import BigTerminal from './BigTerminal';
import Text from './Text';

import * as S from './styled';

// import { ComunityTitle, ComunityContainer } from './styled';

export default function Features() {
  return (
    <>
      <S.ComunityTitle>A comunidade</S.ComunityTitle>
      <S.ComunityContainer>
        <BigTerminal />
        <Text />
      </S.ComunityContainer>
    </>
  );
}
