import React from 'react';
import style from './Button.module.css'

const Button = ({ onClick, show }) => {
  return show ? (
    <button type="button" className={style.btn} onClick={onClick}>
      Load more
    </button>
  ) : null;
};

export default Button;
