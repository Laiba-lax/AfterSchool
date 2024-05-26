// src/App.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/shared-components/NavbarComponent';
  import { Question } from './components/Question';


function App() {
  return (
    <div>
      <NavbarComponent/>  
   
      <Question/>
    </div>
  );
}

export default App;
