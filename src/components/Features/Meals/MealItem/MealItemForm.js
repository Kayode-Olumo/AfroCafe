import React, { useRef, useState } from 'react';
import Input from '../../../UI/Input';
import classes from './styles/MealItemForm.module.css'

const MealItemForm = ({ id, onAddToCart }) => {
  const [isValidAmount, setIsValidAmount] = useState(true);
  const amountInputRef = useRef();



  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value; //value is always a string
    const enteredAmountNumber = +enteredAmount;//converts string to number type

    if(
        enteredAmount.trim().length === 0 ||
        enteredAmountNumber < 1 || 
        enteredAmountNumber > 5
      ){
        setIsValidAmount(false);
        return;
     }

     onAddToCart(enteredAmountNumber)
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
        <Input 
          ref={amountInputRef}
          label='Amount' 
          input={{
              id: 'amount_' + id, // this changed!,
              type: 'number',
              min: '1',
              max: '5',
              step: '1',
              defaultValue: '1',
          }}
        />
        <button>+ Add</button>
        {!isValidAmount && <h2>you've entered an invalid amount, try again</h2>}
    </form>
  )
}

export default MealItemForm