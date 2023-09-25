/* eslint-disable no-unused-vars */
import React from 'react';
import './Body.css'
import Blogs from '../Blogs/Blogs';
import Bookmarks from '../Bookmarks/Bookmarks';

const Body = () => {
    return (
        <div className='main-body'>
            <Blogs></Blogs>
            <Bookmarks></Bookmarks>
        </div>
    );
};

export default Body;