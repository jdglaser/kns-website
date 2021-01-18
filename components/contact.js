import React from 'react'

export default function Contact() {
    return (
        <div id="contact" className="contact">
            <h2 className="contact-header">Reach out now!</h2>
            <div className="contact-methods">
                <div className="contact-method">
                    <div className="contact-icon-circle">
                        <img className="phone-icon" src="/phone.svg"></img>
                    </div>
                    <div className="phone-number">
                        <div className="low-border-line">Call/Text</div>
                        <div>920-422-8007</div>
                    </div>
                </div>
                <div className="contact-method">
                    <a href="mailto:kns-services@gmail.com">
                        <div className="contact-icon-circle">
                            <img className="email-icon" src="/email.svg"></img>
                        </div>
                    </a>
                    <div className="email">
                        <div className="low-border-line">Email</div>
                        <div><a href="mailto:kns-services@gmail.com">keegan.glaser@gmail.com</a></div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}