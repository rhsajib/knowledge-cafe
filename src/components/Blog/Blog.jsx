/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Blog.css'

const Blog = (props) => {
    const {user, img, tags, title, published, read} = props.blog
    return (
        <div className='blog'>
            <img src={img} alt="" />
            <div className='blog-user'>

                <div className='user-detail'>
                    <img src={user.img} alt="" />
                    <div>
                        <strong>{user.name}</strong>
                        <br />
                        <small>{published}</small>
                    </div>
                </div>
                
                <div className='blog-bookmark'>
                    <span>{read} mins read</span>
                    <button onClick={() => {props.handleaddToBookmark(props.blog)}}><img src="bookmark.svg" alt="" /></button>
                </div>               
            </div>
            <h2>{title}</h2>

            {
                // tags.map(tag => <span><a href="">#{tag}  </a></span>)
                tags.map(tag => <span>#{tag}  </span>)
            }

            <div>
                <button onClick={() => {props.handleReadTime(props.blog)}}>Mark as read</button>
            </div>
        </div>
    );
};

export default Blog;