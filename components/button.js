import React from 'react';

export default function Button(props) {
    
    return (
        <a href={props.link}>
            <button className="button-custom">
                <img className="button-icon" src={props.icon} height="25px" width="25px"></img>
                {props.text}
            </button>
        </a>
    )
}