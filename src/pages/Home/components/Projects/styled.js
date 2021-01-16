import styled from 'styled-components';

export const ProjectsTitle = styled.h2`
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  margin-top: 100px;
  color: var(--color-white);
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
