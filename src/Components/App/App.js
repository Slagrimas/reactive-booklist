import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import BookListAppTitle from '../BookListAppTitle';
import BookList from '../BookList';
import AddBook from '../AddBook';
import { loadBooks } from '../../actions/bookActions';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props)
        // this.addBook = this.addBook.bind(this);
    }
    
    componentDidMount() {
        axios.get('/api/books')
        .then(response => {
            console.log('books ', response.data)
            const books = response.data;
            this.props.loadBooks(books);

        })
        .catch(err => {console.log(err)});
    }

    // addBook({ title, author }) {
    //     const id = this.props.currentId;
    //     const { books } = this.state;

    //     const newBook = { id, title, author };

    //     this.setState({
    //         currentId: id + 1,
    //         books: [...books, newBook]
    //     })

    // }
    render() {
        return (
            <div className="App">
                <BookListAppTitle title="Shadrach's Book Title" />
                <BookList books={this.props.books} />
                <AddBook />
            </div>
        )
    };
};


const mapStateToProps = (state) => {
    return {
        books: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadBooks: (books) => {
            dispatch(loadBooks(books));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
//higher order component ^