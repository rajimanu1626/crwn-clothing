import React from 'react';
import './menu-item.styles.scss'

const MenuItem=({title,imgurl,size})=>(
    <div className={`menu-item ${size}`}>
    <div className='background-img' style={{backgroundImage:`url(${imgurl})`}}/>
    <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitles'>Shop Now</span>
    </div>
</div>    
)

export default MenuItem;