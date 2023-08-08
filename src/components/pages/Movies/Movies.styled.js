import styled from 'styled-components';

export const MoviesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: 75px;

  input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 10px;
  }

  button {
    padding: 10px 20px;
    background-color: #c49dbf;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const MovieCard = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  img {
    max-width: 100%;
    height: auto;
  }

  h3 {
    margin: 10px 0;
    font-size: 16px;
    font-weight: bold;
  }

  p {
    margin: 0;
    font-size: 14px;
    color: #666;
  }
`;
