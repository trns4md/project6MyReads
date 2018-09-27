import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import MainPage from './MainPage';
import SearchPage from './SearchPage';
import { Switch,Route } from 'react-router-dom'
class App extends React.Component {
  render() {
    return (
      <div>
      <Switch>
          <Route exact path="/" component={MainPage}  />
          <Route path="/SearchPage" component={SearchPage} />
      </Switch>
      </div>
    )  
  }
};
export default App;