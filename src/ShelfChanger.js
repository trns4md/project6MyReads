import React from 'react'
import './App.css'



class ShelfChanger extends React.Component {
      render(){
		const { book, handleShelfChange } = this.props       
        return(
            <div className="book-shelf-changer">
            <select defaultValue={book.shelf ? book.shelf : 'none'} onChange={(e) => handleShelfChange(book, e.target.value)}>
                    <option value="moveTo" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
                   
        )}
    };

export default ShelfChanger;