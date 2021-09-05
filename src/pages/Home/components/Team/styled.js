import styled from 'styled-components';

import { AiFillGithub as IGithub } from 'react-icons/ai';
import { MdWebAsset as IWebsite } from 'react-icons/md';
import { FaTwitter as ITwitter } from 'react-icons/fa';

export const ContentTeam = styled.div``;

export const TeamTitle = styled.h2`
  text-align: center;
  font-size: 4em;
  font-weight: 600;
  margin-bottom: 100px;
  margin-top: 100px;
  color: var(--color-white);

  @media (max-width: 768px) {
    margin-bottom: 50px;
  }
`;

export const TitleAlign = styled.div`
  display: inline-box;
  display: -webkit-inline-box;
`;

export const Span = styled.div`
  color: var(--color-blue);
`;

export const TeamContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Teamates = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 26.5%);

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Teammate = styled.div`
  height: 350px;
  width: 250px;
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  text-align: center;
  border-radius: 8px;
  padding: 20px;
  background-color: var(--color-card-team);
`;

export const TeammateImage = styled.img`
  width: 165px;
  border-radius: 100px;
`;

export const TeammateName = styled.p`
  font-weight: 400;
  margin-top: 10px;
  font-size: 13px;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.6;
`;

export const TeammateUsername = styled.span`
  font-weight: 300;
  font-weight: bold;
  font-size: 17px;
`;

export const IconsGroup = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

export const GithubIcon = styled(IGithub)`
  width: 30px;
  height: 30px;
  margin: 0px 5px;
  color: var(--color-white);
  transition: all 150ms linear 0s;
  :hover {
    color: var(--color-blue);
    cursor: pointer;
  }
`;

export const WebsiteIcon = styled(IWebsite)`
  width: 30px;
  height: 30px;
  margin: 0px 5px;
  color: var(--color-white);
  transition: all 150ms linear 0s;
  :hover {
    color: var(--color-blue);
    cursor: pointer;
  }
`;

export const TwitterIcon = styled(ITwitter)`
  width: 30px;
  height: 30px;
  margin: 0px 5px;
  color: var(--color-white);
  transition: all 150ms linear 0s;
  :hover {
    color: var(--color-blue);
    cursor: pointer;
  }
`;

export const LinkA = styled.a`
  opacity: 0.85;
  &:hover {
    opacity: 1;
  }
`;
