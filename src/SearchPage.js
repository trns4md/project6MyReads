import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'

class SearchPage extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="app">
                {this.state.showSearchPage} ? (
                    <div className="search-books">
                      <div className="search-books-bar">
                        <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
                          <div className="search-books-input-wrapper">
                    
                            <input type="text" placeholder="Search by title or author"/>
    
                          </div>
                        </div>
                    <div className="search-books-results">
                  <ol className="books-grid"></ol>
                </div>
                  </div>
                );
          </div>
                
        );
    }
};

export default SearchPage;