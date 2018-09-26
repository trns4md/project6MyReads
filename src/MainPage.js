import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelf from './Shelf';
//import SearchPage from './SearchPage';
class MainPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            books: [],
            showSearchPage: false, 
        } 
    }
    componentDidMount(){
        BooksAPI.getAll().then((books) => {
            this.setState({books: books})
            })  
        }
     // update book with new shelf and reload books
  handleShelfChange = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => this.componentDidMount())
	}
    render(){
        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                <div>
                        <Shelf handleShelfChange={this.handleShelfChange} name="Currently Reading" books={this.state.books.filter(book=> book.shelf ==="currentlyReading")} />
                        <Shelf handleShelfChange={this.handleShelfChange} name="Want to Read" books={this.state.books.filter(book=> book.shelf ==="wantToRead")} />
                        <Shelf handleShelfChange={this.handleShelfChange} name="Read" books={this.state.books.filter(book=> book.shelf ==="read")} /> 
                </div>
                </div>
                <div className="open-search">
                <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
                    
                </div>
            </div>
        );     
    }

};

export default MainPage;