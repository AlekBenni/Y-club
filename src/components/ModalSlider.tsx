import React, {useRef, useEffect} from 'react'
import close from '.././images/service/close.png'
import {useDispatch} from 'react-redux'
import { changeModalYachtAC } from '../redux/ServiceReducer'
import { YachtType } from '../redux/PagesReducer'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

type PropsType = {
    yachts: Array<YachtType>
}

function ModalSlider(props:PropsType) {
    const closeModalYacht = useRef()
    const dispatch = useDispatch()

    const sliderResult = props.yachts.map((item:YachtType, index:number) => {
        return(
            item.imageArray.map((item:string, index:number) => {
                return(
                    <SwiperSlide key={index}>
                        <div style={{backgroundImage: `url(${item})`}} className="modal-slider__item">
                        </div>
                    </SwiperSlide>                    
                )
            })
        )
    })

    useEffect(() => {
        document.body.addEventListener('click', clickOnElement)
    })

    const clickOnElement = (event:any) => {
        if(event.path.includes(closeModalYacht.current)){
            dispatch(changeModalYachtAC(""))
        }
    }

    return (
        <div>
            <img
            //@ts-ignore
            ref={closeModalYacht}
            className="modal-close" src={close} alt=""/>
            <Swiper  className="modal-slider__wrapper"
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {sliderResult}
            </Swiper>
        </div>
    )
}

export default ModalSlider
