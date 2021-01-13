import React from 'react';
import Typical from 'react-typical';

import TerminalIcons from '../../../../components/Polygons';
import Text from './Text';

import './terminal.css';

import * as S from './styled';

export default function Hero() {
  return (
    <S.HeroContainer>
      <Text />
      <S.TerminalContainer>
        <S.Terminal>
          <S.TerminalMenu>
            <TerminalIcons />
          </S.TerminalMenu>
          <S.Screen style={{ color: '#7dddfd' }}>
            <span className="prompt">$</span>
            <span className="codeblock" />
            <Typical
              loop={Infinity}
              wrapper="b"
              steps={['Hello World', 900, 'npm install liga', 1000]}
            />
          </S.Screen>
        </S.Terminal>
        <S.Terminal>
          <S.TerminalMenu>
            <TerminalIcons />
          </S.TerminalMenu>
          <S.Screen style={{ color: '#80d697' }}>
            <Typical
              loop={Infinity}
              wrapper="b"
              steps={['python main.py', 1000, 'go mod init liga', 900]}
            />
          </S.Screen>
        </S.Terminal>
        <S.Terminal>
          <S.TerminalMenu>
            <TerminalIcons />
          </S.TerminalMenu>
          <S.Screen style={{ color: '#f6d27c' }}>
            <Typical
              loop={Infinity}
              wrapper="b"
              steps={['gcc -o main.c liga', 5000, 'npm install liga', 800]}
            />
          </S.Screen>
        </S.Terminal>
      </S.TerminalContainer>
    </S.HeroContainer>
  );
}
