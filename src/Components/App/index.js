import React, { Component } from 'react'; 
import './App.css';
import BookListAppTitle from '../BookListAppTitle'

class App extends Component {
  render() {
    return (
      <div className="App">
      <BookListAppTitle title="Shadrach's Book List" />
      </div>
    );
  }
}

export default App;
