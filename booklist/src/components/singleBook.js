import React from 'react'
import {connect} from "react-redux"

 function SingleBook(props) {
     const id = props.match.params.id;
     const bookDetail = props.books.filter((book)=>{
        if(id == book.id){
            return true
        }
     })
     console.log(bookDetail)
    return (
        <div className="book-list">
            <div className="book-holder" key={bookDetail.id}>
            <h2>{bookDetail[0].title}</h2>
            <hr/>
            <h3>{bookDetail[0].author}</h3>
            <button onClick={()=>props.history.push("/books")}>Back to books page</button>
        </div>
        </div>

    )
}

const mapBookToProps = (state)=>{
    return{
        books:state.books.books
    }
}
export default connect(mapBookToProps)(SingleBook)