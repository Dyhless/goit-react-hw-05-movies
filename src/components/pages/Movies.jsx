import React from 'react';
import { Link } from 'react-router-dom';

const Movies = () => {
  // useEffect(() => {
  //   //HTTP
  // }, []);

  return (
    <div>
      {[
        'mov1',
        'mov2',
        'mov3',
        'mov4',
        'mov5',
        'mov6',
        'mov7',
        'mov8',
        'mov9',
        'mov10',
        'mov11',
        'mov12',
        'mov13',
        'mov14',
        'mov15',
        'mov16',
        'mov17',
        'mov18',
        'mov19',
        'mov20',
      ].map(mov => {
        return (
          <Link key={mov} to={`${mov}`}>
            {mov}
          </Link>
        );
      })}
    </div>
  );
};

export default Movies;
