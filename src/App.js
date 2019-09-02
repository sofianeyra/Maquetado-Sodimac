import React from 'react';
import './App.css';
import Topbar from './components/topBar';
import NavBar from './components/navBar';
import CategoryBar from './components/categoryBar';
function App() {
  return (
    <div className="App">
        <Topbar/>
        <NavBar/>
        <CategoryBar/>
    </div>
  );
}
export default App;
