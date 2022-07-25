import React, { Component } from 'react';
import './App.css';
import Tab from './compnents/tabs';







class App extends Component{
  render(){
    return(
      <div className='App'>
        <header className='Appheader'>
        <Tab />
      </header>
      </div>
    )
    
  }
}
export default App