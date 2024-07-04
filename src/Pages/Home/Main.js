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
    position: relative;
    top: -1px;
    z-index: 9;
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


const ContentCover = styled.div`
    padding: 30px 0 60px;
`;

const Content = styled.div`
    max-width: 1168px;
    margin: 0 auto;

    & .maintit {
        font-size: 40px;
        font-weight: 600;
        line-height: 1;
        margin: 0 0 60px;
        color: #292929;
    }

    & .cardListcol {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 35px;
        & .cardList {
            width: 366px;
            height: 438px;
            margin: 0 0 35px;
            border-radius: 10px;
            background-color: #fff;
            box-shadow: 0 3px 4px rgba(0,0,0,.1);
            overflow: hidden;
            cursor: pointer;

            & .con {
                padding: 24px 30px;
                font-size: 17px;
                color: #292929;
                font-weight: bold;
                line-height: 1.7;
            }
        }
    }

    
    & .more {
        margin-top: 80px;
        text-align: center;
    }
`;

const BtnMore = styled.div`
    background-image: url(${process.env.PUBLIC_URL}img/main/btn_more.png);
    background-position: 0 0;
    background-repeat: no-repeat;
        width: 90px;
        height: 90px;
        display: inline-block;
        overflow: hidden;
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
                            <img src={i.img} alt={i.alt}  style={{cursor : 'pointer'}}/>
                            <Background></Background>
                            <SlideProgressBar duration={4000} isActive={index === activeIndex} />
                        </div>
                    </SwiperSlide>
                    
                ))}
                </Swiper>
            </SwiperArea>
        )
    }

    const MainContent = () => {
        return(
            <ContentCover>
                <Content>
                    <h2 className='maintit'>McDonald's LIVE</h2>
                    <ul className='cardListcol'>
                        <li className='cardList'>
                            <div>
                                <img src={`${process.env.PUBLIC_URL}img/main/cardlist1.png`} alt='cardlist1'/>
                            </div>
                            <div className='con'>
                                버거 세트 구매시 <br />
                                사이드 무료 교환 안내
                            </div>
                        </li>
                        <li className='cardList'>
                            <div>
                                <img src={`${process.env.PUBLIC_URL}img/main/cardlist2.jpg`} alt='cardlist2'/>
                            </div>
                            <div className='con'>
                                NEW 맥스파이시 상하이를 만나보세요!
                            </div>
                        </li>
                        <li className='cardList'>
                            <div>
                                <img src={`${process.env.PUBLIC_URL}img/main/cardlist3.jpg`} alt='cardlist3'/>
                            </div>
                            <div className='con'>
                                쌀가루로 더 바삭해진 NEW 맥스파이시!
                            </div>
                        </li>
                        <li className='cardList'>
                            <div>
                                <img src={`${process.env.PUBLIC_URL}img/main/cardlist4.jpg`} alt='cardlist4'/>
                            </div>
                            <div className='con'>
                                빠삭하게 빠져드는 맛,<br />
                                맥크리스피!
                            </div>
                        </li>
                        <li className='cardList'>
                            <div>
                                <img src={`${process.env.PUBLIC_URL}img/main/cardlist5.jpg`} alt='cardlist5'/>
                            </div>
                            <div className='con'>
                                가성비 간식 맛집<br />
                                맥도날드 해피스낵!
                            </div>
                        </li>
                        <li className='cardList'>
                            <div>
                                <img src={`${process.env.PUBLIC_URL}img/main/cardlist6.jpg`} alt='cardlist6'/>
                            </div>
                            <div className='con'>
                                겉은 바삭! 속은 쫄깃<br />
                                여름엔 역시 맥윙!
                            </div>
                        </li>
                    </ul>
                    <div className='more'>
                        <BtnMore></BtnMore>
                    </div>
                </Content>
            </ContentCover>
        )
    }


    return (
        <>
            <Slide />
            <MainContent />
        </>
    )
}

export default Main