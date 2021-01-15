import React from 'react'
import Button from 'components/button'

export default function Services() {
    return (
        <div className="service">
            <h2 id="service">Exceptional Services. Low Prices.</h2>
            
            <div className="service-cards">
                <div className="card">
                    <div className="sub-item">
                        <div className="icon-circle">
                            <img className="service-icon rake" src="/raking.png" width="150px" height="150px"></img>
                        </div>
                    </div>
                    <div className="sub-item">
                        <h2 style={{textAlign:"center"}}>Raking Leaves</h2>
                        <hr></hr>
                        <p>Don't let the falling leaves get you down. Let us take care of all your raking needs!</p>
                        <div className="centered">
                            <Button text="Schedule Now!"/>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="sub-item">
                        <div className="icon-circle">
                            <img className="service-icon shovel" src="/shovel.png" width="150px" height="150px"></img>
                        </div>
                    </div>
                    <div className="sub-item">
                        <h2 style={{textAlign:"center"}}>Shoveling Snow</h2>
                        <hr></hr>
                        <p>Does the thought of shoveling give you chills? We've got your back!</p>
                        <div className="centered">
                            <Button text="Schedule Now!"/>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="sub-item">
                        <div className="icon-circle">
                            <img className="service-icon cat" src="/cat.png" width="100px" height="100px"></img>
                        </div>
                    </div>
                    <div className="sub-item">
                        <h2 style={{textAlign:"center"}}>Catsitting</h2>
                        <hr></hr>
                        <p>In need of a caretaker for your favorite furry friend? Schedule our top of the line catsitting services now!</p>
                        <div className="centered">
                            <Button text="Schedule Now!"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}