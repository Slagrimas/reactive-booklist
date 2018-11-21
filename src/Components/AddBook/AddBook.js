import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class AddBook extends Component {
    constructor(props) {
        super(props)

        this.state = {
            _id: 0,
            title: '',
            author: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.addNewBook = this.addNewBook.bind(this);
    }
    handleInputChange(event) {
        switch (event.target.id) {
            case "title":
                this.setState({ title: event.target.value })
                break;

            case "author":
                this.setState({ author: event.target.value })
                break;
            default:
        }
    }

    addNewBook(event) {
        event.preventDefault();
        const data = {
            title: this.state.title,
            author: this.state.author
        }
        axios.post('/api/books', data)
            .then(response => {

                const book = response.data;

                console.log(book);

                this.setState({
                    title: '',
                    author: ''
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        const { title, author } = this.state
        return (
            <div className="add-book-form">
                <input type="text" id="title" value={title} onChange={this.handleInputChange} />

                <input type="text" id="author" value={author} onChange={this.handleInputChange} />

                <button onClick={this.addNewBook}>
                    Add Book
            </button>

            </div>
        )
    }
}

export default AddBook;