import React from 'react';
import Home from './components';
import {BrowserRouter,Route} from 'react-router-dom';
import './App.css';
import About from './components/About';
import Education from './components/Education';
import Background from './components/Background';

const App=()=>{
  return (
    <div className="App">

      <BrowserRouter>
        <Route path='/' exact component={Home}/>
        <Route path='/about' exact component={About}/>
        <Route path='/education' exact component={Education}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
