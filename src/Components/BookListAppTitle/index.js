import React, { Component } from 'react';
const BookListAppTitle = props => {
    const { title } = props;
    return (
        <header className="App-header">
            <h3 className="some-class">{title}</h3>
        </header>
    );

}

export default BookListAppTitle;