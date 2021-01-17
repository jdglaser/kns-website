import React from 'react'

export default function Contact() {
    return (
        <div id="contact" className="contact">
            <h2 className="contact-header">Contact</h2>
            <div className="contact-description">
                If you have any questions or want to schedule a service, feel free to contact us using any of the methods below!
            </div>
            <div className="contact-methods">
                <div className="contact-method">
                    <div className="contact-icon-circle">
                        <img className="phone-icon" src="/phone.svg"></img>
                    </div>
                    <div className="phone-number">
                        <div className="low-border-line">Call/Text</div>
                        <div>920-123-4545</div>
                    </div>
                </div>
                <div className="contact-method">
                    <div className="contact-icon-circle">
                        <img className="email-icon" src="/email.svg"></img>
                    </div>
                    <div className="email">
                        <div className="low-border-line">Email</div>
                        <div>kns-services@gmail.com</div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}