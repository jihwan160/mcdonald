import React from 'react'
import styled from 'styled-components'
import Gnb from '../Home/Gnb';
import Footer from '../Home/Footer';
import {useNavigate, useParams } from 'react-router-dom';
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

    & .swiper {
        &::before {
            content: '';
            position: absolute;
            top: 120px;
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
            name : '맥스파이시® 상하이 버거',
            eng : 'McSpicy®  Shanghai Burger',
            img : `${process.env.PUBLIC_URL}img/burger/detail/detail2.png`,
            alt : 'detail2',
            con : '쌀가루가 더해져 더 바삭해진 100% 닭가슴살 패티에 \n아삭아삭한 양상추와 신선한 토마토까지!\n더 바삭하고 맛있어진 NEW 맥스파이시 상하이 버거로\n입맛도 기분도 화끈하게!',
            time : '*판매 시간: 오전 10시 30분 ~ 새벽 4시'
        },  
        {
            name : '토마토 치즈 비프 버거',
            eng : 'Tomato Cheese Beef Burger',
            img : `${process.env.PUBLIC_URL}img/burger/detail/detail3.png`,
            alt : 'detail3',
            con : '신선한 토마토와 고소한 치즈버거의 조화',
            time : '*판매 시간: 오전 10시 30분 ~ 새벽 4시'
        },
        {
            name : '더블 쿼터파운더® 치즈',
            eng : 'Double Quarter Pounder® with Cheese',
            img : `${process.env.PUBLIC_URL}img/burger/detail/detail4.png`,
            alt : 'detail4',
            con : '좋아하는건 더 많이 즐기시라고,\n두 배 이상 커진 1/4 파운드비프 패티가 두 장 (226그램)!\n육즙이 풍부한 고기 맛을\n그대로 살린 100% 순 쇠고기 패티 두 장과\n치즈 두 장이 입안 가득 완벽하게 조화되는 놀라운 맛',
            time : '*판매 시간: 오전 10시 30분 ~ 새벽 4시'
        },
        {
            name : '쿼터파운더® 치즈',
            eng : 'Quarter Pounder® with Cheese',
            img : `${process.env.PUBLIC_URL}img/burger/detail/detail5.png`,
            alt : 'detail5',
            con : '쿼터파운더라는 이름에서 알 수 있듯이\n두 배 이상 커진 1/4파운드(113그램) 비프와\n부드러운 치즈 두 장의 환상궁합!\n두툼한 순 쇠고기 패티와 신선한 치즈의\n풍부한 맛으로 세계적으로 사랑받고 있는\n맥도날드의 대표적인 프리미엄 버거',
            time : '*판매 시간: 오전 10시 30분 ~ 새벽 4시'
        },
        {
            name : '빅맥®',
            eng : 'Big Mac®',
            img : `${process.env.PUBLIC_URL}img/burger/detail/detail6.png`,
            alt : 'detail6',
            con : '100% 순 쇠고기 패티 두 장에 빅맥®만의 특별한 소스.\n입안에서 살살 녹는 치즈와 신선한 양상추, 양파, 그리고 피클까지.\n50년 넘게 전 세계인의 입맛을 사로 잡은 버거의 대명사.',
            time : '*판매 시간: 오전 10시 30분 ~ 새벽 4시'
        },
        {
            name : '맥크리스피® 디럭스 버거',
            eng : 'McCrispy® Deluxe Burger',
            img : `${process.env.PUBLIC_URL}img/burger/detail/detail7.png`,
            alt : 'detail7',
            con : '100% 통닭다리살 겉바속촉 케이준 치킨 패티,\n촉촉한 포테이토 브리오쉬 번, 스페셜 스모키 소스가\n선사하는 놀랍도록 새로운 맛의 치킨 버거!',
            time : '*판매 시간: 오전 10시 30분 ~ 새벽 4시'
        },
    ]

    const BurgerDetailList = () => {

        const { index } = useParams();  // URL 파라미터로부터 이미지 인덱스를 가져옴
        const startIndex = parseInt(index, 10);  // 문자열을 숫자로 변환
        console.log(index)

        return(
            <DetailList>
                
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    className='swiper'
                    initialSlide={startIndex}  // 시작 슬라이드 인덱스 설정
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