import React from 'react';

import { RiRocket2Line } from 'react-icons/ri';
import { HiHashtag } from 'react-icons/hi';
import { FaRegCommentDots } from 'react-icons/fa';
import { BiBook } from 'react-icons/bi';
import { AiOutlineFlag } from 'react-icons/ai';

import Polygons from '@components/Polygons';
import * as S from './styled';

export default function SmallTerminal() {
  return (
    <S.TerminalContainer>
      <S.TerminalMenu>
        <Polygons />
      </S.TerminalMenu>
      <S.Screen>
        <S.Icons>
          <S.Icon>
            <RiRocket2Line size={35} />
          </S.Icon>
          <S.Icon>
            <HiHashtag size={35} />
          </S.Icon>
          <S.Icon>
            <FaRegCommentDots size={35} />
          </S.Icon>
          <S.Icon>
            <BiBook size={35} />
          </S.Icon>
          <S.Icon>
            <AiOutlineFlag size={35} />
          </S.Icon>
        </S.Icons>
        <S.ContentText>
          <S.IconSelected />
          <S.Text>
            Mesmo que o foco principal da comunidade seja as linguagens de
            programação, também tratamos de diversos outros assuntos
          </S.Text>
        </S.ContentText>
      </S.Screen>
    </S.TerminalContainer>
  );
}
