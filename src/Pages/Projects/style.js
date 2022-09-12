import styled from 'styled-components';
import imgProjects from '../../assets/img/imgProjects.png';

export const SectionProjects = styled.section`
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imgProjects});
    width: auto;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    justify-content: start;
    height: calc(100vh - 72px);
    padding-top: 72px;

    @media (max-width: 689px) {
        height: 100%;
    }
`;

export const TextProjects = styled.h1`
    padding: 10px;
    color: white;
    margin: 0px;
    font-size: 32px;

    @media (max-width: 400px) {
        font-size: 20px;
    }
`;

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

export const TextTitleProject = styled.h2`
    padding-top: 10px;
    margin-right: 10px;

    @media (max-width: 640px) {
        align-self: center;
    }

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

    @media (max-width: 640px) {
        width: 100%;
        place-content: center;
    }
`;

export const ItemProjectText = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

    @media (max-width: 640px) {
        width: 100%;
    }
`;

export const ItemLanguagesProject = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
`;