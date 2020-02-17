import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className='search'
    id='search'
    type='search'
    onChange={handleChange}
    placeholder={placeholder}
  />
);
