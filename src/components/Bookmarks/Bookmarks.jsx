/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Bookmarks.css'
import Bookmark from '../Bookmark/Bookmark';


const Bookmarks = (props) => {
    
    const bookmarks = props.bookmarks
    return (
        <div className='bookmark-container'>
            <div className='spent-time'>
                <h4> Spent time on read : {props.spentTime} mins </h4>
            </div>
            <div className='bookmarked'>
                <h4>Bookmarked Blogs: {bookmarks.length}</h4>
                {
                    bookmarks.map(bookmark => <Bookmark
                    key = {bookmark.id}
                    bookmark = {bookmark}
                    ></Bookmark>)
                }
            </div>
        </div>
    );
};

export default Bookmarks;