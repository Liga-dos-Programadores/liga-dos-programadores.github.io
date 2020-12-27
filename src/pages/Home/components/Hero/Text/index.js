import React from "react";

import * as S from "./styled";

export default function Text() {
  return (
    <S.TextContainer>
      <S.Title>
          Uma comunidade onde todos podem compartilhar seus conhecimentos.
      </S.Title>
      <S.Description>
        Seja você iniciante ou experiente em programação, entusiasta ou
        curioso(a). Essa comunidade é para você!
      </S.Description>
      <S.Button>Quero Fazer parte</S.Button>
    </S.TextContainer>
  );
}