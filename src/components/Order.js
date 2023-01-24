import React from 'react'
import { useSelector } from 'react-redux';
import pizzas from '../pizzas'
import Pizza from './Pizza';

const Order = () => {
 
    const pizzas = useSelector(state => state.data.pizzas)
    const listPizza = Object.keys(pizzas).map(pizza => (
      <Pizza 
      name={pizza.name}
      price={pizza.price}
      image={pizza.image}
      />
    ));
    return (
    <div>
    {listPizza}
    </div>
    
  )
}

export default Order