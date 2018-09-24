import React from 'react'

import './App.css'
import Book from './Book';

class Shelf extends React.Component {
  
    render(){
       
        return(
            <div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.name}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.map((book, key) => <Book key={key} book={book} updateShelf={this.props.updateShelf}/>)}
                    </ol>
                </div>
            </div>
        </div>
        );
    }
};

export default Shelf;