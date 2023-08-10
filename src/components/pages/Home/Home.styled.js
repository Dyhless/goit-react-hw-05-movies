import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Title = styled.h1`
  @media screen and (max-width: 475.99px) {
    font-size: 36px;
  }
  margin-top: 90px;
  text-align: center;
  font-size: 46px;
  color: #4569FF;
`;

export const MovieList = styled.ul`
  @media screen and (max-width: 475.99px) {
    display: flex;
    flex-direction: column;
    gap: 28px;
    align-items: center;
  }
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 28px;
  margin-top: 56px;
  margin-bottom: 20px;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const MovieLink = styled(NavLink)`
  width: 200px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: black;
  text-decoration: none;
  transition: transform 250ms linear, box-shadow 250ms linear;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.4);
  }
`;

export const MoviePoster = styled.img`
  width: 100%;
  height: auto;
  max-height: 70%;
  object-fit: contain;
`;

export const MovieTitle = styled.div`
  font-size: 16px;
  text-align: center;
  max-height: 44px; 
  overflow: hidden;
  white-space: nowrap; 
  text-overflow: ellipsis;
  ${({ isLongTitle }) => isLongTitle && `
    white-space: normal;
  `}
`;
