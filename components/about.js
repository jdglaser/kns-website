import React from 'react'
import Button from 'components/button'

export default function About() {
    return (
        <>
            <div className="card">
                <h2 id="about">Exceptional Services. Low Prices.</h2>
                <hr></hr>
                <div className="about-slogan">
                    🍂 Raking Leaves.<br></br>
                    ⛄ Shoveling Snow.<br></br>
                    🐱 Catsitting.<br></br>
                </div>
                <hr></hr>
                <div className="about-text">
                    Does the thought of going outside to shovel make you shiver more than the cold weather?
                    Would you rather jump in a pile of leaves than rake them?
                    Is your favorite furry friend in need of a neighborhood assistant?
                    <br></br><br></br>
                    Here at Keegan's Neighborhood Services, we've got you covered. 
                    We offer exceptional service at low prices. 
                    
                    <br></br><br></br>Make us your one stop
                    shop for all of your neighborhood service needs. Schedule a service today!
                </div>
            </div>
        </>
    )
}