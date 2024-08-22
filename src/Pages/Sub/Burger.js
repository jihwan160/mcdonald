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

const Burger = () => {

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

    const BurgerList = () => {

        const alonelist = [
            {
                img : `${process.env.PUBLIC_URL}img/burger/blist1.png`,
                alt : 'blist1',
                con1 : '진주 고추 크림치즈 버거',
                con2 : 'Jinju Pepper Cream Cheese Burger',
            },
            {
                img : `${process.env.PUBLIC_URL}img/burger/blist2.png`,
                alt : 'blist2',
                con1 : '맥스파이시® 상하이 버거',
                con2 : 'McSpicy®  Shanghai Burger',
            },
            {
                img : `${process.env.PUBLIC_URL}img/burger/blist3.png`,
                alt : 'blist3',
                con1 : '토마토 치즈 비프 버거',
                con2 : 'Tomato Cheese Beef Burger',
            },
            {
                img : `${process.env.PUBLIC_URL}img/burger/blist4.png`,
                alt : 'blist4',
                con1 : '더블 쿼터파운더® 치즈',
                con2 : 'Double Quarter Pounder® with Cheese',
            },
            {
                img : `${process.env.PUBLIC_URL}img/burger/blist5.png`,
                alt : 'blist5',
                con1 : '쿼터파운더® 치즈',
                con2 : 'Quarter Pounder® with Cheese',
            },
            {
                img : `${process.env.PUBLIC_URL}img/burger/blist6.png`,
                alt : 'blist6',
                con1 : '빅맥®',
                con2 : 'Big Mac®',
            },
            {
                img : `${process.env.PUBLIC_URL}img/burger/blist7.png`,
                alt : 'blist7',
                con1 : '맥크리스피® 디럭스 버거',
                con2 : 'McCrispy® Deluxe Burger',
            },
        ]


        const setlist = [
            {
                img : `${process.env.PUBLIC_URL}img/burger/setlist1.png`,
                alt : 'blist1',
                con1 : '진주 고추 크림치즈 버거 세트',
                con2 : 'Jinju Pepper Cream Cheese Burger Meal',
            },
            {
                img : `${process.env.PUBLIC_URL}img/burger/setlist2.png`,
                alt : 'blist2',
                con1 : '맥스파이시® 상하이 버거 세트',
                con2 : 'McSpicy®  Shanghai Burger Meal',
            },
            {
                img : `${process.env.PUBLIC_URL}img/burger/setlist3.png`,
                alt : 'blist3',
                con1 : '토마토 치즈 비프 버거 세트',
                con2 : 'Tomato Cheese Beef Burger Meal',
            },
            {
                img : `${process.env.PUBLIC_URL}img/burger/setlist4.png`,
                alt : 'blist4',
                con1 : '더블 쿼터파운더® 치즈 세트',
                con2 : 'Double Quarter Pounder® with Cheese Meal',
            },
            {
                img : `${process.env.PUBLIC_URL}img/burger/setlist5.png`,
                alt : 'blist5',
                con1 : '쿼터파운더® 치즈 세트',
                con2 : 'Quarter Pounder® with Cheese Meal',
            },
            {
                img : `${process.env.PUBLIC_URL}img/burger/setlist6.png`,
                alt : 'blist6',
                con1 : '빅맥® 세트',
                con2 : 'Big Mac® Meal',
            },
            {
                img : `${process.env.PUBLIC_URL}img/burger/setlist7.png`,
                alt : 'blist7',
                con1 : '맥크리스피® 디럭스 버거 세트',
                con2 : 'McCrispy® Deluxe Burger Meal',
            },
        ]

        // 보여줄 리스트의 개수를 관리하는 상태
        const [visibleCount, setVisibleCount] = useState(6);

        // '더 보기' 버튼 클릭 시 실행될 함수
        const showMoreItems = () => {
            setVisibleCount(prevCount => prevCount + 6);
        };

        const [activeTab, setActiveTab] = useState('alone');

        const handleTabClick = (tab) =>{
            setActiveTab(tab)
        }

        const handeleError = () => {
            alert('준비중입니다')
        }

        const renderContent = () => {
            switch(activeTab) {
                case 'alone' :
                    return RenderBurger(alonelist)
                case 'set' :
                    return RenderBurger(setlist)
                default :
                    return(
                        <></>
                    )
            }
        }

        const RenderBurger = (items) => {
            const navigate = useNavigate(null);

            const handleNavClick = (item,index) => {    
                navigate(`/detail/${index}`)
            }
            
            return(
                <BurgerContent>
                    <ul className='burgerTab'>
                        <li onClick={()=>handleTabClick('alone')} className={activeTab === 'alone' ? 'on' : ''}>단품메뉴</li>
                        <li onClick={()=>handleTabClick('set')} className={activeTab === 'set' ? 'on' : ''}>세트메뉴</li>
                    </ul>
                    <Burger3g>
                        <div className='count'>
                            <p>{items.length} Products</p>
                        </div>
                        <ul className='blist'>
                            {items.slice(0,visibleCount).map((i, index) => (
                                <li key={index} onClick={activeTab === 'alone' ? () => handleNavClick(i,index) : () => handeleError()}>
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
                            {visibleCount < alonelist.length && (
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

export default Burger