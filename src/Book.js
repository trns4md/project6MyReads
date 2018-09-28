import React from 'react'
import './App.css'
import ShelfChanger from './ShelfChanger.js';


const Book = (props)=> {
  
     let book = props.book
     let showThumbnail = props.book.imageLinks ? props.book.imageLinks.thumbnail : '';
        return(       
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${showThumbnail}")`}}></div>
                      <ShelfChanger book={book}  handleShelfChange={props.handleShelfChange}/>
                      </div>
                    <div className="book-title">{props.book.title}</div>
                    <div className="book-authors">{props.book.authors}</div>
                  </div>
                
        )};

export default Book;