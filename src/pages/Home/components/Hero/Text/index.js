import React from 'react';

import { FiChevronRight } from 'react-icons/fi';

import * as S from './styled';

export default function Text() {
  const discordUrl = 'https://discord.com/invite/fmnxSYR';

  return (
    <S.TextContainer>
      <S.Title>
        Uma comunidade onde todos podem compartilhar seus conhecimentos.
      </S.Title>
      <S.Description>
        Seja você iniciante ou experiente em programação, entusiasta ou
        curioso(a). Essa comunidade é para você!
      </S.Description>
      <S.Button
        href={discordUrl}
        target="_blank"
        rel="noopener"
        alt="Discord da Liga dos Programadores"
      >
        Quero Fazer parte
        <FiChevronRight size={35} />
      </S.Button>
    </S.TextContainer>
  );
}
