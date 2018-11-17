import React from 'react';

const BookListItem = props => {
    const { title, author } = props;
    return (

        <li>
            <h3>{title}</h3>
            <h4>{author}</h4>
        </li>
    );
};

export default BookListItem;