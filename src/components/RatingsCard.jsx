import { FaRegStar, FaStar } from 'react-icons/fa'
import Rating from 'react-rating'
import { Card, Row } from 'reactstrap'

export default function RatingsCard({ data }) {
    const { username, userphoto, description, rating } = data
    return (
        <div className="ratings-container">
            <div className="d-flex align-items-center mt-1">
                <img
                    src={userphoto}
                    alt={username}
                    className="ratings-profilepic"
                />
                <b className="margin-left">{username}</b>
            </div>
            <div>
                <Rating
                    initialRating={rating}
                    emptySymbol={<FaStar color="white" className="fs-4 m-1" />}
                    fullSymbol={<FaStar color="#ffd700" className="fs-4 m-1" />}
                    readonly
                />
            </div>
            <span className="rating-description">{description}</span>
        </div>
    )
}
