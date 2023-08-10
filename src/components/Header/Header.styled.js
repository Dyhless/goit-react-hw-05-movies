import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const commonLinkStyles = `
  display: inline-block;
  text-decoration: none;
  padding: 14px;
  font-weight: 600;
  font-size: 22px;
  color: #FF6500;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #00E6FA;
  }
`;

export const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  padding-top: 6px;
  padding-bottom: 6px;
  background-color: rgba(0, 0, 0, 0.7);
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.7);
  z-index: 10;
`;

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 30px;
`;

export const Link = styled(NavLink)`
  ${commonLinkStyles}
`;
