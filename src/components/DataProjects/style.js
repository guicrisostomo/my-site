import styled from 'styled-components';

export const Items = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
`;

export const ItemProject = styled.a`
    width: 100%;
    color: white;
    display: flex;
    flex-wrap: wrap;
    background-color: #000000a1;
    align-items: center;
    border-radius: 5px;
    border-style: solid;
    border-width: 1px;
    border-color: white;
    padding: 42px 42px 42px 42px;
    box-shadow: 11px 11px 50px white;
    margin-top: 20px;
    cursor: pointer;
    text-decoration: none;
    transform: scale(80%, 80%);
    transition: 1s all;

    :hover {
        background-color: white;
        color: black;
        transform: scale(90%, 90%);
    }
`;

export const ItemSkillImg = styled.img`
    display: flex;
    width: 50px;
    height: 50px;
    margin-right: 10px;
    border-radius: 50%;
    border-style: solid;
    border-width: 1px;
    border-color: white;
    padding: 5px;
    color: white;
`;

export const TextTitleProject = styled.h2`
    padding-top: 10px;
    margin-right: 10px;
    width: 100%;
    text-align: center;

    @media (max-width: 400px) {
        font-size: 16px;
    }
`;

export const TextInfoProject = styled.p`
    
`;

export const ImgProject = styled.img`
    height: 100px;
    width: 100px;
`;

export const ItemProjectImg = styled.div`
    display: flex;
    padding: 10px;
    width: 100%;
    place-content: center;
`;

export const ItemProjectText = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 100%;
`;

export const ItemLanguagesProject = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
`;