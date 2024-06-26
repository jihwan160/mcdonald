import React from 'react'
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
            & > li {
                line-height: 140px;
                padding: 0 10px;
                margin-right: 85px;
                color: #292929;
                font-weight: 600;
                font-size: 20px;
                cursor: pointer;
                position: relative;
                &::after {
                    content: '';
                    width: 100%;
                    height: 0px;
                    background: #ffbc0d;
                    display: block;
                    position: absolute;
                    left: 0;
                    bottom: -3px;
                    z-index: 3;
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
    border-top: 1px solid #000;
    border-bottom: 1px solid #ffbc0d;
    position: absolute;
    left: 0;
    top: 140px;
    display: flex;
    justify-content: center;
    display: none;
    & > ul {
        position: absolute;
        left: 33.9%;
        padding: 35px 10px 45px;
        &:nth-child(2) {
            left: 40.3%;
        }
        &:nth-child(3) {
            left: 46.2%;
        }
        &:nth-child(4) {
            left: 55%;
        }
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
`;


const Gnb = () => {

    const GnbTab = () => {
        return(
            <GnbCover>
                <div className='gnbarea w1168'>
                    <div className='logo'><img src={`${process.env.PUBLIC_URL}img/index/logo.png`} alt='logo' /></div>
                    <div className='gnbMenu'>
                        <ul>
                            <li className='a'>Menu</li>
                            <li className='a'>Store</li>
                            <li className='a'>What's NEW</li>
                            <li className='a'>Story</li>
                            <GnbSub className='gnbSub'>
                                <ul>
                                    <li><span>버거</span></li>
                                    <li><span className='noline'>맥런치</span></li>
                                    <li><span>맥모닝</span></li>
                                    <li><span className='noline'>해피 스낵</span></li>
                                    <li><span>사이드 & 디저트</span></li>
                                    <li><span>맥카페 & 음료</span></li>
                                    <li><span>해피밀</span></li>
                                </ul>
                                <ul>
                                    <li><span>매장찾기</span></li>
                                    <li><span>맥딜리버리</span></li>
                                    <li><span>맥드라이브</span></li>
                                    <li><span>임차문의</span></li>
                                </ul>
                                <ul>
                                    <li><span>프로모션</span></li>
                                    <li><span>새로운 소식</span></li>
                                    <li><span>이달의 해피밀</span></li>
                                </ul>
                                <ul>
                                    <li><span>브랜드 소개</span></li>
                                    <li><span>사회적 챔임과 지원</span></li>
                                    <li><span>맥도날드 품질 이야기</span></li>
                                    <li><span>맥도날드 사람들</span></li>
                                </ul>
                            </GnbSub>
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