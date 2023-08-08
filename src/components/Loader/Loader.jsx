import { Vortex } from 'react-loader-spinner';
import { LoderWrapper } from './Loader.styled';

const Loader = () => {
  return (
    <LoderWrapper>
      <Vortex width="300" color=" #c49dbf" />
    </LoderWrapper>
  );
};

export default Loader;
