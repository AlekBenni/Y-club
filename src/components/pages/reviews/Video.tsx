import React from 'react'
import Header from '../../header/Header'
import {useParams} from 'react-router-dom'
import { ReviewsType } from '../../../redux/ReviewsReducer'
import { CommentType } from '../../../redux/CommentReducer'
import Divider from '../../../style_blocks/Divider'
import Comments from '../Comment'

type PropsType = {
    reviews: Array<ReviewsType>
    comments: Array<CommentType>
}

function Video(props:PropsType) {
    let {...videoId} = useParams()
    //@ts-ignore
    let soughtVideo = props.reviews.filter((item:ReviewsType) => item._id === videoId.id)
    let resultVideo = soughtVideo.map((item:ReviewsType, index:number) => {
        return(
            <div className="video-block">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <Divider/>
                <div className="video-wrapper">
                    {item.video.map((item:string, index:number) => {
                        return(
                            <div className="video">
                                <iframe src={item} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>                        
                            </div>
                        )
                    })}
                </div>                
            </div>
        )
    })

    const soughtElement = soughtVideo.map((item:ReviewsType, index:number) => item._id)

    return (
        <div>
            <Header/>
            <div className="video-page wrap">
                {resultVideo}
                <Comments
                    soughtElement={soughtElement[0]}
                    comments={props.comments}
                />
            </div>           
        </div>
    )
}

export default Video
