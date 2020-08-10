import React from 'react';
import './App.css';
import Menu from './Components/Menu/Menu'
import ListArticles from './Components/ListArticles/ListArticles'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu></Menu>
      </header>
      <ListArticles></ListArticles>


    </div>
  );
}

export default App;
