import React from "react";
import { withRouter } from "react-router-dom";

import './menu-item.styles.css'


const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div 
     className={`menu-item ${size}`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className="background-image" 
        style={{
            backgroundImage: `url(${imageUrl})`
        }} />
        <div className='content'>
            <h2 className='title'>{title.toUpperCase()}</h2>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);


export default withRouter(MenuItem);

