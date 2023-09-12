


import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import React from 'react';

import Task from './pages/Task';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Adventure from './pages/Adventure';
import Horror from './pages/Horror';
import Sof from './pages/Sof';
import Romance from './pages/Romance';
import Gothic from './pages/Gothic';
import Fantasy from './pages/Fantasy';
// import Lamp from './pages/Lamp';

function App() {
 

  return (
  <div>
    
 
      <Routes>

      <Route path='/h' element={<Task/>}/>   

  <Route path='/' element={<Home/>}/>
  <Route path='/sign-in' element={<Signin/>}/>
 <Route path='/sign-up' element={<Signup/>}/>
 <Route path='/ad' element={<Adventure/>}/>
 <Route path='/hr' element={<Horror/>}/>
 <Route path='/sof' element={<Sof/>}/>
 <Route path='/r' element={<Romance/>}/>

 <Route path='/g' element={<Gothic/>}/>
 <Route path='/f' element={<Fantasy/>}/>
 {/* <Route path='/L' element={<Lamp/>}/> */}
 

</Routes>
</div>

  
  );
}

export default App;


