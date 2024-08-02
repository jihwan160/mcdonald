import React, { useState } from 'react'
import styled from 'styled-components'
import Gnb from '../Home/Gnb';
import Footer from '../Home/Footer';
import { useNavigate } from 'react-router-dom';
import Aside from '../Home/Aside';


const VisualImg = styled.div`
    background-image: url(${process.env.PUBLIC_URL}img/burger/happy/bg_visual_menu07.jpg);
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

const Happymeal = () => {

    const BurgerVisual = () => {

        const navigate = useNavigate(null);

        return(
            <>
                <VisualImg>
                    <div className='bvcon'>
                        <h2>해피밀</h2>
                        <p>
                            맛과 즐거움 모두 해피밀을 통해 느껴보세요!
                        </p>
                        <ul>
                            <li onClick={()=>{navigate('/')}}>Home</li>
                            <li onClick={()=>{navigate('/burger')}}>Menu</li>
                            <li onClick={()=>{navigate('/happy')}}>해피밀</li>
                        </ul>
                    </div>
                </VisualImg>
            </>
        )
    }

    const BurgerList = () => {

        const amlist = [
            {
                img : `${process.env.PUBLIC_URL}img/burger/happy/am1.png`,
                alt : 'am1',
                con1 : '베이컨 에그 맥머핀',
                con2 : 'Bacon Egg McMuffin',
            },
            {
                img : `${process.env.PUBLIC_URL}img/burger/happy/am2.png`,
                alt : 'am2',
                con1 : '소시지 에그 맥머핀',
                con2 : 'Sausage Egg McMuffin',
            },
            {
                img : `${process.env.PUBLIC_URL}img/burger/happy/am3.png`,
                alt : 'am3',
                con1 : '에그 맥머핀',
                con2 : 'Egg McMuffin',
            },
            {
                img : `${process.env.PUBLIC_URL}img/burger/happy/am4.png`,
                alt : 'am4',
                con1 : '핫케익 2조각',
                con2 : 'Hotcakes 2pcs',
            },
            {
                img : `${process.env.PUBLIC_URL}img/burger/happy/am5.png`,
                alt : 'am5',
                con1 : '후룻볼 파인애플',
                con2 : 'Fruit bowls Pineapple',
            },
            {
                img : `${process.env.PUBLIC_URL}img/burger/happy/am6.jpg`,
                alt : 'am6',
                con1 : '해쉬 브라운',
                con2 : 'Hash Brown',
            },
            {
                img : `${process.env.PUBLIC_URL}img/burger/happy/am7.png`,
                alt : 'am7',
                con1 : '생수',
                con2 : 'Mineral Water',
            },
            {
                img : `${process.env.PUBLIC_URL}img/burger/happy/am8.png`,
                alt : 'am8',
                con1 : '오렌지 주스',
                con2 : 'Orange Juice',
            },
        ]

        const pmlist = [
            {
                img : `${process.env.PUBLIC_URL}img/burger/happy/pm1.png`,
                alt : 'pm1',
                con1 : '불고기 버거',
                con2 : 'Bulgogi Burger',
            },
            {
                img : `${process.env.PUBLIC_URL}img/burger/happy/pm2.png`,
                alt : 'pm2',
                con1 : '치즈버거',
                con2 : 'Cheeseburger',
            },
            {
                img : `${process.env.PUBLIC_URL}img/burger/happy/pm3.png`,
                alt : 'pm3',
                con1 : '햄버거',
                con2 : 'Hamburger',
            },
            {
                img : `${process.env.PUBLIC_URL}img/burger/happy/pm4.png`,
                alt : 'pm4',
                con1 : '맥너겟®4조각',
                con2 : 'McNuggets®4pcs',
            },
            {
                img : `${process.env.PUBLIC_URL}img/burger/happy/pm5.png`,
                alt : 'pm5',
                con1 : '후룻볼 파인애플',
                con2 : 'Fruit bowls Pineapple',
            },
            {
                img : `${process.env.PUBLIC_URL}img/burger/happy/pm6.jpg`,
                alt : 'pm6',
                con1 : '후렌치 후라이 Small',
                con2 : 'French Fries Small',
            },
            {
                img : `${process.env.PUBLIC_URL}img/burger/happy/pm7.png`,
                alt : 'pm7',
                con1 : '생수',
                con2 : 'Mineral Water',
            },
            {
                img : `${process.env.PUBLIC_URL}img/burger/happy/pm8.png`,
                alt : 'pm8',
                con1 : '오렌지 주스',
                con2 : 'Orange Juice',
            },
        ] 

        // 보여줄 리스트의 개수를 관리하는 상태
        const [visibleCount, setVisibleCount] = useState(6);

        // '더 보기' 버튼 클릭 시 실행될 함수
        const showMoreItems = () => {
            setVisibleCount(prevCount => prevCount + 6);
        };

        const [activeTab, setActiveTab] = useState('am');

        const handleTabClick = (tab) =>{
            setActiveTab(tab)
        }

        const renderContent = () => {
            switch(activeTab) {
                case 'am' :
                    return renderBurger(amlist)
                case 'pm' :
                    return renderBurger(pmlist)
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
                        <li onClick={()=>handleTabClick('am')} className={activeTab === 'am' ? 'on' : ''}>AM 04:00~AM 10:30</li>
                        <li onClick={()=>handleTabClick('pm')} className={activeTab === 'pm' ? 'on' : ''}>AM 10:30~AM 04:00</li>
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
                            {visibleCount < amlist.length && (
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

export default Happymeal