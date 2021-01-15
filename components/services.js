import React from 'react'
import Button from 'components/button'

export default function Services() {
    return (
        <div className="service">
            <h2 id="service" style={{marginBottom:"0", marginLeft:"20px"}}>
                Our Exceptional Services</h2>
            
            <div className="service-cards">
                <div className="card">
                    <div className="sub-item">
                        <div className="icon-circle">
                            <img className="service-icon rake" src="/raking.png" width="150px" height="150px"></img>
                        </div>
                    </div>
                    <div className="sub-item lower">
                        <h2 className="service-title">Raking Leaves</h2>
                        <div className="price">
                            <span className="dollars">$25</span>
                            /yard
                        </div>
                        <p className="service-description">Don't let the falling leaves get you down. Let us take care of all your raking needs!</p>
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
                    <div className="sub-item lower">
                        <h2 className="service-title">Shoveling Snow</h2>
                        <div className="price">
                            <span className="dollars">$20</span>
                            /driveway
                        </div>
                        <p className="service-description">Does the thought of shoveling give you chills? We've got your back!</p>
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
                    <div className="sub-item lower">
                        <h2 className="service-title">Catsitting</h2>
                        <div className="price">
                            <span className="dollars">$20</span>
                            /hour
                        </div>
                        <p className="service-description">In need of a caretaker for your favorite furry friend? Catsitting services now available!</p>
                        <div className="centered">
                            <Button text="Schedule Now!"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}