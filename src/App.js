import React from "react";

import "./App.css";
import Book from "./components/book";
import Jumbotron from "react-bootstrap/Jumbotron";
//import Button from "react-bootstrap/Button";

function App() {
  return (
    <div>
      <Jumbotron>
        <h1>Google Book Search</h1>
        <p>Search by title, author or subject</p>
        <p />
      </Jumbotron>
      <p>
        <Book />
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}

export default App;
