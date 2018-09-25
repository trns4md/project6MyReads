import React from 'react'
import './App.css'
import ShelfChanger from './ShelfChanger.js';


class Book extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
    handleChange(event){
    
      this.props.updateShelf(event.target.value);
      
    }
    render(){
        
        return(
                <li>
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.book.imageLinks.thumbnail}")`}}></div>
                       <ShelfChanger books={book} updateShelf={this.props.updateShelf} />
                      </div>
                    <div className="book-title">{this.props.book.title}</div>
                    <div className="book-authors">{this.props.book.authors}</div>
                  </div>
                </li>
        )}
    };

export default Book;