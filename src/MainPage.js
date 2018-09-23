import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'

class MainPage extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                </div>
            </div>
        );     
    }
};

export default MainPage;