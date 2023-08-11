import styled from 'styled-components';

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