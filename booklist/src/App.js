import React from 'react';
import './App.css';
import Header from './components/header';
import BookList from './components/bookList';
import {BrowserRouter,Route} from "react-router-dom"
import BookForm from './components/bookForm';
import singleBook from './components/singleBook';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Route path = "/books" component={BookList}/>
      <Route path = "/addBook" component={BookForm} />
      <Route path = "/bookDetails/:id" component={singleBook} />
      </BrowserRouter>
    </div>
  );
}

export default App;
