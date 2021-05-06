import React, {useState} from 'react'
import { ChangeEvent } from 'react'
import { CommentType } from '../../redux/CommentReducer'
import{useDispatch} from 'react-redux'
import { sendCommentTC } from '../../actions/comments'

type PropsType = {
    soughtElement: string
    comments: Array<CommentType>
}

function Comments(props:PropsType) {

    const dispatch = useDispatch()

    let soughtComments = props.comments.filter((item:CommentType) => item.parent === props.soughtElement)

    let resultComments = soughtComments.map((item:CommentType, index:number) => {
        return(
            <div key={index} className="comment-wrapper">
                <p>{item.author} <span>{item.date.slice(0, 10) + ' ' + item.date.slice(12, 16)}</span></p>
                <p>{item.comment}</p>
            </div>
        )
    })

    const [name, setName] = useState("")
    const [comment, setComment] = useState("")

    let commentHandler = () => {
        dispatch(sendCommentTC(props.soughtElement, name, comment))
        setName("")
        setComment("")
    }

    return (
        <div className="comment-block wrap">
            <h2>Comments:</h2>
            {resultComments}
            <h2>Leave your comment:</h2>
            <input value={name} onChange={(e:ChangeEvent<HTMLInputElement>) => setName(e.currentTarget.value)}
            placeholder="Enter your name:" type="text" className="comment__input" />
            <textarea value={comment} onChange={(e:ChangeEvent<HTMLTextAreaElement>) => setComment(e.currentTarget.value)}
            placeholder="Enter your comment:" className="comment__textarea" name="" id="" ></textarea>
            <div className="comment__button-wrapper">
            <button
                onClick = {() => commentHandler()}
                className="comment__button">Send message</button>
            </div>
        </div>
    )
}

export default Comments
