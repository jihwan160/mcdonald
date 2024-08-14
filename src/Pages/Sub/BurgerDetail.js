import React from 'react'
import styled from 'styled-components'
import Gnb from '../Home/Gnb';
import Footer from '../Home/Footer';
import {useNavigate } from 'react-router-dom';
import Aside from '../Home/Aside';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const VisualImg = styled.div`
    background-image: url(${process.env.PUBLIC_URL}img/burger/bg_visual_menu01.jpg);
    background-repeat: no-repeat;
    background-position: 50% 50%;
    height: 220px;
    margin: 0 auto;
    position: relative;

    &::before {
        content: '';
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.45);
        position: absolute;
        left: 0;
        top: 0;
    }

    & .bvcon {
        position: relative;
        z-index: 3;
        width: 1168px;
        height: 220px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #fff;
        & h2 {
            color: #fff;
            font-size: 50px;
        }
        & p {
            font-weight: 500;
            font-size: 18px;
        }
        & ul {
            display: flex;
            align-items: center;
            & li {
                cursor: pointer;
                &:nth-child(2)::before,
                &:nth-child(3)::before {
                    content: '';
                    display: inline-block;
                    width: 6px;
                    height: 6px;
                    margin: 0 14px 0 10px;
                    vertical-align: middle;
                    border-radius: 100%;
                    background: #f5bd43;
                }
            }
        }
    }
`;


const DetailList = styled.div`
    max-width: 1168px;
    margin: 0 auto;
    height: 100%;
    padding: 30px 0 60px;
    & .bgname {
        text-align: center;
        & h2 {
            font-size: 35px;
            color: #292929;
            margin: 0;
        }
        & p {
            font-size: 20px;
            display: block;
        }
    }

    & .detailImg {
        & img::before {
            content: '';
            position: absolute;
            top: 20px;
            left: 345px;
            width: 300px;
            height: 300px;
            border-radius: 100%;
            background: #f5f5f5;
        }
    }

    & .con {
        text-align: center;
        white-space: pre-line;
    }

`


const BurgerDetail = () => {

    const BurgerVisual = () => {

        const navigate = useNavigate(null);

        return(
            <>
                <VisualImg>
                    <div className='bvcon'>
                        <h2>버거</h2>
                        <p>
                            빅맥<sub>®</sub>에서 맥스파이시<sub>®</sub>상하이버거까지 <br />
                            주문 즉시 바로 조리해 더욱 맛있는, 맥도날드의 다양한 버거를 소개합니다.
                        </p>
                        <ul>
                            <li onClick={()=>{navigate('/')}}>Home</li>
                            <li onClick={()=>{navigate('/burger')}}>Menu</li>
                            <li onClick={()=>{navigate('/burger')}}>버거</li>
                        </ul>
                    </div>
                </VisualImg>
            </>
        )
    }

    const slideburgerlist = [
        {
            name : '진주 고추 크림치즈 버거',
            eng : 'Jinju Pepper Cream Cheese Burger',
            img : `${process.env.PUBLIC_URL}img/burger/detail/detail1.png`,
            alt : 'detail1',
            con : '더 바삭해진 매콤한 상하이 치킨 패티와 \n고소한 진도 대파 크림 크로켓의 만남으로 더 맛있게!',
            time : '*판매 시간: 오전 10시 30분 ~ 새벽 4시'
        },
        {
            name : '크림치즈 버거',
            eng : 'Jinju Pepper Cream Cheese Burger',
            img : `${process.env.PUBLIC_URL}img/burger/detail/detail2.png`,
            alt : 'detail2',
            con : '더 바삭해진 매 패티와 \n고소한 진도 대파 크림 크로켓의 만남으로 더 맛있게!',
            time : '*판매 시간: 오전 10시 30분 ~ 새벽 4시'
        },
        {
            img : `${process.env.PUBLIC_URL}img/burger/detail/detail3.png`,
            alt : 'detail3',
        },
        {
            img : `${process.env.PUBLIC_URL}img/burger/detail/detail4.png`,
            alt : 'detail4',
        },
        {
            img : `${process.env.PUBLIC_URL}img/burger/detail/detail5.png`,
            alt : 'detail5',
        },
        {
            img : `${process.env.PUBLIC_URL}img/burger/detail/detail6.png`,
            alt : 'detail6',
        },
        {
            img : `${process.env.PUBLIC_URL}img/burger/detail/detail7.png`,
            alt : 'detail7',
        },
    ]

    const BurgerDetailList = () => {

        // const location = useLocation();
        // const {loctitle, loceng} = location.state || {};


        return(
            <DetailList>
                
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    className='swiper'
                >
                {slideburgerlist.map((i, index) => (
                    <SwiperSlide key={index}>
                        <div className='bgname'>
                            <h2>{i.name}</h2>
                            <p>{i.eng}</p>
                        </div>
                        <div className='detailImg' style={{textAlign:'center'}}>
                            <img src={i.img} alt={i.alt} style={{width:'50%'}}/>
                        </div>
                        <div className='con'>
                            {i.con} <br /><br />
                            {i.time}
                        </div>
                    </SwiperSlide>
                    
                ))}
                </Swiper>
                
            </DetailList>
        )
    }



    return (
        <>
            <Gnb />
            <BurgerVisual />
            <BurgerDetailList />
            <Footer />
            <Aside />
        </>
    )
}

export default BurgerDetail