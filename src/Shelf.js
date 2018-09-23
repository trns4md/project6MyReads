import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'

class Shelf extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                
                    </ol>
                </div>
            </div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                
                    </ol>
                </div>
            </div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                
                    </ol>
                </div>
            </div>
      
        <div className="open-search">
        <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
        </div>
        </div>
        );
    }
};

export default Shelf;