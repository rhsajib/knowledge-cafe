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
                        <text><strong>{user.name}</strong></text> 
                        <br />
                        <text><small>{published}</small></text>
                    </div>
                </div>
                
                <div className='blog-bookmark'>
                    <text>{read} mins read</text>
                    <button><img src="bookmark.svg" alt="" /></button>
                </div>               
            </div>
            <h2>{title}</h2>

            {
                tags.map(tag => <text>#{tag}  </text>)
            }

            <div>
                <button>Mark as read</button>
            </div>
        </div>
    );
};

export default Blog;