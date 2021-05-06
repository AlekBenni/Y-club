import React from 'react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import {useSelector} from 'react-redux'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { RootStateType } from '../../../redux/store';
import { SlideType } from '../../../redux/MainPageReducer';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function News() {

    const slide = useSelector((state:RootStateType) => state.mainPaige.slider)

    const resultSlider = slide.map((item:SlideType, index:number) => {
        return(
            <SwiperSlide key={index}>
            <div className="main-news__slider-item">
                <div className={`main-news__slider-img ${item.style}`}></div>
                <div className="main-news__slider-content">
                    <h4>{item.title}</h4>
                    <p>{item.content}</p>
                    <a href="http://localhost:3000/">Learn more...</a>
                </div>
            </div>
            </SwiperSlide>
        )
    })

    return (
        <div className="main-news">
            <div className="main-news__top">
                <h2>We have a new <span>boat</span> </h2>
                <div className="wrap">
                    <div className="main-news__slider-wrapper">
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        >
                        {resultSlider}
                    </Swiper>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default News
