import React from 'react';
import Book from './Book';
import './App.css';
import * as BooksAPI from './BooksAPI';
import  {Link}from 'react-router-dom';



class SearchPage extends React.Component {
    state={
          query: '',
          searchedBooks: [],
          shelvedBooks:[]
        }
  componentDidMount(){
    BooksAPI.getAll().then((books) => {
        this.setState({shelvedBooks: books})
        })  
    }
    addBookShelf(){
    const { searchedBooks, shelvedBooks } = this.state;
    this.setState({
      searchedBooks: searchedBooks.map(book =>{
        book.shelf = 'none'
        shelvedBooks.forEach(shelvedBook => {
          shelvedBook.id === book.id && (book.shelf = shelvedBook.shelf )
        })
        return book
        })
      })
    }
  
    updateQuery = (query) =>{
      this.setState({
        query: query
      })
      this.getSearchedBooks(query);
    }
    getSearchedBooks= (query)=>{
      if(query){
      BooksAPI.search(query).then((searchedBooks)=>{
        if(searchedBooks.error){
          this.setState({ searchedBooks: []})
        }else{
          this.setState({searchedBooks: searchedBooks})}
        })
      }else{
        this.setState({ searchedBooks: []})
      }
      
    }
    handleShelfChange = (book, shelf) => {
      BooksAPI.update(book, shelf).then(() => this.componentDidMount())
      this.addBookShelf()
    }
    render(){    
        return(
            <div className="app">
                    <div className="search-books">
                      <div className="search-books-bar">
                        <Link 
                          className="close-search" 
                          to='/'>Close</Link>
                          <div className="search-books-input-wrapper">
                            <input  className="search-contacts"
                                    type="text" 
                                    placeholder="Search by title or author"
                                    value={this.state.query}
                                    onChange={(event)=>this.updateQuery(event.target.value)} />
                          </div>
                        </div>
                    <div className="search-books-results">
                      <ol className="books-grid">
                          {
                            this.state.searchedBooks.map(searchedBook =>(
                              <li key={searchedBook.id} >
                                <Book book={searchedBook} handleShelfChange={this.handleShelfChange}/>
                              </li>
                            ))
                          }
                      </ol>
                    </div>
              </div> 
          </div>
                
        
    )}
                        };

export default SearchPage;