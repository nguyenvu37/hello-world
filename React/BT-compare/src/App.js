import React from 'react';
import './App.css';
import TodoApp from './components/TodoApp';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <TodoApp/>
      </div>
    );
  }
}

export default App;
