import React, { Component } from 'react';
import './App.css';
import BookListAppTitle from '../BookListAppTitle';
import BookList from '../BookList';

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            books: [{
                _id: 1,
                title: 'Talion: The Revenant from DB',
                author: 'Michael A. Stackpole'
            },
            {
                _id: 2,
                title: 'Ready Player One from DB',
                author: 'Ernest Cline'
            },
            {
                _id: 3,
                title: 'Enders Game from DB',
                author: 'Orson Scott Card'
            }]
        }
    }
    render () {
        return (
            <div className="App">
            <BookListAppTitle title="Shadrach's Book Title" />
            <BookList books={this.state.books} />
            </div>
        )
    };
};

export default App;