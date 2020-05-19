import React from 'react'
import {NavLink} from "react-router-dom"
export default function Header() {
    return (
        <div className="header">
            <h1>Book<span>List</span> App</h1>
            <ul>
                <NavLink to="/books"><li>Books</li></NavLink>
               <NavLink to="/addBook" ><li>Add book</li></NavLink> 
            </ul>
        </div>
    )
}
