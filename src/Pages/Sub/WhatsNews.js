import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Gnb from '../Home/Gnb';
import Footer from '../Home/Footer';
import Aside from '../Home/Aside';

const VisualImg = styled.div`
    background-image: url(${process.env.PUBLIC_URL}img/news/bg_visual_whats01.jpg);
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
            margin-bottom: 20px;
            margin-top: 50px;
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
        margin-top: 45px;
        text-align: center;
    }
`;

const WhatsNews = () => {

    const BurgerVisual = () => {

        const navigate = useNavigate(null);

        return(
            <>
                <VisualImg>
                    <div className='bvcon'>
                        <h2>맥도날드 프로모션</h2>
                        <ul>
                            <li onClick={()=>{navigate('/')}}>Home</li>
                            <li onClick={()=>{navigate('/whats')}}>What's New </li>
                            <li onClick={()=>{navigate('/whats')}}>맥도날드 프로모션</li>
                        </ul>
                    </div>
                </VisualImg>
            </>
        )
    }

    const WhatsNew = () => {

        const initialList = [
            {
                img : `${process.env.PUBLIC_URL}img/news/news1.png`,
                alt : 'news1',
                con : '맥드라이브 썸머페스타!',
            },
            {
                img : `${process.env.PUBLIC_URL}img/news/news2.jpg`,
                alt : 'news2',
                con : '쌀가루로 더 바삭해진 NEW 맥스파이시!',
            },
            {
                img : `${process.env.PUBLIC_URL}img/news/news3.jpg`,
                alt : 'news3',
                con : '신선한 토마토와 고소한 치즈버거의 조화!',
            },
            {
                img : `${process.env.PUBLIC_URL}img/news/news4.jpg`,
                alt : 'news4',
                con : '가성비 간식 맛집 맥도날드 해피스낵!',
            },
            {
                img : `${process.env.PUBLIC_URL}img/news/news5.jpg`,
                alt : 'news5',
                con : '겉바속쫄 맥윙은 못참지! 오늘부터 1일 1맥윙!',
            },
            {
                img : `${process.env.PUBLIC_URL}img/news/news6.jpg`,
                alt : 'news6',
                con : '상콤달콤! NEW 자두 천도복숭아 칠러 출시!',
            },
        ]
        
        return(
            <ContentCover>
                <Content>
                    <h2 className='maintit'>McDonald's LIVE</h2>
                    <ul className='cardListcol'>
                        {initialList.map((i, index) => (
                            <li className='cardList' key={index}>
                                <div>
                                    <img src={i.img} alt={i.alt}/>
                                </div>
                                <div className='con'>
                                    {i.con}
                                </div>
                            </li>
                        ))}
                    </ul>
                </Content>
            </ContentCover>
        )
    }

    return (
        <>
            <Gnb />
            <BurgerVisual />
            <WhatsNew />
            <Footer />
            <Aside />
        </>
    )
}

export default WhatsNews