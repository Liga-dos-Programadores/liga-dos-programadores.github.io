import styled from 'styled-components';

export const ProjectsTitle = styled.h2`
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

export const TitleAlign = styled.h2`
  display: inline-box;
  display: -webkit-inline-box;
`;

export const Span = styled.div`
  color: var(--color-blue);
`;

export const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 100px;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 50px;
  }
`;
