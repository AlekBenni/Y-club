import React from 'react'
import {NavLink} from 'react-router-dom'

function Menu() {
    return (
        <div className="menu">
            <div className="menu__logo">
                <h1>Yachting</h1>
            </div>
            <div className="menu__nav">
                <NavLink to="/">Main page</NavLink>
                <NavLink to="/articles">Articles</NavLink>
                <NavLink to="/review">Reviews</NavLink>
                <NavLink to="/about">About us</NavLink>
            </div>
        </div>
    )
}

export default Menu
