import React from 'react'
import styled from 'styled-components'

const GnbCover = styled.div`

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
        & ul {
            display: flex;
            align-items: center;
            margin-left: 40px;
            & li {
                line-height: 140px;
                padding: 0 10px;
                margin-right: 85px;
                color: #292929;
                font-weight: 600;
                font-size: 20px;
                cursor: pointer;
                &:nth-child(1) {
                    margin-left: 85px;
                }
                &:last-child {
                    margin-right: 20px;
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

const Gnb = () => {

    const GnbTab = () => {
        return(
            <GnbCover>
                <div className='gnbarea w1168'>
                    <div className='logo'><img src={`${process.env.PUBLIC_URL}img/index/logo.png`} alt='logo' /></div>
                    <div className='gnbMenu'>
                        <ul>
                            <li>Menu</li>
                            <li>Store</li>
                            <li>What's NEW</li>
                            <li>Story</li>
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