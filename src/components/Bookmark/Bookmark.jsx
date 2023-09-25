/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Bookmark.css'

const Bookmark = (props) => {
    return (
        <div className='bookmark'>
            <p>{props.bookmark.title}</p>
        </div>
    );
};

export default Bookmark;