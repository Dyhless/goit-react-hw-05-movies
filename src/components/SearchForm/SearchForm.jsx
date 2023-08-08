import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SearchForm, SearchButton, SearchInput } from './SearchForm.styled';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = event => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <SearchForm onSubmit={handleSearch}>
      <SearchInput
        type="text"
        value={query}
        onChange={event => setQuery(event.target.value)}
        placeholder="Search for movies..."
      />
      <SearchButton type="submit">Search</SearchButton>
    </SearchForm>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
