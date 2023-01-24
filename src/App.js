import './App.css';
import React, { useState } from 'react';
import { faPizzaSlice, faTruck, faFire,faEuroSign,faEdit,faTrash,faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'


library.add(faPizzaSlice, faTruck, faFire,faEuroSign,faEdit,faTrash,faArrowLeft)

function App() {
  return (
    <div className="App">
      <h1>Lets GO</h1>
      
    </div>
  );
}

export default App;
