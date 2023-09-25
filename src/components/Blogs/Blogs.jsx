/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Blogs.css'
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect( () => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    useEffect( () => {
        const storedBookmark = get
    }, [])
    
    const handleaddToBookmark = (blog) => {
        
    }

    return (
        <div className='blogs-container'>
            {
                blogs.map(blog => <Blog 
                    blog={blog}
                    key = {blog.id}
                    handleaddToBookmark = {handleaddToBookmark}
                    ></Blog>)
            }
        </div>
    );
};

export default Blogs;
