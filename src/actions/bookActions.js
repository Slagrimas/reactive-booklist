import axios from 'axios';
export const LOAD_BOOKS = 'LOAD_BOOKS';
export const ADD_BOOK = 'ADD_BOOK';
const API_BOOKS_URL = '/api/books';

export const loadBooks = () => {
    return dispatch => {
        return axios.get(API_BOOKS_URL)
        .then(response => {
            const books = response.data;
            dispatch({
                type: LOAD_BOOKS,
                books 
            })
        })
        .catch(err => console.log(err))
    }
}

export const addBook = book => {
    return dispatch => {
       return axios.post(API_BOOKS_URL, book)
       .then(response => {
        const book = response.data;
        dispatch({
            type: ADD_BOOK,
            book
        })
       })
       .catch(err => console.log(err))
    }
}