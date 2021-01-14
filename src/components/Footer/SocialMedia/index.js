import React from 'react';

import { FaGithub, FaTwitter, FaDiscord } from 'react-icons/fa';

import * as S from './styled';

export default function SocialMedia() {
  const gitHubUrl = 'https://github.com/Liga-dos-Programadores';
  const twitterUrl = 'https://twitter.com/LDProgramadores';
  const discordUrl = 'https://discord.com/invite/fmnxSYR';

  return (
    <S.Social>
      <ul>
        <li>
          <S.Link href={gitHubUrl} target="_blank" alt="Github Liga">
            <FaGithub size="36px" />
          </S.Link>
        </li>

        <li>
          <S.Link href={twitterUrl} target="_blank" alt="Twitter Liga">
            <FaTwitter size="36px" />
          </S.Link>
        </li>

        <li>
          <S.Link href={discordUrl} target="_blank" alt="Discord Liga">
            <FaDiscord size="36px" />
          </S.Link>
        </li>
      </ul>
    </S.Social>
  );
}
