import React, {useState} from 'react'
import Header from '../../header/Header'
import {useSelector} from 'react-redux'
import { RootStateType } from '../../../redux/store'
import {ArticleType} from '../../../redux/ArticleReducer'
import Title from '../../../style_blocks/Title'
import {NavLink} from 'react-router-dom'
import { CommentType } from '../../../redux/CommentReducer'
import Pagination from '../../Pagination'

type PropsType = {
    articles: Array<ArticleType>
    comments: Array<CommentType>
}

function Articles(props:PropsType) {

    const resultArticle = props.articles.map((item:ArticleType, index:number) => {
        return (
            <div key={index} className="articles-wrapper">
            <div className="articles-img__wrapper">
                <div style={{backgroundImage: `url(${item.image})`}} className="articles-img"></div>
            </div>
            <div className="articles-content">
                <h2>{item.title}</h2>
                <div className="articles-author">
                    <h4>{item.author}</h4>
                    <span>{                      
                    item.date.slice(0, 10) + ' ' + item.date.slice(12, 16)
                    }</span>
                </div>
                <div className="articles-preview">
                    <p>{item.preview}</p>
                </div>  
                <p>Comments count: <span className="articles-comment__count">{props.comments.filter((comment:CommentType) => comment.parent === item._id).length}</span></p>
                <NavLink to={`/article/${item._id}`}>Read more...</NavLink>                
            </div>
        </div>
        )
    })

    let postPerPage = 5
    let [currentPage, setCurrentPage] = useState(1)
    let lastIndex = currentPage * postPerPage
    let firstIndex = lastIndex - postPerPage
    let totalPost = resultArticle.slice(firstIndex, lastIndex)

    const paginate = (pageNumber:number) => {
        setCurrentPage(pageNumber)
    }

    return (
        <div>
            <Header/>
            <div className="articles-block wrap">
                <div className="articles-title">
                    <Title title="Read here" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
                </div>
                {totalPost}
                <Pagination postPerPage={postPerPage} total={resultArticle.length} paginate={paginate} />
            </div>
                      
        </div>
    )
}

export default Articles
