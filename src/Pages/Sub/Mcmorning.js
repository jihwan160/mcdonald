import React, { useState } from 'react'
import styled from 'styled-components'
import Gnb from '../Home/Gnb';
import Footer from '../Home/Footer';
import { useNavigate } from 'react-router-dom';
import Aside from '../Home/Aside';


const VisualImg = styled.div`
    background-image: url(${process.env.PUBLIC_URL}img/burger/morning/bg_visual_menu03.jpg);
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

const Mcmorning = () => {

    const BurgerVisual = () => {

        const navigate = useNavigate(null);

        return(
            <>
                <VisualImg>
                    <div className='bvcon'>
                        <h2>맥모닝</h2>
                        <p>
                            새벽 4시부터 오전 10시 30분까지 <br />
                            갓 구워내 신선한 맥모닝으로 따뜻한 아침 식사를 챙겨 드세요!
                        </p>
                        <ul>
                            <li onClick={()=>{navigate('/')}}>Home</li>
                            <li onClick={()=>{navigate('/burger')}}>Menu</li>
                            <li onClick={()=>{navigate('/morning')}}>맥모닝</li>
                        </ul>
                    </div>
                </VisualImg>
            </>
        )
    }

    const BurgerList = () => {

        const alonelist = [
            {
                img : `${process.env.PUBLIC_URL}img/burger/morning/mblist1.png`,
                alt : 'mblist1',
                con1 : '진주 고추 크림치즈 머핀',
                con2 : 'Jinju Pepper Cream Cheese Muffin',
            },
            {
                img : `${process.env.PUBLIC_URL}img/burger/morning/mblist2.png`,
                alt : 'mblist2',
                con1 : '베이컨 토마토 에그 머핀',
                con2 : 'BLT Egg Muffin',
            },
            {
                img : `${process.env.PUBLIC_URL}img/burger/morning/mblist3.png`,
                alt : 'mblist3',
                con1 : '치킨 치즈 머핀',
                con2 : "Chicken 'n Cheese Muffin",
            },
            {
                img : `${process.env.PUBLIC_URL}img/burger/morning/mblist4.png`,
                alt : 'mblist4',
                con1 : '에그 맥머핀',
                con2 : 'Egg McMuffin',
            },
            {
                img : `${process.env.PUBLIC_URL}img/burger/morning/mblist5.png`,
                alt : 'mblist5',
                con1 : '베이컨 에그 맥머핀',
                con2 : 'Bacon Egg McMuffin',
            },
            {
                img : `${process.env.PUBLIC_URL}img/burger/morning/mblist6.png`,
                alt : 'mblist6',
                con1 : '소세지 에그 맥머핀',
                con2 : 'Sausage Egg McMuffin®',
            },
            {
                img : `${process.env.PUBLIC_URL}img/burger/morning/mblist7.png`,
                alt : 'mblist7',
                con1 : '상하이 치킨 스낵랩',
                con2 : 'Shanghai Chicken Snack Wrap',
            },
        ]

        const setlist = [
            {
                img : `${process.env.PUBLIC_URL}img/burger/morning/setmblist1.png`,
                alt : 'setmblist1',
                con1 : '진주 고추 크림치즈 머핀 세트',
                con2 : 'Jinju Pepper Cream Cheese Muffin Extra Value Breakfast',
            },
            {
                img : `${process.env.PUBLIC_URL}img/burger/morning/setmblist2.png`,
                alt : 'setmblist2',
                con1 : '베이컨 토마토 에그 머핀 세트',
                con2 : 'BLT Egg Muffin Extra Value Breakfast',
            },
            {
                img : `${process.env.PUBLIC_URL}img/burger/morning/setmblist3.png`,
                alt : 'setmblist3',
                con1 : '에그 맥머핀 콤보',
                con2 : "Egg McMuffin Combo",
            },
            {
                img : `${process.env.PUBLIC_URL}img/burger/morning/setmblist4.png`,
                alt : 'setmblist4',
                con1 : '베이컨 에그 맥머핀 콤보',
                con2 : 'Bacon Egg McMuffin Combo',
            },
            {
                img : `${process.env.PUBLIC_URL}img/burger/morning/setmblist5.png`,
                alt : 'setmblist5',
                con1 : '소세지 에그 맥머핀 콤보',
                con2 : 'Sausage Egg McMuffin  Combo',
            },
            {
                img : `${process.env.PUBLIC_URL}img/burger/morning/setmblist6.png`,
                alt : 'setmblist6',
                con1 : '치킨 치즈 머핀 세트',
                con2 : "Chicken 'n Cheese Muffin Extra Value Breakfast"
            },
            {
                img : `${process.env.PUBLIC_URL}img/burger/morning/setmblist7.png`,
                alt : 'setmblist7',
                con1 : '에그 맥머핀 세트',
                con2 : 'Egg McMuffin Extra Value Breakfast',
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

        const handleError = () => {
            alert('준비중입니다')
        }

        const renderContent = () => {
            switch(activeTab) {
                case 'alone' :
                    return renderBurger(alonelist)
                case 'set' :
                    return renderBurger(setlist)
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
                        <li onClick={()=>handleTabClick('alone')} className={activeTab === 'alone' ? 'on' : ''}>단품메뉴</li>
                        <li onClick={()=>handleTabClick('set')} className={activeTab === 'set' ? 'on' : ''}>세트메뉴</li>
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

export default Mcmorning