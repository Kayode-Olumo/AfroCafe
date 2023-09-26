import React from 'react';
import HeaderCardButton from './HeaderCardBtn';
import MealsImg from '../../../assets/meals.jpg';

import classes from './styles/Header.module.css';

const Header = ({ openModal }) => {
  return (
    <>
        <header className={classes.header}>
            <h1>AfroCafe</h1>
            <HeaderCardButton onClick={openModal}/>
        </header>
        <div className={classes['main-image']}>
            <img src={MealsImg} alt='Meals'/>
        </div>
    </>
  )
}

export default Header