import React from 'react'
import Review from 'components/review'

export default function Reviews() {
    return (
        <div id="reviews" className="reviews">
            <h2 className="review-header">Don't just take our word for it...</h2>
            <div className="actual-reviews">
                <Review review="Keegan helped me so much!" rating={5} name="- Daryl" />
                <Review rating={5} review="My cat loves having Keegan come by to feed her. She is so happy, and so am I to get some much needed time away!" name="- Susan" />
                <Review rating={4.5} review="Wow! My driveway is looking SO clean! I'm definitely using KNS again!" name="- John" />
            </div>
        </div>
    )
}