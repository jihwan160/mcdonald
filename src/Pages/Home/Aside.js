import React from 'react'
import styled from 'styled-components'

const AsideCover = styled.div`
    position: fixed;
    left: 49%;
    bottom: 310px;
    margin-left: 650px;
    z-index: 9999;
`;

const AsideImg1 = styled.div`
    background-image: url(${process.env.PUBLIC_URL}img/aside/btn_story_04.png);
    background-repeat: no-repeat;
    background-position: center 0;
    cursor: pointer;
    width: 121px;
    height: 121px;
    padding-bottom: 20px;
`;

const AsideImg2 = styled.div`
    background-image: url(${process.env.PUBLIC_URL}img/aside/btn_delivery_04.png);
    background-repeat: no-repeat;
    background-position: 0 0;
    cursor: pointer;
    width: 121px;
    height: 121px;
`;

const AsideImg3 = styled.div`
    background-image: url(${process.env.PUBLIC_URL}img/aside/btn_top_04.png);
    background-repeat: no-repeat;
    background-position: center center;
    cursor: pointer;
    width: 50px;
    height: 51px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -20%;
`;

const Aside = () => {
    
    const AsideArea = () => {
        return(
            <AsideCover>
                <AsideImg1></AsideImg1>
                <AsideImg2></AsideImg2>
                <AsideImg3></AsideImg3>
            </AsideCover>
        )
    }
    
    return (
        <>
            <AsideArea />
        </>
    )
}

export default Aside