/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Blogs.css'
import Blog from '../Blog/Blog';
import Bookmarks from '../Bookmarks/Bookmarks';
import { addIdToDbItem, getItemFromDb } from '../../utilities/fakedb';




const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    
    useEffect( () => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    
    
    const storedBookmarksIdToBookmarks = storedBookmarksId => {
        const savedBookmarks = [];

        if (storedBookmarksId) {
            
            for (const id in storedBookmarksId){
                const requiredBlog = blogs.find(blog => blog.id == id)

                if (requiredBlog) {
                    savedBookmarks.push(requiredBlog)
                }
            }
        }
        return savedBookmarks
    }




    const [bookmarks, setBookmarks] = useState([])

    // this will handle bookmarks after reload the page
    useEffect( () => {
        const dbItem = 'blog-bookmarks'
        const storedBookmarksId = getItemFromDb(dbItem)
        
        const savedBookmarks = storedBookmarksIdToBookmarks(storedBookmarksId)
        setBookmarks(savedBookmarks)
    }, [])
    

    // this will handle bookmarks after clicking to bookmark icon
    const handleaddToBookmark = (blog) => {
        // console.log(blog.id)
        const dbItem = 'blog-bookmarks'
        addIdToDbItem(dbItem, blog.id)
        const storedBookmarksId = getItemFromDb(dbItem)
        
        const savedBookmarks = storedBookmarksIdToBookmarks(storedBookmarksId)
        setBookmarks(savedBookmarks)
    }

    

    return (
        <div className='main-body'>
            <div className='blogs-container'>
                {
                    blogs.map(blog => <Blog 
                        blog = {blog}
                        key = {blog.id}
                        handleaddToBookmark = {handleaddToBookmark}
                        ></Blog>)
                }
            </div>
            <Bookmarks
                key = 'new'
                bookmarks = {bookmarks}
            ></Bookmarks>
        </div>
        
    );
};

export default Blogs;
