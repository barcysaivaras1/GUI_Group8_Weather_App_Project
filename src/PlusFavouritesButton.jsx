import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import "./PlusButtonStyle.css"

const PlusFavouritesButton = () => {
  const navigate = useNavigate();
  const textWrapperRef = useRef(null);

  useEffect(() => {
    textWrapperRef.current = document.querySelector('.text-wrapper-2');
  }, []);

  const handleClick = () => {
    const textWrapper = textWrapperRef.current;
    if (textWrapper) {
      const textWrapperInfo = textWrapper.textContent;
      const newSearchParams = new URLSearchParams();
      newSearchParams.set('info', textWrapperInfo);
      navigate(`/favourites?${newSearchParams.toString()}`, { replace: true });
    } else {
      console.error('Text wrapper not found!');
    }
  };

  return (
    <button className="plus" onClick={handleClick}><span>+</span></button>
  );
};

export default PlusFavouritesButton;
