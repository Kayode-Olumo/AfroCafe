import React from 'react';
import Card from '../../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './styles/AvailableMeals.module.css';
import {DUMMY_MEALS as mealData} from '../../../data/dummy-meals';

const AvailableMeals = () => {
  console.log(mealData)
  const mealsList = mealData.map(meal => (
      <MealItem 
        id={meal.id}
        key={meal.id}
        name={meal.name} 
        description={meal.description} 
        price={meal.price}
      />
    )
  );

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  )
}

export default AvailableMeals