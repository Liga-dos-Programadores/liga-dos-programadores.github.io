import styled from 'styled-components';

export const CommunityTitle = styled.h2`
  text-align: center;
  font-size: 5em;
  font-weight: 600;
  margin-bottom: 100px;
  color: var(--color-white);

  @media (max-width: 768px) {
    margin-bottom: 50px;
  }
`;

export const TitleAlign = styled.h2`
  display: flex;
`;

export const Span = styled.div`
  color: var(--color-blue);
`;

export const CommunityContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;
