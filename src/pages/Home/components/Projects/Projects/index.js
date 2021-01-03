import React from "react";

import * as S from "./styled"

export default function Projects() {
  let projecta = "https://github.com/Liga-dos-Programadores/Project-A";
  
  return (
    <S.Link href={projecta} target="_blank" alt="Repositório do Project A">
      <S.Projecta/>
    </S.Link>
  );
}