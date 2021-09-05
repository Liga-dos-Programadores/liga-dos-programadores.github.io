import React, { useEffect, useState } from 'react';
import axios from 'axios';

import * as S from './styled';

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
    <S.ContentTeam>
      <S.TeamTitle>
        <S.TitleAlign>
          <S.Span>&lt;</S.Span>
          Nossa Equipe
          <S.Span>&nbsp;/&gt;</S.Span>
        </S.TitleAlign>
      </S.TeamTitle>
      <S.Teamates>
        {infoTeam.map((index) => (
          <S.Teammate>
            <S.TeammateImage src={index.avatar} alt={index.username} />
            <S.TeammateUsername>
              {index.name}
              <S.TeammateName>{index.username}</S.TeammateName>
            </S.TeammateUsername>
            <S.IconsGroup>
              <S.LinkA
                href={`https://github.com/${index.username}`}
                target="_blank"
              >
                <S.GithubIcon />
              </S.LinkA>

              {index.website ? (
                <S.LinkA href={index.website} target="_blank">
                  <S.WebsiteIcon />
                </S.LinkA>
              ) : (
                <></>
              )}

              {index.twitter ? (
                <S.LinkA
                  href={`https://twitter.com/${index.twitter}`}
                  target="_blank"
                >
                  <S.TwitterIcon />
                </S.LinkA>
              ) : (
                <></>
              )}
            </S.IconsGroup>
          </S.Teammate>
        ))}
      </S.Teamates>
    </S.ContentTeam>
  );
}
