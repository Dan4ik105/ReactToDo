/* eslint-disable react/prop-types */
import React from 'react';
import PostListItem from '../post-list-item';

import './post-list.css';

const PostList = ({posts, onDelete, onToggleImportant, onToggleLike}) =>{

    const elements = posts.map((item)=>{
        return(
           
            <li key={item.id} className="list-group-item">
                <PostListItem 
                onDelete={()=>{
                    onDelete(item.id)
                }}
                onToggleImportant={()=>onToggleImportant(item.id)}
                onToggleLike={()=>onToggleLike(item.id)}
            
                label={item.label} 
                important={item.important} 
                like={item.like}
                />
            </li>
        )
    });

    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;