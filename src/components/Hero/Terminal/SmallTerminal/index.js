import React from "react";

import TerminalIcon from '../TerminalIcon';

import * as S from "./styled";

export default function SmallTerminal() {
  return (
    <S.Terminal>
      <S.TerminalMenu>
        <TerminalIcon />
      </S.TerminalMenu>
      <S.Screen>
        <span className="prompt">$</span><span className="codeblock"></span>
        <S.Underscore id="console">&#95;</S.Underscore>
      </S.Screen>
    </S.Terminal>
  );
}