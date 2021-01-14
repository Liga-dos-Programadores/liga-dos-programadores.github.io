import React from 'react';
import Typical from 'react-typical';

import TerminalIcons from '@components/Polygons';
import Text from './Text';

import * as S from './styled';

const terminals = [
  {
    color: '#7dddfd',
    steps: ['Hello World', 900, 'npm install liga', 1000]
  },
  {
    color: '#80d697',
    steps: ['python main.py', 1000, 'go mod init liga', 900]
  },
  {
    color: '#f6d27c',
    steps: ['gcc -o main.c liga', 5000, 'npm install liga', 800]
  }
];

export default function Hero() {
  return (
    <S.HeroContainer>
      <Text />
      <S.TerminalContainer>
        {terminals.map((t) => (
          <S.Terminal key={t.color}>
            <S.TerminalMenu>
              <TerminalIcons />
            </S.TerminalMenu>
            <S.Screen style={{ color: t.color }}>
              <span className="prompt">$</span>
              <span className="codeblock" />
              <Typical loop={Infinity} wrapper="b" steps={t.steps} />
            </S.Screen>
          </S.Terminal>
        ))}
      </S.TerminalContainer>
    </S.HeroContainer>
  );
}
