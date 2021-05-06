import React from 'react'
import { ArticleType } from '../../../redux/ArticleReducer'
import { CommentType } from '../../../redux/CommentReducer'
import Footer from '../../footer/Footer'
import Header from '../../header/Header'
import {useParams} from 'react-router-dom'
import Divider from '../../../style_blocks/Divider'
import Comments from '../Comment'

type PropsType = {
    articles: Array<ArticleType>
    comments: Array<CommentType>
}

function Article(props:PropsType) {

    const {...articleId} = useParams()

    //@ts-ignore
    const soughtArticle = props.articles.filter(item => item._id === articleId.id)

    const resultArticle = soughtArticle.map((item:ArticleType, index:number) => {
        return(
            <div key={index} className="article-wrapper">
                <div className="article-title">
                    <h1>{item.title}</h1>
                </div>               
                <Divider/>
                <div className="article-content">
                    <div style={{backgroundImage: `url(${item.image})`}} className="article-img"></div>
                    <p className="article-author"><span>Author:</span>  {item.author} </p>
                    <p className="article-author"><span>Date:</span>  {item.date.slice(0, 10) + ' ' + item.date.slice(12, 16)}</p>
                    <p className="article-paragraph">{item.content}</p>
                    <p className="article-paragraph">{item.content}</p>
                </div>
                <div className="clear"></div>
            </div>
        )
    })


    let soughtElement = soughtArticle.map((item:ArticleType, index:number) => item._id)

    return (
        <div>
            <Header/>
            <div className="wrap">
                {resultArticle}
                <Comments
                soughtElement={soughtElement[0]}
                comments={props.comments}
                />
            </div>
        </div>
    )
}

export default Article
