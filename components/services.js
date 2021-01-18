import React from 'react'
import Button from 'components/button'

export default function Services() {
    return (
        <div id="service" className="service">
            <h2 className="service-header">
                Our Exceptional Services</h2>
            
            <div className="service-cards">
                <div className="card service-card">
                    <div className="sub-item">
                        <div className="icon-circle">
                            <img className="service-icon rake" src="/raking.png" width="150px" height="150px"></img>
                        </div>
                    </div>
                    <div className="sub-item lower">
                        <h2 className="service-title">Raking Leaves</h2>
                        <p className="service-description">Don't let the falling leaves get you down. Let us take care of all your raking needs!</p>
                        <div className="service-button centered">
                            <Button icon="/calendar.svg" text="Schedule Now!" link="https://keegans-neighborhood-services.appointlet.com/s/raking-leaves/keegan-glaser"/>
                        </div>
                    </div>
                </div>

                <div className="card service-card">
                    <div className="sub-item">
                        <div className="icon-circle">
                            <img className="service-icon shovel" src="/shovel.png" width="150px" height="150px"></img>
                        </div>
                    </div>
                    <div className="sub-item lower">
                        <h2 className="service-title">Shoveling Snow</h2>
                        <p className="service-description">Does the thought of shoveling give you chills? We've got your back!</p>
                        <div className="service-button centered">
                            <Button icon="/calendar.svg" text="Schedule Now!" link="https://keegans-neighborhood-services.appointlet.com/s/shoveling-snow/keegan-glaser"/>
                        </div>
                    </div>
                </div>

                <div className="card service-card">
                    <div className="sub-item">
                        <div className="icon-circle">
                            <img className="service-icon cat" src="/cat.png" width="100px" height="100px"></img>
                        </div>
                    </div>
                    <div className="sub-item lower">
                        <h2 className="service-title">Catsitting</h2>
                        <p className="service-description">In need of a caretaker for your favorite furry friend? Catsitting services now available!</p>
                        <div className=" service-button centered">
                            <Button icon="/calendar.svg" text="Schedule Now!" link="https://keegans-neighborhood-services.appointlet.com/s/pet-sitting/keegan-glaser"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="services-disclaimer">
                *Note: I do this because I enjoy helping people. Payment for these services is <b>not</b> required, however tips are greatly appreciated!
            </div>
        </div>
    )
}