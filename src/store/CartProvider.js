import { useReducer } from 'react';
import CartContext from './cart-store';

const initialCartState = {
    items: [],
    totalAmount: 0,
}

const cartReducer = (state, action) => {
    if(action.type === "ADD_CART_ITEM"){
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.amount);// find the index of an item in an array
        const exisitingCartItem = state.items[existingCartItemIndex]
        let updatedItems;

        if (exisitingCartItem) {
            const updatedItem = {
                ...exisitingCartItem,
                amount: exisitingCartItem.amount + action.item.amount
            }
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }

        // const updatedItems = state.items.concat(action.item); //unlike push() that adds items to an exisiting array, concat() adds to a new array;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        }
    }

    return initialCartState;
}

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, initialCartState)
  
  const addItemToCartHandler = (item) => {
    dispatchCartAction({type: 'ADD_CART_ITEM', item: item })
  }

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({type: 'REMOVE_CART_ITEM', id: id })
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  }

  return (
    <CartContext.Provider value={cartContext}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider;