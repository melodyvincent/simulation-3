import React from 'react'
import SideNav from './Components/SideNav/SideNav'
import routes from './routes';
import './App.css';

function App(){
  return (
    <div className="App">
      <SideNav />
      {routes}
    </div>
  )
}

export default App;
