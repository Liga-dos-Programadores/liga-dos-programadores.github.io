import React from 'react';

import Polygons from '@components/Polygons';

import * as S from './styled';

export default function SmallTerminal() {
  return (
    <S.Terminal>
      <S.TerminalMenu>
        <Polygons />
      </S.TerminalMenu>
      <S.Screen />
    </S.Terminal>
  );
}
