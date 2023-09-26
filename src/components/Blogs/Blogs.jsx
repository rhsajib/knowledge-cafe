/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Blogs.css'
import Blog from '../Blog/Blog';
import Bookmarks from '../Bookmarks/Bookmarks';
import { addIdToDbItem, getItemFromDb, addReadTimeToDb, getReadTimeFromDb } from '../../utilities/fakedb';




const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    
    useEffect( () => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    
    
    const storedIdToBlog = (storedId, blogs) => {
        const savedBlogs = [];

        if (storedId) {
            
            for (const id in storedId){
                const requiredBlog = blogs.find(blog => blog.id == id)

                if (requiredBlog) {
                    savedBlogs.push(requiredBlog)
                }
            }
        }
        return savedBlogs
    }



    // handle bookmarks
    const [bookmarks, setBookmarks] = useState([])

    // this will handle bookmarks after reload the page
    useEffect( () => {
        const dbItem = 'blog-bookmarks'
        const storedId = getItemFromDb(dbItem)
        
        const savedBlogs = storedIdToBlog(storedId, blogs)
        setBookmarks(savedBlogs)
    }, [blogs])
    

    // this will handle bookmarks after clicking to bookmark icon
    const handleaddToBookmark = blog => {
        // console.log(blog.id)
        const dbItem = 'blog-bookmarks'
        addIdToDbItem(dbItem, blog.id)
        const storedId = getItemFromDb(dbItem)
        
        const savedBlogs = storedIdToBlog(storedId, blogs)
        setBookmarks(savedBlogs)
    }


    
    // handle read time
    const [spentTime, setSpentTime] = useState(0)
    
    // this will handle read time after reload the page
    useEffect( () => {
        const storedReadTime = getReadTimeFromDb('blog-read-time')
        setSpentTime(storedReadTime)
    }, [])
    


    // this will handle read time after clicking to mark as read button
    const handleReadTime = blog => {

        addReadTimeToDb('blog-read-time', blog.read)
        const storedReadTime = getReadTimeFromDb('blog-read-time')
        setSpentTime(storedReadTime)
    }



    

    return (
        <div className='main-body'>
            <div className='blogs-container'>
                {
                    blogs.map(blog => <Blog 
                        blog = {blog}
                        key = {blog.id}
                        handleaddToBookmark = {handleaddToBookmark}
                        handleReadTime = {handleReadTime}
                        ></Blog>)
                }
            </div>
            <Bookmarks
                key = {1}
                bookmarks = {bookmarks}
                spentTime = {spentTime}
            ></Bookmarks>
        </div>
        
    );
};

export default Blogs;
