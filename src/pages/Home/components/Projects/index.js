import React from 'react';

import Text from './Text';
import ProjectA from './ProjectA';

import * as S from './styled';

export default function Projects() {
  return (
    <>
      <S.ProjectsTitle>
        <S.TitleAlign>
          <S.Span>&lt;</S.Span>
          Nossos projetos
          <S.Span>&nbsp;/&gt;</S.Span>
        </S.TitleAlign>
      </S.ProjectsTitle>
      <S.ProjectsContainer>
        <Text />
        <ProjectA />
      </S.ProjectsContainer>
    </>
  );
}
