import React from "react";

import Text from './Text';
import Projects from './Projects';

import * as S from './styled';

export default function Features() {
  return (
    <>
      <S.ProjectsTitle>Nossos projetos</S.ProjectsTitle>
      <S.ProjectsContainer>
        <Text />
        <Projects />
      </S.ProjectsContainer>
    </>
    
  );
}
