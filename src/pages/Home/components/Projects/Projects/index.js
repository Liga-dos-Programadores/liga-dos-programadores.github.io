import React from 'react';

import * as S from './styled';

export default function Projects() {
  const projectA = 'https://github.com/Liga-dos-Programadores/Project-A';

  return (
    <S.Link href={projectA} target="_blank" alt="Repositório do Project A">
      <S.Projecta />
    </S.Link>
  );
}
