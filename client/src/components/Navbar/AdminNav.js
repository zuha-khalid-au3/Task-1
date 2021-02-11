import React from 'react'
import {Link} from 'react-router-dom';


const AdminNav=()=>(
    <nav>
        <ul className="nav-flex-column">
            <li className="nav-item">
                <Link to="/admin/dashboard" className="nav-link">Dashboard</Link >
                </li>
            <li className="nav-item">
            <Link to="/admin/product" className="nav-link">Create User</Link>
            </li> 
            <li className="nav-item">
                <Link to="/admin/products" className="nav-link">Users</Link>
            </li> 
            <li className="nav-item">
                <Link to="/user/password" className="nav-link">Password</Link>
            </li>        
        </ul>
    </nav>
)

export default AdminNav;