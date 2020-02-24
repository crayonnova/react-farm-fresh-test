import React from 'react';
import './App.css';
import {Route,Switch,Link} from 'react-router-dom'
import Header from './components/Header/Header.comp'
import Promotion from './components/Promotion/Promotion.comp'
import Store from './components/Store/Store.comp'

function App() {
  return (
    <>
    <Header />
    <Promotion />
    <Store />
    </>

  );
}

export default App;
