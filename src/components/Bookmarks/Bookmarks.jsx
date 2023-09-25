/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Bookmarks.css'

const Bookmarks = () => {
    const [blogs, setBlogs] = useState([])

    // const addToBookmark()

    return (
        <div className='bookmark-container'>
            <div className='spent-time'>
                <h4> Spent time on read :    mins </h4>
            </div>
            <div className='bookmarked'>
                <h4>Bookmarked Blogs: {blogs.length}</h4>
                {
                    blogs.map(blog => <p key={blog.id}>blog.title</p>)
                }
            </div>
        </div>
    );
};

export default Bookmarks;