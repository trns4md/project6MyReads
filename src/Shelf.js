import React from 'react'

import './App.css'
import Book from './Book';


const Shelf = (props)=> {
        return(
            <div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">{props.name}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {props.books.map(book => (<li key={book.id}><Book book={book} handleShelfChange={props.handleShelfChange}/></li>))}
                    </ol>
                </div>
            </div>
        </div>
        );
    };

export default Shelf;