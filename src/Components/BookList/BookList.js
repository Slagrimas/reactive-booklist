import React from 'react';

import BookListItem from '../BookListItem'


const BookList = props => {
    
    const booksList = props.books.map(book => {
        const { id, title, author } = book;
        return (
            <BookListItem key={id} title={title} author={author} />
        );

    })
    return (
        <ul>
            { booksList }
        </ul>
    );
};

export default BookList;