import React from "react";

import { FaGithub, FaTwitter, FaDiscord } from 'react-icons/fa';

import * as S from "./styled";

export default function SocialMedia() {
  let githuburl = "https://github.com/Liga-dos-Programadores";
  let twitterurl = "https://twitter.com/LDProgramadores";
  let discordurl = "https://discord.com/invite/fmnxSYR";

  return (
    <S.Social>
      <ul>
        <li>
          <S.Link href={githuburl} target="_blank" alt="Github Liga">
            <FaGithub size="36px"/>
          </S.Link>
        </li>

        <li>
            <S.Link href={twitterurl} target="_blank" alt="Twitter Liga">
              <FaTwitter size="36px"/>
            </S.Link>
        </li>

        <li>
          <S.Link href={discordurl} target="_blank" alt="Discord Liga">
            <FaDiscord size="36px"/>
          </S.Link>
        </li>
      </ul>
    </S.Social>
  );
}
