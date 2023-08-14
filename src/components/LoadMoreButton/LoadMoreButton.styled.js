import styled from 'styled-components';

export const LoadMoreButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  padding: 14px;
  margin-left: 50%;
  transform: translateX(-50%);
  min-width: 60px;
  border-radius: 20px;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #120083;
  box-shadow: inset 0 3px 4px #ffffff, inset 0 -3px 4px #FAAD6F;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  margin-bottom: 28px;
  &:hover,
  &:focus {
    box-shadow: 0 3px 4px #AEE6E2, 0 -3px 4px #ffffff;
    color: #00BFFF;
  }
`;
