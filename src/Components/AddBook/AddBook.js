import React, { Component } from 'react';

class AddBook extends Component {
    constructor(props) {
        super(props)

        this.state = {
            _id: 0,
            title: 'Add a title here',
            author: 'Add a Author here'
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onAuthorChange = this.onAuthorChange.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
    }

    onTitleChange(event) {
        console.log(event.target.value)
        this.setState( { title: event.target.value } );
    }

    onAuthorChange(event) {
        this.setState( {author: event.target.value} )
    }

    clickHandler(){
        const  { addBook } = this.props;
        const { title, author } = this.state;

        addBook ( { title, author });

        this.setState({title: 'Add a title here', author: 'Add a Author here'})

    }
    render() {
    
        return (
            <div className="add-book-form">
                <input type="text" value={this.state.title} onChange={this.onTitleChange}/>

                <input type="text" value={this.state.author} onChange={this.onAuthorChange}/>

                <button onClick={this.clickHandler}>
                    Add Book
            </button>

            </div>
        )
    }
}
export default AddBook;