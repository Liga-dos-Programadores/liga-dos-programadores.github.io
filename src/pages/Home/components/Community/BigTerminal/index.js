import React from 'react';

import { RiRocket2Line } from 'react-icons/ri';
import { HiHashtag } from 'react-icons/hi';
import { FaRegCommentDots } from 'react-icons/fa';
import { BiBook } from 'react-icons/bi';
import { AiOutlineFlag } from 'react-icons/ai';

import Polygons from '@components/Polygons';

import icon1 from '@assets/images/BigTerminal/icon1.png';
import icon2 from '@assets/images/BigTerminal/icon2.png';
import icon3 from '@assets/images/BigTerminal/icon3.png';
import icon4 from '@assets/images/BigTerminal/icon4.png';
import icon5 from '@assets/images/BigTerminal/icon5.png';

import * as S from './styled';

export default function SmallTerminal() {
  const [iconSelected, setIconSelected] = React.useState();
  const [textSelected, setTextSelected] = React.useState();

  function changeContent(index) {
    const icons = [icon1, icon2, icon3, icon4, icon5];
    const texts = ['Se você tem interesse em começar ou já está começando na jornada de ser um programador ou uma programadora nunca é tarde para começar, não desista dos seus sonhos!', 'texto2', 'texto3', 'texto4', 'texto5'];
    setIconSelected(icons[index]);
    setTextSelected(texts[index]);
  }

  return (
    <S.TerminalContainer>
      <S.TerminalMenu>
        <Polygons />
      </S.TerminalMenu>
      <S.Screen>
        <S.Icons>
          <S.Icon>
            <RiRocket2Line onClick={() => changeContent(0)} size={35} />
          </S.Icon>
          <S.Icon>
            <HiHashtag onClick={() => changeContent(1)} size={35} />
          </S.Icon>
          <S.Icon>
            <FaRegCommentDots onClick={() => changeContent(2)} size={35} />
          </S.Icon>
          <S.Icon>
            <BiBook onClick={() => changeContent(3)} size={35} />
          </S.Icon>
          <S.Icon>
            <AiOutlineFlag onClick={() => changeContent(4)} size={35} />
          </S.Icon>
        </S.Icons>

        <S.ContentText>
          <img src={iconSelected} width="150px" alt="Imagem" />
          <S.Text>{textSelected}</S.Text>
        </S.ContentText>
      </S.Screen>
    </S.TerminalContainer>
  );
}
