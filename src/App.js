import React from 'react';
import './App.css';
import Header from "./components/Header";
import {Route} from "react-router-dom";
import Home from "./components/Home";
import Favs from "./components/Favs";
import Movie from "./components/Movie";

function App() {
  return (
    <div className="App">
      <Header/>
      <Route path="/" exact component={Home} />
      <Route path="/favs"  component={Favs} />
      <Route path="/movie/:id"  render={(match)=><Movie match={match}/>} />
    </div>
  );
}

export default App;
