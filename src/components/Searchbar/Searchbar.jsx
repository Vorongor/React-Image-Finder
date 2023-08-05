import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
  };

  return (
    <header className={style.searchbar}>
      <form className={style.form} onSubmit={handleSubmit}>
        <button type="submit" className={style.button}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={style.searchIcon}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 21L15 15" />
            <circle cx="10" cy="10" r="8" />
          </svg>
        </button>

        <input
          className={style.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
      </form>
    </header>
  );
};
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
