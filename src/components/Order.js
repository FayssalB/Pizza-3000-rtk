import React from 'react'
import { useSelector } from 'react-redux';
import pizzas from '../pizzas'
import Pizza from './Pizza';

const Order = () => {

    const pizzas = useSelector(state => state.data.pizzas)
    const listPizza = Object.keys(pizzas).map(key=> (
        <Pizza
            name={pizzas[key].name}
            price={pizzas[key].price}
            image={pizzas[key].image}
        />
    ));
    return (
        <div>
            {listPizza}
        </div>

    )
}

export default Order