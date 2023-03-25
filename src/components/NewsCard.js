// code for individual card for react

import React from 'react'
import '../App.css'

function NewsCard(props) {
    
    
    return (
        <div>
            <div className="card" >
                <img 
                src={!props.image_url ? "https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found-300x169.jpg" : props.image_url} 
                className="card-img-top" alt="img" />
                <div className="card-body">
                    <h5 className="card-title" id='title'>{props.title}</h5>
                    <p className="card-text">{props.desc}</p>
                    <p className='card-text'><small className='text-muted'>By <b> {!props.author?"anonymous":props.author}</b></small></p>
                    <p className='card-text'><small className='text-muted'>on  {new Date(props.date).toUTCString()}</small></p>
                    <a href={props.link} target="_blank" rel='noreferrer' className="btn btn-primary">Read full article at {props.source}</a>  
                </div>
            </div>
        </div>
    )
}

export default NewsCard
