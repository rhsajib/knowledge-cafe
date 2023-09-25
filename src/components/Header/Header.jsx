/* eslint-disable no-unused-vars */
import React from 'react';
import './Header.css'

const Header = () => {
    const imgUrl = "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
  
    return (
        <nav className='header'>
            <h2>Knowledge Cafe</h2>
            <div>
                <a href="/books">Books</a>
                <a href="/blogs">Blogs</a>
                <a href="/articles">Articles</a>
                <img src={imgUrl} alt="" />
            </div>
        </nav>
    );
};

export default Header;