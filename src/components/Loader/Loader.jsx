import React from 'react';
import { Vortex } from 'react-loader-spinner';
import { LoaderWrapper, LoaderContainer } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderWrapper>
      <LoaderContainer>
        <Vortex width={300} color="#c49dbf" />
      </LoaderContainer>
    </LoaderWrapper>
  );
};

export default Loader;
