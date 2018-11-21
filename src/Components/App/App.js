import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import BookListAppTitle from '../BookListAppTitle';
import BookList from '../BookList';
import AddBook from '../AddBook';
import { loadBooks } from '../../actions/bookActions';

class App extends Component {

    componentDidMount() {
        this.props.loadBooks();
    }
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
        loadBooks: () => {
            dispatch(loadBooks());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
//higher order component ^