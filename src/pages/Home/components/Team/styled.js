import styled from 'styled-components';

import { AiFillGithub as IGithub } from 'react-icons/ai';
import { MdWebAsset as IWebsite } from 'react-icons/md';
import { FaTwitter as ITwitter } from 'react-icons/fa';

export const TeamTitle = styled.h2`
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  margin-top: 100px;
  color: var(--color-white);
`;

export const TeamContainer = styled.div`
  display: flex;
  margin-top: 100px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContentTeam = styled.div``;

export const TilteTeam = styled.h2`
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  margin-top: 100px;
  color: var(--color-white);
`;

export const Teamates = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 38%);

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 100%);
  }
`;

export const Teammate = styled.div`
  height: 450px;
  width: 300px;
  margin-top: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  text-align: center;
  border-radius: 5px;
  background-color: var(--color-card-team);
`;

export const TeammateImage = styled.img`
  width: 200px;
  border-radius: 100px;
`;

export const TeammateName = styled.p`
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TeammateAbout = styled.button`
  font-size: 21px;
  font-weight: 500;
  color: var(--color-white);
  background-color: var(--color-blue);
  margin: 19px 0 0;
  padding: 16px 35px;
  text-decoration: none;
  border-radius: 5px;
  transition: all 150ms linear 0s;
  text-align: center;
  :hover {
    background-color: var(--color-light-blue);
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 82%;
  }
`;

export const TeammateUsername = styled.span`
  font-weight: 300;
  font-size: 12px;
  margin-top: 2px;
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
  width: 40px;
  height: 40px;
  color: #fff;
  margin: 0px 5px;
`;

export const WebsiteIcon = styled(IWebsite)`
  width: 40px;
  height: 40px;
  color: #fff;
  margin: 0px 5px;
`;

export const TwitterIcon = styled(ITwitter)`
  width: 40px;
  height: 40px;
  color: #fff;
  margin: 0px 5px;
`;

export const LinkA = styled.a`
  opacity: 0.85;
  &:hover {
    opacity: 1;
  }
`;
