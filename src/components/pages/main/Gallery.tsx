import React from 'react'
import {useSelector} from 'react-redux'
import { GalleryType } from '../../../redux/MainPageReducer'
import { RootStateType } from '../../../redux/store'
import Title from '../../../style_blocks/Title'

function Gallery() {

    const img = useSelector((state:RootStateType) => state.mainPaige.gallery)

    let resultImg = img.map((item:GalleryType, index:number) => {
        return(
            <div className="main-gallery-element">
                <div key={index} style={{backgroundImage: `url(${item.img})`}} className="main-gallery__img">
                    <div className="main-gallery-element__content">
                        <h4>{item.title}</h4>
                        <div className="main-gallery-element__author">
                            <p>{item.author}</p>
                            <p>{item.date}</p>
                        </div>
                        <p>{item.text}</p>
                        <div className="main-gallery-element__social">
                            <div className="main-gallery-element__social-top">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <div className="main-gallery-element__social-icons">
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
                    </div>

                </div>
            </div>
        )
    })

    return (
        <div className="main-gallery">
            <Title title="Our gallery" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
            <div className="main-gallery__blocks">
                {resultImg}
            </div>
        </div>
    )
}

export default Gallery
