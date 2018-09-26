import React from 'react'
import './App.css'
import ShelfChanger from './ShelfChanger.js';


class Book extends React.Component { 
render(){
     let book = this.props.book
        return(       
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.book.imageLinks.thumbnail}")`}}></div>
                      <ShelfChanger book={book}  handleShelfChange={this.props.handleShelfChange}/>
                      </div>
                    <div className="book-title">{this.props.book.title}</div>
                    <div className="book-authors">{this.props.book.authors}</div>
                  </div>
                
        )}
    };

export default Book;