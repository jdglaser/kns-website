import React from 'react'
import { useRouter } from 'next/router'
import moment from 'moment'
import Button from 'components/button';
import Link from 'next/link'

export default function() {
    const router = useRouter();
    const { start, name, email } = router.query;
    let formattedStartDate = moment(start).format("MMMM Do, YYYY");
    let formattedStartTime = moment(start).format("h:mm a");
  
    return (
        <div className="thanks">
            <h2 className="thanks-header">{name} Service Confirmed!</h2>
            <p>Your {name} service has been confirmed for {formattedStartDate} at {formattedStartTime}.
              <br></br><br></br>A confirmation email will be sent to {email} shortly.  
            </p>
            <p>
            I do this because I enjoy helping people. Payment for services is not required, however tips are greatly appreciated!
            <br></br><br></br>I'm looking forward to helping you!

            <br></br><br></br>- Keegan
            </p>

            <div className="thanks-buttons">
                <span onClick={() => window.print()}>
                    <Button icon="/printer.svg" text="Print" />
                </span>
                <Link href="/">
                    <button className="home-button">
                        <img className="button-icon" src="/home.svg" height="25px" width="25px"></img>
                        Home
                    </button>
                </Link>
            </div>
        </div>
    )
}