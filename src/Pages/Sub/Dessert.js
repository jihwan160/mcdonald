import React, { useState } from 'react'
import styled from 'styled-components'
import Gnb from '../Home/Gnb';
import Footer from '../Home/Footer';
import { useNavigate } from 'react-router-dom';
import Aside from '../Home/Aside';


const VisualImg = styled.div`
    background-image: url(${process.env.PUBLIC_URL}img/burger/dessert/bg_visual_menu05.jpg);
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

const BurgerContent = styled.div`
    padding: 30px 0 60px;
    width: 1168px;
    margin: 0 auto;
    & .burgerTab {
        text-align: center;
        margin: 0 -40px 60px;
        & li {
            font-size: 20px;
            font-weight: 600;
            display: inline-block;
            margin: 0 40px;
            cursor: pointer;
        }
        .on {
            color: #db0007;
            border-bottom: 1px solid #db0007;
        }
    }
`;

const Burger3g = styled.div`
    position: relative;
    & .count {
        color: #292929;
        font-size: 18px;
        font-weight: bold;
        position: absolute;
        left: 0;
        top: -45px; 
        & p {
            display: inline-block;
        }
        &::before {
            content: '';
            display: inline-block;
            width: 6px;
            height: 6px;
            margin: 0 14px 0 0;
            vertical-align: middle;
            border-radius: 100%;
            background: #f5bd43;
        }
    }

    & .blist {
        text-align: center;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        & li {
            width: 366px;
            height: 352px;
            margin: 0 0 35px 35px;
            cursor: pointer;
            &:nth-child(3n-2) {
                margin-left: 0;
            }
            &:hover .blistArea {
                background: #fff;
                border: 1px solid #f5bd43;
            }

            & .blistArea {
                display: block;
                height: 100%;
                background: #f8f8f8;
                border-radius: 10px;
                border: 1px solid #f8f8f8;
                & .burgerimg {
                    padding: 20px 30px 0;
                }
                & .name {
                    margin-top: 16px;
                    & .tit {
                        display: block;
                        color: #292929;
                        font-size: 20px;
                        font-weight: 600;
                        line-height: 1.3;
                    }
                    & .desc {
                        display: block;
                        margin-top: 12px;
                        font-size: 15px;
                        line-height: 1.3;
                    }
                }
            }
        }
    }
    & .more {
        margin-top: 45px;
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

const Dessert = () => {

    const BurgerVisual = () => {

        const navigate = useNavigate(null);

        return(
            <>
                <VisualImg>
                    <div className='bvcon'>
                        <h2>사이드 & 디저트</h2>
                        <p>
                            가볍게 즐겨도, 버거와 함께 푸짐하게 즐겨도, <br />
                            언제나 맛있는 사이드와 디저트 메뉴!
                        </p>
                        <ul>
                            <li onClick={()=>{navigate('/')}}>Home</li>
                            <li onClick={()=>{navigate('/burger')}}>Menu</li>
                            <li onClick={()=>{navigate('/dessert')}}>사이드 & 디저트</li>
                        </ul>
                    </div>
                </VisualImg>
            </>
        )
    }

    const BurgerList = () => {

        const sidelist = [
            {
                img : `${process.env.PUBLIC_URL}img/burger/dessert/side1.png`,
                alt : 'side1',
                con1 : '뉴 1955 스낵랩',
                con2 : 'New 1955 Snack Wrap',
            },
            {
                img : `${process.env.PUBLIC_URL}img/burger/dessert/side2.png`,
                alt : 'side2',
                con1 : '맥윙™',
                con2 : 'McWings™',
            },
            {
                img : `${process.env.PUBLIC_URL}img/burger/dessert/side3.png`,
                alt : 'side3',
                con1 : '맥윙™콤보',
                con2 : 'McWings™combo',
            },
            {
                img : `${process.env.PUBLIC_URL}img/burger/dessert/side4.png`,
                alt : 'side4',
                con1 : '코울슬로',
                con2 : 'Coleslaw',
            },
            {
                img : `${process.env.PUBLIC_URL}img/burger/dessert/side5.png`,
                alt : 'side5',
                con1 : '상하이 치킨 스낵랩',
                con2 : 'Shanghai Chicken Snack Wrap',
            },
            {
                img : `${process.env.PUBLIC_URL}img/burger/dessert/side6.png`,
                alt : 'side6',
                con1 : '골든 모짜렐라 치즈스틱',
                con2 : 'Golden Mozzarella Cheese Sticks',
            },
            {
                img : `${process.env.PUBLIC_URL}img/burger/dessert/side7.png`,
                alt : 'side7',
                con1 : '후렌치 후라이',
                con2 : 'French Fries',
            },
        ]

        const dessertlist = [
            {
                img : `${process.env.PUBLIC_URL}img/burger/dessert/dessert1.png`,
                alt : 'dessert1',
                con1 : '베리 스트로베리 맥플러리',
                con2 : 'Very Strawberry McFlurry',
            },
            {
                img : `${process.env.PUBLIC_URL}img/burger/dessert/dessert2.png`,
                alt : 'dessert2',
                con1 : '오레오 맥플러리',
                con2 : 'Oreo McFlurry',
            },
            {
                img : `${process.env.PUBLIC_URL}img/burger/dessert/dessert3.png`,
                alt : 'dessert3',
                con1 : '딸기 오레오 맥플러리',
                con2 : 'Strawberry Oreo McFlurry',
            },
            {
                img : `${process.env.PUBLIC_URL}img/burger/dessert/dessert4.png`,
                alt : 'dessert4',
                con1 : '초코 오레오 맥플러리',
                con2 : 'Choco Oreo McFlurry',
            },
            {
                img : `${process.env.PUBLIC_URL}img/burger/dessert/dessert5.png`,
                alt : 'dessert5',
                con1 : '스트로베리콘',
                con2 : 'Strawberry Cone',
            },
            {
                img : `${process.env.PUBLIC_URL}img/burger/dessert/dessert6.png`,
                alt : 'dessert6',
                con1 : '아이스크림콘',
                con2 : 'Ice Cream Cone',
            },
            {
                img : `${process.env.PUBLIC_URL}img/burger/dessert/dessert7.png`,
                alt : 'dessert7',
                con1 : '바닐라 선데이 아이스크림',
                con2 : 'Vanilla Sundae',
            },
        ] 

        // 보여줄 리스트의 개수를 관리하는 상태
        const [visibleCount, setVisibleCount] = useState(6);

        // '더 보기' 버튼 클릭 시 실행될 함수
        const showMoreItems = () => {
            setVisibleCount(prevCount => prevCount + 6);
        };

        const [activeTab, setActiveTab] = useState('side');

        const handleTabClick = (tab) =>{
            setActiveTab(tab)
        }

        const handleError = () => {
            alert('준비중입니다')
        }

        const renderContent = () => {
            switch(activeTab) {
                case 'side' :
                    return renderBurger(sidelist)
                case 'dessert' :
                    return renderBurger(dessertlist)
                default :
                    return(
                        <></>
                    )
            }
        }

        const renderBurger = (items) => {
            return(
                <BurgerContent>
                    <ul className='burgerTab'>
                        <li onClick={()=>handleTabClick('side')} className={activeTab === 'side' ? 'on' : ''}>사이드</li>
                        <li onClick={()=>handleTabClick('dessert')} className={activeTab === 'dessert' ? 'on' : ''}>디저트</li>
                    </ul>
                    <Burger3g>
                        <div className='count'>
                            <p>{items.length} Products</p>
                        </div>
                        <ul className='blist'>
                            {items.slice(0,visibleCount).map((i, index) => (
                                <li key={index} onClick={()=>{handleError()}}>
                                    <div className='blistArea'>
                                        <div className='burgerimg'>
                                            <img src={i.img} alt={i.alt} />
                                        </div>
                                        <div className='name'>
                                            <p className='tit'>{i.con1}</p>
                                            <p className='eng'>{i.con2}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className='more'>
                            {visibleCount < sidelist.length && (
                                <BtnMore onClick={showMoreItems}></BtnMore>
                            )}
                        </div>
                    </Burger3g>
                </BurgerContent>
            )
        }
        return renderContent();
    }



    return (
        <>
            <Gnb />
            <BurgerVisual />
            <BurgerList />
            <Footer />
            <Aside />
        </>
    )
}

export default Dessert