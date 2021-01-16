import React from 'react';

import Text from './Text';
import ProjectA from './ProjectA';

import * as S from './styled';

export default function Features() {
  return (
    <>
      <S.ProjectsTitle>Nossos projetos</S.ProjectsTitle>
      <S.ProjectsContainer>
        <Text />
        <ProjectA />
      </S.ProjectsContainer>
    </>
  );
}
