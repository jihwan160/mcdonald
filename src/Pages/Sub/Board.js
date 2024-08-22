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

const BoardList = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1168px;
    margin: 0 auto;
    & table {
        margin-top: 30px;
        width: 100%;
        height: 100%;
        border-top: 2px solid #292929;
        border-bottom: 1px solid #000;
        & tr {
            cursor: pointer;
        }
        & tr:nth-child(1) td {
            border-top: 0px;
        }
        & tr td {
            padding: 25px 0;
            background: #f8f8f8;
            border-top: 1px solid #d1d1d1;
        }
        & tr td:nth-child(1) {
            background-image: url(${process.env.PUBLIC_URL}img/news/ico_notice.png);
            background-position: center;
            background-repeat: no-repeat;
            width: 11%;
            text-align: center;
        }
        & tr td:nth-child(2) {
            padding: 0 45px;
            font-weight: 600;
            color: #292929;
        }
        & tr td:nth-child(3) {
            width: 19%;
            text-align: center;
        }
    }
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

        const handleError = () => {
            alert('준비중입니다')
        }
        
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
                    <BoardList>
                        <table>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td onClick={()=>{handleError()}}>맥도날드 '행복의 버거' 캠페인 디지털 영상 공개</td>
                                    <td>2024.05.24</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td onClick={()=>{handleError()}}>맥딜리버리 서비스를 제공하기 위한 맞춤형 광고 수신 동의 및 거부에 대한 고지</td>
                                    <td>2022.10.07</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td onClick={()=>{handleError()}}>주방 공개 행사 잠정 중단 안내의 건</td>
                                    <td>2020.02.27</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td onClick={()=>{handleError()}}>디카페인 커피 미판매 매장 안내</td>
                                    <td>2020.01.20</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td onClick={()=>{handleError()}}>칠러 미판매 매장 안내</td>
                                    <td>2020.01.17</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td onClick={()=>{handleError()}}>맥도날드 모바일 쿠폰 사용 제외 매장 안내</td>
                                    <td>2019.10.07</td>
                                </tr>
                            </tbody>
                        </table>
                    </BoardList>
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