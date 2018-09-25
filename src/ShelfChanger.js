import React from 'react'
import './App.css'


class ShelfChanger extends React.Component {
  constructor(props){
    super(props);
    this.state= {
        shelf: this.props.book.shelf
    }
    this.handleChange = this.handleChange.bind(this);
  }
    handleChange(event){
    
      this.props.updateShelf(event.target.value);
      
    }
    render(){
        
        return(
            <div className="book-shelf-changer">
                <select value ={shelf} onChange ={this.handleChange}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
                   
        )}
    };

export default ShelfChanger;