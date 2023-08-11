import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BackButton } from './BackButton.styled';

const GoBackButton = () => {
  const location = useLocation();

  return (
    <Link to={location.state?.from || '/movies'}>
      <BackButton type="button">Go back</BackButton>
    </Link>
  );
};

export default GoBackButton;
