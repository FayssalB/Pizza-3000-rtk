import React from 'react'

const Pizza = ({name, price, image}) => {
  return (
    <div>
        <img src={`./img/pizzas/${image}`} alt="" />
        <h3>{name}</h3>
        <p>{price}</p>
    </div>
  )
}

export default Pizza