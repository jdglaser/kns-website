import React from 'react'

export default function Review(props) {
    const star = (<img className="star" src="/star.svg"></img>);
    const halfStar = (<img className="star" src="/half-star.svg"></img>);
    const emptyStar = (<img className="star" src="/empty-star.svg"></img>);

    let rating = props.rating;
    let wholeStars = Math.floor(rating);
    let halfStars = (rating % 1 == 0) ? 0 : 1;
    let emptyStars = Math.floor(5-rating);

    return (
        <div className="card review" key={props.name}>
            <div className="rating">
                {(wholeStars > 0) ? [...Array(wholeStars)].map((e, i) => star) : ""}
                {(halfStars > 0) ? [...Array(halfStars)].map((e, i) => halfStar) : ""}
                {(emptyStars > 0) ? [...Array(emptyStars)].map((e, i) => emptyStar) : ""}
            </div>
            "{props.review}"<br></br>
            {props.name}
        </div>
    )
}