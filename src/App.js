import React, { Component } from 'react';
import './App.scss';

import TodoList from './components/Todo/TodoList';
import Fetch from './components/Fetch/Fetch';
import Layout from './components/Layout/Layout';

class App extends Component {

  render() {
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
}

export default App;
