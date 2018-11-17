import React from 'react';

import BookListItem from '../BookListItem'


const BookList = props => {
    const booksList = props.books.map(book => {
        const { _id, title, author } = book;
        return (
            <BookListItem key={_id} title={title} author={author} />
        );

    })
    return (
        <ul>
            { booksList }
        </ul>
    );
};

export default BookList;