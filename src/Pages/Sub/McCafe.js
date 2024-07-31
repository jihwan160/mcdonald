import React, { useState } from 'react'
import styled from 'styled-components'
import Gnb from '../Home/Gnb';
import Footer from '../Home/Footer';
import { useNavigate } from 'react-router-dom';
import Aside from '../Home/Aside';


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

const McCafe = () => {

    const BurgerVisual = () => {

        const navigate = useNavigate(null);

        return(
            <>
                <VisualImg>
                    <div className='bvcon'>
                        <h2>맥카페 & 음료</h2>
                        <p>
                            언제나 즐겁게, 맥카페와 다양한 음료를 부담없이 즐기세요!
                        </p>
                        <ul>
                            <li onClick={()=>{navigate('/')}}>Home</li>
                            <li onClick={()=>{navigate('/burger')}}>Menu</li>
                            <li onClick={()=>{navigate('/dessert')}}>맥카페 & 음료</li>
                        </ul>
                    </div>
                </VisualImg>
            </>
        )
    }

    const BurgerList = () => {

        const cafelist = [
            {
                img : `${process.env.PUBLIC_URL}img/burger/cafe/cafe1.png`,
                alt : 'cafe1',
                con1 : '영동 샤인 머스캣 맥피즈',
                con2 : 'Yeongdong Shine Muscat McFizz',
            },
            {
                img : `${process.env.PUBLIC_URL}img/burger/cafe/cafe2.png`,
                alt : 'cafe2',
                con1 : '디카페인 아이스크림 라떼',
                con2 : 'Decaffeine Ice Cream Latte',
            },
            {
                img : `${process.env.PUBLIC_URL}img/burger/cafe/cafe3.png`,
                alt : 'cafe3',
                con1 : '아이스크림 라떼',
                con2 : 'Ice Cream Latte',
            },
            {
                img : `${process.env.PUBLIC_URL}img/burger/cafe/cafe4.png`,
                alt : 'cafe4',
                con1 : '자두 천도복숭아 칠러',
                con2 : 'Plum Peach Chiller',
            },
            {
                img : `${process.env.PUBLIC_URL}img/burger/cafe/cafe5.png`,
                alt : 'cafe5',
                con1 : '제주 한라봉 칠러',
                con2 : 'Jeju Hallabong Chiller',
            },
            {
                img : `${process.env.PUBLIC_URL}img/burger/cafe/cafe6.png`,
                alt : 'cafe6',
                con1 : '바닐라 라떼',
                con2 : 'Vanilla Latte',
            },
            {
                img : `${process.env.PUBLIC_URL}img/burger/cafe/cafe7.png`,
                alt : 'cafe7',
                con1 : '아이스 바닐라 라떼',
                con2 : 'Iced Vanilla Latte',
            },
        ]

        const drinklist = [
            {
                img : `${process.env.PUBLIC_URL}img/burger/cafe/drink1.png`,
                alt : 'drink1',
                con1 : '코카-콜라',
                con2 : 'Coca-Cola',
            },
            {
                img : `${process.env.PUBLIC_URL}img/burger/cafe/drink2.png`,
                alt : 'drink2',
                con1 : '코카-콜라 제로',
                con2 : 'Coca-Cola Zero',
            },
            {
                img : `${process.env.PUBLIC_URL}img/burger/cafe/drink3.jpg`,
                alt : 'drink3',
                con1 : '스프라이트',
                con2 : 'Sprite',
            },
            {
                img : `${process.env.PUBLIC_URL}img/burger/cafe/drink4.png`,
                alt : 'drink4',
                con1 : '환타',
                con2 : 'Fanta',
            },
            {
                img : `${process.env.PUBLIC_URL}img/burger/cafe/drink5.png`,
                alt : 'drink5',
                con1 : '바닐라 쉐이크 Medium',
                con2 : 'Vanilla Shake Medium',
            },
            {
                img : `${process.env.PUBLIC_URL}img/burger/cafe/drink6.png`,
                alt : 'drink6',
                con1 : '딸기 쉐이크 Medium',
                con2 : 'Strawberry Shake Medium',
            },
            {
                img : `${process.env.PUBLIC_URL}img/burger/cafe/drink7.png`,
                alt : 'drink7',
                con1 : '초코 쉐이크 Medium',
                con2 : 'Chocolate Shake Medium',
            },
            {
                img : `${process.env.PUBLIC_URL}img/burger/cafe/drink8.png`,
                alt : 'drink8',
                con1 : '오렌지 주스',
                con2 : 'Orange Juice',
            },
            {
                img : `${process.env.PUBLIC_URL}img/burger/cafe/drink9.png`,
                alt : 'drink9',
                con1 : '생수',
                con2 : 'Mineral Water',
            },
        ] 

        // 보여줄 리스트의 개수를 관리하는 상태
        const [visibleCount, setVisibleCount] = useState(6);

        // '더 보기' 버튼 클릭 시 실행될 함수
        const showMoreItems = () => {
            setVisibleCount(prevCount => prevCount + 6);
        };

        const [activeTab, setActiveTab] = useState('cafe');

        const handleTabClick = (tab) =>{
            setActiveTab(tab)
        }

        const renderContent = () => {
            switch(activeTab) {
                case 'cafe' :
                    return renderBurger(cafelist)
                case 'drink' :
                    return renderBurger(drinklist)
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
                        <li onClick={()=>handleTabClick('cafe')} className={activeTab === 'cafe' ? 'on' : ''}>맥카페</li>
                        <li onClick={()=>handleTabClick('drink')} className={activeTab === 'drink' ? 'on' : ''}>음료</li>
                    </ul>
                    <Burger3g>
                        <div className='count'>
                            <p>{items.length} Products</p>
                        </div>
                        <ul className='blist'>
                            {items.slice(0,visibleCount).map((i, index) => (
                                <li key={index}>
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
                            {visibleCount < cafelist.length && (
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

export default McCafe