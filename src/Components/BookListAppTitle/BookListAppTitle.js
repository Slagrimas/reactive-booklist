import React from 'react';

const BookListAppTitle = props => {
    const { title } = props;
    return(
        <header className="App-Header">
        <h1 className="some-class">{title}</h1>
        </header>
    )
}

export default BookListAppTitle;