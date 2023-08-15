import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BackLink = styled(Link)`
  text-decoration: none;
`;

export const BackButton = styled.button`
  text-decoration: none;
  margin: 90px 16px 20px 32px;
//   display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  padding: 10px;
  border-radius: 16px;
  border: none;
  cursor: pointer;
  color: #120083;
  font-size: 20px;
  box-shadow: inset 0 3px 4px #ffffff, inset 0 -3px 4px #FAAD6F;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    box-shadow: 0 3px 4px #AEE6E2, 0 -3px 4px #ffffff;
    color: #00BFFF;
  }
`;

export const Container = styled.div`
  @media screen and (max-width: 767.99px) {
    display: block;
  }
  display: flex;
  margin: 0 20px;
  gap: 24px;
`;

export const Img = styled.img`
  @media screen and (max-width: 767.99px) {
    width: 250px;
  }
  border-radius: 12px;
`;

export const List = styled.ul`
  display: flex;
  gap: 12px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const SubTitle = styled.h2`
  margin-left: 20px;
`;

export const AddInfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  list-style: none;
  margin-left: 20px;
  padding: 0;
`;

export const LinkInfo = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  color: #120083;

  &:hover {
    color: #c49dbf;
  }
`;

export const Hr = styled.hr`
  border-color: #A5A5A5;
`;
