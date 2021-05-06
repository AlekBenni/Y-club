import React, {useState, ChangeEvent} from 'react'
import { YachtType } from '../../../redux/PagesReducer'
import {useDispatch} from 'react-redux'
import { getYachtsTC, setCommentsTC } from '../../../actions/yachts'

type PropsType = {
    yacht: Array<YachtType>
}

function CommentPage(props:PropsType) {

    const dispatch = useDispatch()

    const [comment, setComment] = useState("")

    let resultComment = props.yacht.map((item:YachtType, index:number) => {
        return(            
                item.comments.map((item:string, index: number) => {
                    return( 
                        <div key={index} className="comment-page__element">
                             {item} 
                        </div>
                    )
                })
            )
        })

    let arrayComments:Array<string> = []

    let id:string 

    let resultId = props.yacht.map((item:YachtType, index:number) => {
        return(           
            id = item._id
        )
    })

    let resultComments = props.yacht.map((item:YachtType, index:number) => {
        return(           
            item.comments.map((item:string, index: number) => {
                arrayComments.push(item)
            })           
        )
    })

    let commentHandler = () => {
        if(comment.length > 1){
        arrayComments.push(comment)
        setComment('')
        dispatch(setCommentsTC(id, arrayComments))
        dispatch(getYachtsTC())            
        }else{
            alert("Comment must be more then 0 symbols")
        }
    }

    return (
        <div className="comment-page__wrapper">
            <h2>Comments:</h2>
            {resultComment}
            <h2>Leave your comment:</h2>
            <textarea
            value = {comment} onChange={(e:ChangeEvent<HTMLTextAreaElement>) => setComment(e.currentTarget.value)}
            className="comment-page__textarea" name="" id="" ></textarea>
            <div className="comment-page__button-wrapper">
                <button
                onClick = {() => commentHandler()}
                className="comment-page__button">Send message</button>
            </div>
        </div>
    )
}

export default CommentPage
