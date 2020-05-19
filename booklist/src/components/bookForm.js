import React,{useState} from 'react'
import {connect} from "react-redux" 
import { AddBook } from '../actions/addBook'
 function BookForm(props) {
     const [book,setBook] = useState({
         title:'',
         author:'',
     })
     const handleChange = ()=>{
        setBook({
            title:document.getElementById("title").value,
            author:document.getElementById("author").value,
            id:Math.random()*10
        })
     }
     const handleSubmit = (e)=>{
         e.preventDefault();
         props.addBook(book);
         document.getElementById("title").value="";
         document.getElementById("author").value="";
         props.history.push("/books");
     }
    return (
        <div className="book-form">
            <h3>Add a book to read!</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" id="title" placeholder="title" onChange={handleChange} />
                <input type="text" id="author" placeholder="author" onChange={handleChange} />
                <button type="submit">Add book</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addBook:(book)=>{
            dispatch(AddBook(book))
        }
    }
}
export default connect(null,mapDispatchToProps)(BookForm)