import React, { useEffect } from 'react';
import style from './Modal.module.css'

const Modal = ({ image, onClose }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={style.overlay} onClick={handleClick}>
      <div className={style.modal}>
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Modal;
