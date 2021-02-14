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
          <S.Link
            href={gitHubUrl}
            target="_blank"
            rel="noopener"
            alt="Github da Liga dos Programadores"
          >
            <FaGithub size="30px" />
          </S.Link>
        </li>

        <li>
          <S.Link
            href={twitterUrl}
            target="_blank"
            rel="noopener"
            alt="Twitter da Liga dos Programadores"
          >
            <FaTwitter size="30px" />
          </S.Link>
        </li>

        <li>
          <S.Link
            href={discordUrl}
            target="_blank"
            rel="noopener"
            alt="Discord da Liga dos Programadores"
          >
            <FaDiscord size="30px" />
          </S.Link>
        </li>
      </ul>
    </S.Social>
  );
}
