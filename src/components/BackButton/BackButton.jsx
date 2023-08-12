import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BackButton } from './BackButton.styled';

const GoBackButton = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from || '/movies');

  return (
    <Link to={backLinkLocationRef.current}>
      <BackButton type="button">Go back</BackButton>
    </Link>
  );
};

export default GoBackButton;
