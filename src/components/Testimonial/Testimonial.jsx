import React from 'react'
import './Testimonial.css'

export default function Testimonial(props) {
    
    
    return (
        <div className='testimonial'>
            <img src={props.source} alt={props.alt}/>
            <div className='quote-container'>
                <img src="src\components\Testimonial\Icon.png" alt="quote marks"/>
                <p className='quote'>{props.quote}</p>
                <p className='author'>{props.author}</p>   
                <p className='title'>{props.title}</p>
            </div>
        </div>
    )
}