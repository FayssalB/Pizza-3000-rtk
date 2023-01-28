import React from 'react'

const Pizza = ({name, price, image}) => {
  return (
    <div onClick={()=>{}}>
        
        <h3>{name}</h3>
        <img src={require(`../img/pizzas/${image}`)} alt="" />
        <p>{price}€</p>
    </div>
  )
}

export default Pizza