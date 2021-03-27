/* eslint-disable react/prop-types */
import React from 'react'; 

import './app-header.css';

const AppHeader = (props) =>{
    const {liked, allPosts} = props;
    return(
        <div className="app-header d-flex">
            <h1>Daniil Lemeshevski</h1>
            <h2>{allPosts} записи, из них понравилось {liked} </h2>
        </div>
    )
}

export default AppHeader;
