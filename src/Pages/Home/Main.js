import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation} from 'swiper';
import './Main.css'



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
    background-position: -92px -36px;
    background-repeat: no-repeat;
        width: 36px;
        height: 36px;
        position: absolute;
        left: 51%;
        transform: translate(-50%);
        bottom: 13px;
        margin-left: -183px;
        cursor: pointer;
`;


const Main = () => {

    const slidelist = [
        {
            img : `${process.env.PUBLIC_URL}img/index/slide4.jpg`,
            alt : 'slide4',
        },
        {
            img : `${process.env.PUBLIC_URL}img/index/slide5.jpg`,
            alt : 'slide5',
        },
        {
            img : `${process.env.PUBLIC_URL}img/index/slide6.jpg`,
            alt : 'slide6',
        },
        {
            img : `${process.env.PUBLIC_URL}img/index/slide7.jpg`,
            alt : 'slide7',
        },
        {
            img : `${process.env.PUBLIC_URL}img/index/slide8.jpg`,
            alt : 'slide8',
        },
        {
            img : `${process.env.PUBLIC_URL}img/index/slide9.jpg`,
            alt : 'slide9',
        },
        {
            img : `${process.env.PUBLIC_URL}img/index/slide10.jpg`,
            alt : 'slide10',
        },
        {
            img : `${process.env.PUBLIC_URL}img/index/slide11.jpg`,
            alt : 'slide11',
        },
        {
            img : `${process.env.PUBLIC_URL}img/index/slide12.jpg`,
            alt : 'slide12',
        },
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

    // 게이지바 만드는 법
    const SlideProgressBar = ({ duration, isActive }) => {
        const [progress, setProgress] = useState(0);
        
            useEffect(() => {
            if (!isActive) {
                setProgress(0);
                return;
            }
        
            setProgress(0); // 슬라이드가 활성화될 때 진행률 초기화
        
            const interval = setInterval(() => {
                setProgress(prev => (prev < 100 ? prev + (100 / (duration / 10)) : 100));
            }, 10); // 10ms 간격으로 업데이트
        
            return () => clearInterval(interval);
            }, [isActive, duration]);
        
            return (
            <div className="slide-progress-bar">
                <div
                className="slide-progress-bar-fill"
                style={{ width: `${progress}%` }}
                />
            </div>
            );
        };

    const Slide = () => {

        const duration = 4500; // 각 슬라이드 유지 시간 (밀리초)
        const [activeIndex, setActiveIndex] = useState(0);

        return(
            <SwiperArea>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    className='swiper'
                    loop
                    // 오토플레이가 이렇게 했는데도 안되서 모듈에 직접 오토플레이를 추가했다
                    autoplay={{
                        delay: duration,
                        disableOnInteraction: false,
                    }}
                    onSlideChange={(swiper) => {
                        setActiveIndex(swiper.realIndex); // 현재 슬라이드 인덱스 업데이트
                    }}
                >
                {slidelist.map((i, index) => (
                    <SwiperSlide className='slide' key={index}>
                        <div style={{height : '100%'}}>
                            <img src={i.img} alt={i.alt} />
                            <Background></Background>
                            <SlideProgressBar duration={4000} isActive={index === activeIndex} />
                        </div>
                    </SwiperSlide>
                    
                ))}
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