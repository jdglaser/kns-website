import React from 'react';

export default function Button(props) {
    
    return (
        <button className="button-custom">
            <img className="button-icon" src="/calendar.svg" height="25px" width="25px"></img>
            {props.text}
        </button>
    )
}