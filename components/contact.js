import React from 'react'

export default function Contact() {
    return (
        <div id="contact" className="contact">
            <h2 className="contact-header">Reach out now!</h2>
            <div className="contact-methods">
                <div className="contact-method">
                    <a href="tel:920-422-8007">
                        <div className="contact-icon-circle">
                            <img className="phone-icon" src="/phone.svg"></img>
                        </div>
                    </a>
                    <div className="phone-number">
                        <div className="low-border-line">Call/Text</div>
                        <a href="tel:920-422-8007"><div>920-422-8007</div></a>
                    </div>
                </div>
                <div className="contact-method">
                    <a href="mailto:keeganglaser@gmail.com">
                        <div className="contact-icon-circle">
                            <img className="email-icon" src="/email.svg"></img>
                        </div>
                    </a>
                    <div className="email">
                        <div className="low-border-line">Email</div>
                        <div><a href="mailto:keeganglaser@gmail.com">keeganglaser@gmail.com</a></div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}