import React from 'react'
import Title from '../../../style_blocks/Title'
import {useSelector} from "react-redux"
import { RootStateType } from '../../../redux/store'
import { AuthorType } from '../../../redux/MainPageReducer'

function Author() {

    const authors = useSelector((state:RootStateType) => state.mainPaige.author)

    const resultAuthors = authors.map((item:AuthorType, index:number) => {
        return(
            <div className="main-author__wrapper" key={index}>
            <div className={`main-author__img ${item.style}`}></div>
            <h4>{item.name}</h4>
            <p>{item.content}</p>
            <div className="main-author__social">
                <p>Follow:</p>
                <a href="http://localhost:3000/">
                    <i className="fab fa-facebook"></i>
                </a>
                <a href="http://localhost:3000/">
                    <i className="fab fa-google"></i>
                </a>
                <a href="http://localhost:3000/">
                    <i className="fab fa-youtube"></i>
                </a>
                <a href="http://localhost:3000/">
                    <i className="fab fa-tiktok"></i>
                </a>
                <a href="http://localhost:3000/">
                    <i className="fab fa-pinterest-p"></i>
                </a>   
            </div>
        </div>
        )
    })

    return (
        <div className="wrap">
            <Title title="our authors" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
        <div className="main-author">
            {resultAuthors}
        </div>
        </div>
    )
}

export default Author
