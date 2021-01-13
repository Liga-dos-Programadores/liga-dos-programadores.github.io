import React from 'react';
import Typical from 'react-typical';

import TerminalIcons from '../../../../../components/Polygons';

import * as S from './styled';

export default function SmallTerminal() {
  return (
    <S.Terminal>
      <S.TerminalMenu>
        <TerminalIcons />
      </S.TerminalMenu>
      <S.Screen></S.Screen>
    </S.Terminal>
  );
}
