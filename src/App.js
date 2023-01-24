import './App.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { faPizzaSlice, faTruck, faFire, faEuroSign, faEdit, faTrash, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import Tile from './components/Tile';
import tiles from './tiles';

library.add(faPizzaSlice, faTruck, faFire, faEuroSign, faEdit, faTrash, faArrowLeft)

function App() {



  const navigate = useNavigate();
  const handleClick = (action) => {
    navigate(action);
  }

  const listTile = tiles.map(tile => (
    <Tile
      key={tile.action}
      name={tile.name}
      description={tile.description}
      icon={tile.icon}
      bgColor={tile.bgColor}
      action={() => handleClick(tile.action)}
    />
  ));
  return (
    <div className="App">
      <h1>gfhfdfhd</h1>
      <div>
        {listTile}
      </div>

    </div>
  );
}

export default App;
