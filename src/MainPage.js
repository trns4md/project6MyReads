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
        this.updateShelf = this.updateShelf.bind(this);
    }
    componentDidMount(){
        BooksAPI.getAll().then((books) => {
            this.setState({books: books})
        })  
        }
    updateShelf =(book, shelf) => {
        BooksAPI.update(book, shelf).then((books) => {
            this.setState({books: books});}
        )}
    
    render(){
        
        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                <div>
                        <Shelf updateShelf={this.state.updateShelf} name= "Currently Reading" books={this.state.books.filter(books=> books.shelf ==="currentlyReading")} />
                        <Shelf updateShelf={this.state.updateShelf} name= "Want to Read" books={this.state.books.filter(books=> books.shelf ==="wantToRead")} />
                        <Shelf updateShelf={this.state.updateShelf} name= "Read" books={this.state.books.filter(books=> books.shelf ==="read")} /> 
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