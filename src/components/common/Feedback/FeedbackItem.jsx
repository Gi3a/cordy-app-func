import React from "react";

import styles from "./Feedback.module.scss";

import { FaStarHalfAlt, FaStar, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const FeedbackItem = ({ id, user_id, date, text, name, avatar, rating }) => {


    return (
        <div className={styles.feedback_item}>
            <div className={styles.feedback_item_avatar}>
                <img src={`${avatar}`} alt="avatar" />
            </div>
            <div className={styles.feedback_item_description}>
                <div className={styles.feedback_item_rating}>
                    <span>
                        <Link to={`/${user_id}`}>
                            {name}
                        </Link>
                    </span>
                    <span>
                        {parseInt(rating) <= 2.5 ?
                            parseInt(rating) == 0 ?
                                <FaRegStar />
                                :
                                <FaStarHalfAlt />
                            :
                            <FaStar />
                        }
                        {rating}
                    </span>
                </div>
                <span>{date}</span>
                <span>{text}</span>
            </div>
        </div >
    )
}

export default FeedbackItem