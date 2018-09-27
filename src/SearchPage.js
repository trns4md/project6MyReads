import React from 'react';
import Book from './Book';
import './App.css';
import * as BooksAPI from './BooksAPI';
import  {Link} from 'react-router-dom';


class SearchPage extends React.Component {
    state={
          query: '',
          searchedBooks: []
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
    
    render(){
        return(
            <div className="app">
                {this.state.showSearchPage} ? (
                    <div className="search-books">
                      <div className="search-books-bar">
                        <Link 
                          className="close-search" 
                          to='/MainPage'>Close</Link>
                          <div className="search-books-input-wrapper">
                    
                            <input  className="search-contacts"
                                    type="text" 
                                    placeholder="Search by title or author"
                                    value={this.state.query}
                                    onChange={(event)=>this.updateQuery(event.target.value)}
                                    
                            />
    
                          </div>
                        </div>
                    <div className="search-books-results">
                  <ol className="books-grid">
                  {
                    this.state.searchedBooks.map(searchedBook =>(
                      <li key={searchedBook.id} >
                        <Book book={searchedBook} />
                      </li>
                    ))
                  }
                  </ol>
                </div>
                  </div>
             
          </div>
                
        );
    }
};

export default SearchPage;