import React from 'react';

import People from './People';

import * as S from './styled';

export default function Features() {
  return (
    <>
      <S.TeamTitle>Nossa equipe</S.TeamTitle>
      <S.TeamContainer>
        <People />
      </S.TeamContainer>
    </>
  );
}
