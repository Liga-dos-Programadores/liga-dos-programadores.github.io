import React from "react";

import Container from '../Container';
import Text from './Text';
import SmallTerminal from './Terminal/SmallTerminal';


import * as S from "./styled";

export default function Hero() {
  return (
     <Container>
       <Text />
       <S.Terminal>
        <SmallTerminal />
        <SmallTerminal />
        <SmallTerminal />
       </S.Terminal>   
     </Container>
  );
}