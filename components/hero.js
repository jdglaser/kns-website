import React from "react"
import Button from "components/button.js"

export default function Hero() {
    return (
        <div className="hero-image">
            <div className="hero-text">
            <div className="slogan">
                <h1>
                    A smile.
                    <br></br>
                    With service.
                </h1>
            </div>
            <div className="hero-button">
                <Button text="Schedule Now!" link="#service" icon="/calendar.svg"/>
            </div>
            
            </div>
        </div>
    )
}