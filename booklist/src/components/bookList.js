import React from 'react'
import {connect} from "react-redux"
import { DeleteBook } from '../actions/delteBook';
import {Link} from "react-router-dom"

function BookList(props) {
    const booksToMap = props.books.map((book)=>{
        return(
            <div key = {book.id} className="book-holder">
                <h2>{book.title}</h2>
                <hr/>
                <h3>{book.author}</h3>
                <Link to = {"/bookDetails/"+book.id}><button>Details</button></Link>
                <button onClick={()=>{props.deleteBook(book.id)}}>Delete book</button>
            </div>
        )
    })
    const howMany = props.books.length ? `You have ${props.books.length} books to read!`:"Hooray, no books to read";
    return (
        <div className="book-list">
            <h3>{howMany}</h3>
            {booksToMap}
        </div>
    )
}


const mapStateToProps = (state)=>{
    return{
        books:state.books.books
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        deleteBook:(id)=>{
            dispatch(DeleteBook(id))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(BookList);