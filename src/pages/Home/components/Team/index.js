import React, { useEffect, useState } from 'react';
import axios from 'axios';

import {
  ContentTeam,
  TilteTeam,
  Teamates,
  Teammate,
  TeammateImage,
  TeammateName,
  TeammateAbout,
  TeammateUsername,
  IconsGroup,
  GithubIcon,
  LinkA,
  WebsiteIcon,
  TwitterIcon
} from './styled';

// import { AiFillGithub } from 'react-icons/ai';

export default function Team() {
  // eslint-disable-next-line prefer-const
  const [infoTeam, setInfoTeam] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://api.github.com/orgs/Liga-dos-Programadores/members'
    }).then((response) => {
      Promise.all(
        response.data.map(
          ({ url }) =>
            axios({
              method: 'get',
              url
            }).then(({ data }) => ({
              name: data.name,
              avatar: data.avatar_url,
              website: data.blog,
              twitter: data.twitter_username,
              email: data.email,
              username: data.login
            }))
          // eslint-disable-next-line function-paren-newline
        )
      ).then((teammates) => {
        console.log(teammates);
        setInfoTeam(teammates);
      });
    });
  }, []);

  return (
    <ContentTeam>
      <TilteTeam>Nossa Equipe</TilteTeam>
      <Teamates>
        {infoTeam.map((index) => (
          <Teammate>
            <TeammateImage src={index.avatar} alt={index.username} />
            <TeammateName>
              {index.name}
              <TeammateUsername>{index.username}</TeammateUsername>
            </TeammateName>
            <IconsGroup>
              <LinkA
                href={`https://github.com/${index.username}`}
                target="_blank"
              >
                <GithubIcon />
              </LinkA>

              {index.website ? (
                <LinkA href={index.website} target="_blank">
                  <WebsiteIcon />
                </LinkA>
              ) : (
                <></>
              )}

              {index.twitter ? (
                <LinkA
                  href={`https://twitter.com/${index.twitter}`}
                  target="_blank"
                >
                  <TwitterIcon />
                </LinkA>
              ) : (
                <></>
              )}
            </IconsGroup>
          </Teammate>
        ))}
      </Teamates>
    </ContentTeam>
  );
}
