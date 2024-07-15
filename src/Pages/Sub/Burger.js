import React, { useState } from 'react'
import styled from 'styled-components'
import Gnb from '../Home/Gnb';
import Footer from '../Home/Footer';
import { useNavigate } from 'react-router-dom';


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
        top: -40px;
        & p {
            display: inline-block;
        }
        &::before {
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

    & .blist {
        text-align: center;
        & li {
            width: 366px;
            height: 312px;
            margin: 0 0 35px 35px;
            cursor: pointer;
            & .blistArea {
                display: block;
                height: 100%;
                padding: 20px 30px;
                background: #f8f8f8;
                border-radius: 10px;
                border: 1px solid #f8f8f8;
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
                con : '',
            }
            {
                img : `${process.env.PUBLIC_URL}img/burger/blist2.png`,
                alt : 'blist2',
                con : '',
            }
        ]

        const setlist = [
            {
                img : '',
                alt : '',
                con : '',
            }
        ]

        const [activeTab, setActiveTab] = useState('alone');

        const handleTabClick = (tab) =>{
            setActiveTab(tab)
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
                            <p>21 Products</p>
                        </div>
                        <ul className='blist'>
                            <li>
                                <div className='blistArea'>
                                    <div>
                                        <img src={`${process.env.PUBLIC_URL}img/burger/blist1.png`} alt='blist1' />
                                    </div>
                                    <div className='name'>
                                        <p className='tit'>진주 고추 크림치즈 버거</p>
                                        <p className='eng'>Jinju Pepper Cream Cheese Burger</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
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
        </>
    )
}

export default Burger