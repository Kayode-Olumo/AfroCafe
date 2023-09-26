import React, { useContext } from 'react';
import CardIcon from '../../Features/Cart/CartIcon';
import CartContext from '../../../store/cart-store';
import classes from './styles/HeaderCardBtn.module.css'

const HeaderCardButton = ({ onClick }) => {
  const cardCtx = useContext(CartContext);
  console.log(cardCtx, 'state header')

  const noOfCardItems = cardCtx.items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0)

  return (
    <button className={classes.button} onClick={onClick}>
        <span className={classes.icon}>
            <CardIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
            {noOfCardItems}
        </span>
    </button>
  )
}

export default HeaderCardButton;