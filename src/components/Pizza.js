import React from 'react'

const Pizza = ({name, price, image}) => {
  return (
    <div>
        <img src={image} alt="" />
        <h3>{name}</h3>
        <p>{price}</p>
    </div>
  )
}

export default Pizza