import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { SearchInput, SearchButton, SearchForm } from './SearchForm.styled';

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');
  const [value, setValue] = useState('');

  useEffect(() => {
    setSearchText(value);
  }, [value]);

  const handleChange = e => setValue(e.target.value.toLowerCase());

  const handleSubmit = e => {
    e.preventDefault();
    if (!searchText.trim()) {
      alert('Fill in the request');
      return;
    }
    setSearchText(searchText.trim());
    onSearch(searchText.trim());
    setValue('');
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          name="searchText"
          type="text"
          autoComplete="on"
          autoFocus
          placeholder="Search movies"
          value={value}
          onChange={handleChange}
        />
        <SearchButton type="submit">
          <span>Search</span>
        </SearchButton>
      </SearchForm>
    </>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
