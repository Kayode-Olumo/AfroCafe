import React, { useContext } from 'react';
import CartContext from '../../../store/cart-store';
import CartItem from './CartItem/CartItem';
import classes from './styles/Cart.module.css';
import Modal from '../../UI/Modal';

const Cart = ({ closeModal }) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = cartCtx.totalAmount.toFixed(2);
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {

  } 

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  }

  const cartItems = (
    <ul className={classes['cart-items']}>
        {cartCtx.items.map((item) => (
                <CartItem 
                    key={item.id} 
                    item={item} 
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            )
        )}
    </ul>)

  return (
    <Modal closeModal={closeModal}>
        {cartItems}
        <div className={classes.total}>
            <span>Total </span>
            <span>£{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={closeModal}>Close</button>
            {hasItems && <button className={classes.button}>Order</button>}
        </div>
    </Modal> 
  )
}

export default Cart;