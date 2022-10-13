import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ContentElement } from "./models/content-elements";

function App() {
  return (
    <div className="App">
      <ContentElement name="text">Hello world</ContentElement>
    </div>

  );
}

export default App;
