import React from 'react';
import { Vortex } from 'react-loader-spinner';
import style from './Loader.module.css'

const MyLoader = () => {
  return (
    <div className={style.loader}>
      <Vortex className={style.vort} type="TailSpin" color="#00BFFF" height={300} width={300} />
    </div>
  );
};

export default MyLoader;
