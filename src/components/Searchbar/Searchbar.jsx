import React from 'react';
import PropTypes from 'prop-types';
import style from './Searchbar.module.css';

const Searchbar = ({ callback }) => {
  return (
    <header className={style.searchbar}>
      <form className={style.form} onSubmit={e => callback(e)}>
        <button type="submit" className={style.button}>
          <span className={style.buttonLabel}>Search</span>
        </button>

        <input
          name="text"
          className={style.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;
