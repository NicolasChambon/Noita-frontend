import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { toogleHeaderMenu } from '../../../../actions/globalActions';

import { IoMenu } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';

import './MenuBtn.scss';

const MenuBtn = () => {
  const isMenuOpen = useSelector((state) => state.global.headerMenu);
  const dispatch = useDispatch();

  // Close menu when clicking elsewhere
  useEffect(() => {
    const handleClick = () => {
      if (isMenuOpen) {
        dispatch(toogleHeaderMenu());
      }
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [isMenuOpen, dispatch]);

  return (
    <button
      className="MenuBtn"
      onClick={(e) => {
        e.stopPropagation();
        dispatch(toogleHeaderMenu());
      }}
    >
      {isMenuOpen ? <RxCross2 /> : <IoMenu />}
    </button>
  );
};

export default MenuBtn;
