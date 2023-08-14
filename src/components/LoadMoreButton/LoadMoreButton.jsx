import React from 'react';
import { LoadMoreButtonStyled } from './LoadMoreButton.styled';

const LoadMoreButton = ({ onClick }) => {
  return (
    <LoadMoreButtonStyled type="button" onClick={onClick}>
      Load more
    </LoadMoreButtonStyled>
  );
};

export default LoadMoreButton;
