import React, { Component } from 'react';
import './App.css';

// import ImageSlider from './components/Image';
// import Counter from './components/Counter';
import TodoList from './components/TodoList';
// import Form from './components/Form';
// import User from './components/User';

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
