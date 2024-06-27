import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper';



import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styled from 'styled-components';


const SwiperArea = styled.div`
    width: 100%;
    height: 100%;

    & .swiper {
        max-width: 1920px;
        height: 540px;

        & .slide {
            position: relative;

            & .stopbtn {
                width: 36px;
                height: 36px;
                position: absolute;
                left: 0;
                top: 0;
                & > img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }


`;

const Background = styled.div`
    background-image: url(${process.env.PUBLIC_URL}/img/index/swiperbtn.png);
    background-position: -92px 0;
    background-repeat: no-repeat;
        width: 36px;
        height: 36px;
        position: absolute;
        left: 51%;
        transform: translate(-50%);
        bottom: 13px;
        margin-left: -183px;
`;


const Main = () => {

    const slidelist = [
        {
            img : `${process.env.PUBLIC_URL}img/index/slide1.jpg`,
            alt : 'slide1',
        },
        {
            img : `${process.env.PUBLIC_URL}img/index/slide2.jpg`,
            alt : 'slide2',
        },
        {
            img : `${process.env.PUBLIC_URL}img/index/slide3.jpg`,
            alt : 'slide3',
        },
    ]

    const Slide = () => {
        return(
            <SwiperArea>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    className='swiper'
                >
                {slidelist.map((i, index) => (
                    <SwiperSlide className='slide' key={index}>
                        <div>
                            <img src={i.img} alt={i.alt} />
                            <Background></Background>
                        </div>
                    </SwiperSlide>
                    
                ))}
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                </Swiper>
            </SwiperArea>
        )
    }


    return (
        <>
            <Slide />
        </>
    )
}

export default Main