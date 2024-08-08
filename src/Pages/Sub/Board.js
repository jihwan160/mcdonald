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

const BoardArea = styled.div`
    padding: 30px 0 60px;

`;

const BoardAreaCover = styled.div`
    max-width: 1168px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & .boardCnt {
        color: #292929;
        font-weight: 500;
        & span {
            color: #da0000;
        }
    }

    & .search {

        display: flex;
        align-items: center;
        & input {
            width: 300px;
            height: 50px;
            padding: 0 28px;
            border: 1px solid #d1d1d1;
            border-radius: 70px;
            background: #fff;
            box-sizing: border-box;
            font-size: 16px;
            color: #292929;
            font-weight: 600;
            letter-spacing: -1px;
        }
    }
`;

const SearchBtn = styled.button`
    width: 50px;
    height: 50px;
    background-image: url(${process.env.PUBLIC_URL}/img/news/btn_search.png);
    background-position: 0 0;
    background-repeat: no-repeat;
    margin-left: 8px;
    cursor: pointer;
`;

const Board = () => {

    const BurgerVisual = () => {

        const navigate = useNavigate(null);

        return(
            <>
                <VisualImg>
                    <div className='bvcon'>
                        <h2>새로운 소식</h2>
                        <ul>
                            <li onClick={()=>{navigate('/')}}>Home</li>
                            <li onClick={()=>{navigate('/whats')}}>What's New </li>
                            <li onClick={()=>{navigate('/whats')}}>새로운 소식</li>
                        </ul>
                    </div>
                </VisualImg>
            </>
        )
    }

    const BoardWrite = () => {

        // const initialList = [
        //     {
        //         img : `${process.env.PUBLIC_URL}img/news/mhm1.png`,
        //         alt : 'mhm1',
        //         con : '슈퍼배드4!  영화속 주인공 미니언즈를  맥도날드 해피밀 토이로 만나보세요.',
        //     },
        // ]
        
        return(
            <div>
                <BoardArea>
                    <BoardAreaCover>
                        <p className='boardCnt'>총 <span>0건</span>의 게시글이 있습니다.</p>
                        <div className='search'>
                            <input type='text' placeholder='검색어를 입력하세요' />
                            <SearchBtn></SearchBtn>
                        </div>
                    </BoardAreaCover>
                </BoardArea>
            </div>
        )
    }

    return (
        <>
            <Gnb />
            <BurgerVisual />
            <BoardWrite />
            <Footer />
            <Aside />
        </>
    )
}

export default Board