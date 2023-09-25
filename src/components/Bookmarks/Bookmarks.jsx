/* eslint-disable no-unused-vars */
import React from 'react';
import './Bookmarks.css'

const Bookmarks = () => {
    return (
        <div className='bookmark-container'>
            <div className='spent-time'>
                <h4> Spent time on read :    mins </h4>
            </div>
            <div className='bookmarked'>
                <h4>Bookmarked Blogs: count</h4>
            </div>
        </div>
    );
};

export default Bookmarks;