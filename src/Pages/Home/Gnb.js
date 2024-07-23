import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'




const GnbCover = styled.div`
    border-bottom: 1px solid #ffbc0d;
    position: relative;
    & .logo {
        cursor: pointer;
    }

    & .gnbarea {
        display: flex;
        align-items: center;
    }
    & .gnbMenu {
        display: flex;
        align-items: center;
        & > ul {
            display: flex;
            align-items: center;
            margin-left: 60px;
            &:hover .gnbSub{
                display: flex;
            }
            &:hover .gnbsublist {
                display: block;
            }
            & > li {
                position: relative;
                cursor: pointer;
                padding: 0 10px;
                margin-right: 85px;
                & .gnbTitle {
                    line-height: 140px;
                    color: #292929;
                    font-weight: 600;
                    font-size: 20px;
                    cursor: pointer;
                }

                & > .gnbsublist {
                        position: absolute;
                        top: 140px;
                        padding: 35px 10px 45px 4px;
                        z-index: 999;
                        display: none;
                        & > li {
                            margin-bottom: 10px;
                            & span {
                                cursor: pointer;
                                padding-bottom: 4px;
                                color: gray;
                                font-weight: 600;
                                &:hover {
                                    color: #292929;
                                    border-bottom: 1px solid #000;
                                }
                            }
                            & .noline {
                                    color: gray !important;
                                    border-bottom: none !important;
                            }
                        }
                    }
                &::after {
                    content: '';
                    width: 100%;
                    height: 0px;
                    background: #ffbc0d;
                    display: block;
                    position: absolute;
                    left: 0;
                    bottom: -4px;
                    z-index: 999;
                }
                &:hover::after{
                    height: 3px;
                }
            }
        }
    }
    & .gnbbtnlist {
        display: flex;
        align-items: center;
    }
    & .search_ico {
        margin-left: 26px;
        display: flex;
        align-items: center;
        cursor: pointer;
    }
`;

const GnbBtn = styled.button`
    background: #db0007;
    width: 80px;
    height: 36px;
    border-radius: 48px;
    color: #fff;
    font-weight: 600;
    margin-right: 4px;
    font-size: 13px;
    font-family: "Nanum Gothic", sans-serif;
    cursor: pointer;
    &:nth-child(2) {
        background: #d87e00;
    }
    &:nth-child(3) {
        background: #264a36;
    }
`;

const GnbSub = styled.div`
    width: 100%;
    height: 360px;
    background: #fff;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ffbc0d;
    position: absolute;
    left: 0;
    top: 140px;
    display: flex;
    justify-content: center;
    display: none;
    z-index: 99;
`;


const Gnb = () => {

    const GnbTab = () => {

        const navigate = useNavigate(null);

        return(
            <GnbCover>
                <div className='gnbarea w1168'>
                    <div className='logo' onClick={()=>{navigate('/')}}><img src={`${process.env.PUBLIC_URL}img/index/logo.png`} alt='logo' /></div>
                    <div className='gnbMenu'>
                        <ul>
                            <li>
                                <span className='gnbTitle' onClick={()=>{navigate('/burger')}}>Menu</span>
                                <ul className='gnbsublist' style={{width : "120px"}}>
                                    <li onClick={()=>{navigate('/burger')}}><span>버거</span></li>
                                    <li onClick={()=>{navigate('/lunch')}}><span className='noline'>맥런치</span></li>
                                    <li onClick={()=>{navigate('/morning')}}><span>맥모닝</span></li>
                                    <li><span className='noline'>해피 스낵</span></li>
                                    <li><span>사이드 & 디저트</span></li>
                                    <li><span>맥카페 & 음료</span></li>
                                    <li><span>해피밀</span></li>
                                </ul>
                            </li>
                            <li>
                                <span className='gnbTitle'>Store</span>
                                <ul className='gnbsublist' style={{width : "80px"}}>
                                    <li><span>매장찾기</span></li>
                                    <li><span>맥딜리버리</span></li>
                                    <li><span>맥드라이브</span></li>
                                    <li><span>임차문의</span></li>
                                </ul>
                            </li>
                            <li>
                                <span className='gnbTitle'>What's NEW</span>
                                <ul className='gnbsublist'>
                                    <li><span>프로모션</span></li>
                                    <li><span>새로운 소식</span></li>
                                    <li><span>이달의 해피밀</span></li>
                                </ul>
                            </li>
                            <li>
                                <span className='gnbTitle'>Story</span>
                                <ul className='gnbsublist' style={{width : "153px"}}>
                                    <li><span>브랜드 소개</span></li>
                                    <li><span>사회적 챔임과 지원</span></li>
                                    <li><span>맥도날드 품질 이야기</span></li>
                                    <li><span>맥도날드 사람들</span></li>
                                </ul>
                            </li>
                            <GnbSub className='gnbSub'></GnbSub>
                        </ul>
                        <div className='gnbbtnlist'>
                            <GnbBtn>임차문의</GnbBtn>
                            <GnbBtn>RECRUIT</GnbBtn>
                            <GnbBtn>ENG</GnbBtn>
                        </div>
                        <div className='search_ico'><img src={`${process.env.PUBLIC_URL}img/index/search.png`} alt='search' /></div>
                    </div>
                </div>
            </GnbCover>
        )
    }

    return (
        <>
            <GnbTab />
        </>
    )
}

export default Gnb