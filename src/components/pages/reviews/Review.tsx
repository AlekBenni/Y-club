import React from 'react'
import Header from '../../header/Header'
import {useSelector} from 'react-redux'
import { RootStateType } from '../../../redux/store'
import { ReviewsType } from '../../../redux/ReviewsReducer'
import {NavLink} from 'react-router-dom'
import Title from '../../../style_blocks/Title'

function Review() {
    const reviews = useSelector((state:RootStateType) => state.reviews.reviews)
    const resultReviews = reviews.map((item:ReviewsType, index:number) => {
        return(
            <div key={index} className="reviews-element">
                <div className="reviews-inner">
                    <h4>{item.title}</h4>      
                    <iframe src={item.video[0]} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>                        
                    <p>{item.preview}</p>
                    <NavLink className="reviews-btn" to={`/video/${item._id}`}>Watch all</NavLink>
                </div>
            </div>
        )
    })
    console.log(reviews)
    return (
        <div>
            <Header/>            
            <div className="wrap">
            <Title title="Reviews" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." /> 

                <div className="reviews-wrapper">
                    {resultReviews}
                </div>               
            </div>           
        </div>
    )
}

export default Review
