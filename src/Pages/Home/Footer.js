import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'


const FooterCover = styled.div`
    background: #292929;

    & .footerArea {
        padding: 45px 0 55px;
        margin: 0 auto;
        max-width: 1168px;

        &::after {
            content: '';
            display: block;
            clear: both;
        }

        & .fUtil {
            float: left;
            width: 190px;
            & li {
                display: flex;
                flex-direction: column;
                & span {
                    font-size: 14px;
                    color: #fff;
                    font-weight: 500;
                    cursor: pointer;
                    &:nth-child(1) {
                        color: #ffff00;
                    }
                }
            }
        }

        & .fInfo {
            float: left;
            opacity: 0.6;
            & li {
                font-size: 14px;
                font-weight: 500;
                color: #fff;
            }
        }

        & .fSns {
            float: right;
            & li {
                margin-left: 20px;
                display: inline-block;
            }
        }
        
    }
`;

const Fb = styled.div`
    background-image: url(${process.env.PUBLIC_URL}img/footer/ico_sns.png);
    background-repeat: no-repeat;
    background-position: 0 0;
        width: 40px;
        height: 40px;
`;

const Insta = styled.div`
    background-image: url(${process.env.PUBLIC_URL}img/footer/ico_sns.png);
    background-repeat: no-repeat;
    background-position: 0 -40px;
        width: 40px;
        height: 40px;
`;

const Yt = styled.div`
    background-image: url(${process.env.PUBLIC_URL}img/footer/ico_sns.png);
    background-repeat: no-repeat;
    background-position: 0 -80px;
        width: 40px;
        height: 40px;
`;

const Kakao = styled.div`
    background-image: url(${process.env.PUBLIC_URL}img/footer/ico_sns.png);
    background-repeat: no-repeat;
    background-position: 0 -120px;
        width: 40px;
        height: 40px;
`;

const Wa = styled.div`
    width: 100px;
    height: 71px;
`;

    const Footer = () => {
        const handleError = () => {
            alert('준비중입니다')
        }
        const FooterTab = () => {
            return(
                <FooterCover>
                    <div className='footerArea'>
                        <ul className='fUtil'>
                            <li>
                                <span onClick={()=>{handleError()}}>개인정보 처리방침</span>
                                <span onClick={()=>{handleError()}}>위치정보 이용약관</span>
                                <span onClick={()=>{handleError()}}>사이트맵</span>
                                <span onClick={()=>{handleError()}}>임차문의</span>
                                <span onClick={()=>{handleError()}}>고객문의</span>
                                <span onClick={()=>{handleError()}}>인재채용</span>
                            </li>
                        </ul>
                        <ul className='fInfo'>
                            <li>
                                한국맥도날드(유)
                            </li>
                            <li>
                                대표이사: 김기원
                            </li>
                            <li>
                                사업자등록번호: 101-81-26409
                            </li>
                            <li>
                                전화주문: 1600-5252
                            </li>
                            <li>
                                <p>
                                    COPYRIGHT © 2019 ALL RIGHTS RESERVED BY McDonald's.
                                </p>
                            </li>
                        </ul>
                        <ul className='fSns'>
                            <li>
                                <Link to={'https://www.facebook.com/McDonaldsKorea'} target='_blink'>
                                    <Fb></Fb>
                                </Link> 
                            </li>
                            <li>
                                <Link to={'https://www.instagram.com/mcdonalds_kr/'} target='_blink'>
                                    <Insta></Insta>
                                </Link> 
                            </li>
                            <li>
                                <Link to={'https://www.youtube.com/user/McDonaldsKor'} target='_blink'>
                                    <Yt></Yt>
                                </Link> 
                            </li>
                            <li>
                                <Link to={'https://story.kakao.com/ch/mcdonalds/feed'} target='_blink'>
                                    <Kakao></Kakao>
                                </Link> 
                            </li>
                            <li>
                                <Wa>
                                    <Link to={'http://kdaa.or.kr/CertificationSite/WA/1920/Detail'} target='_blink'>
                                        <img src={`${process.env.PUBLIC_URL}img/footer/web_accessibility.png`} alt='web_accessibility' style={{height: '100%', verticalAlign:"middle"}}/>
                                    </Link> 
                                </Wa>
                            </li>
                        </ul>
                    </div>
                </FooterCover>
            )
        }
    return (
        <>
            <FooterTab />
        </>
    )
}

export default Footer