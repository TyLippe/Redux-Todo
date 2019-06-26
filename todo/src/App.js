import React from 'react';
import ToDoForm from "./Components/ToDoForm";
import ToDoList from "./Components/ToDoList";

import './App.css';


class App extends React.Component {
  render() {
    return (
      <div>
        <ToDoList />
        <ToDoForm />
      </div>
    );
  }
}

export default App;
