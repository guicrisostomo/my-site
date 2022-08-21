import styled from 'styled-components';
import imgPresentation from "../../assets/img/imgPresentation.jpg";

export const SectionPresentation = styled.section`
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imgPresentation});
    width: auto;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    justify-content: start;
    height: max-content;
    padding: 20px;
    display: flex;
    flex-direction: row;
    font-variant: petite-caps;
    padding-top: 85px;
    padding-bottom: 30px;
`;

export const TextPresentation = styled.h1`
    color: white;
    font-weight: normal;
    font-size: 70px;
    margin-bottom: 0px;

    @media (max-width: 1250px) {
        font-size: 36px;
    }

    @media (max-width: 500px) {
        font-size: 20px;
    }
`;

export const TextInfo = styled.h3`
    @media (max-width: 500px) {
        font-size: 10px;
    }

    @media (max-width: 1250px) {
        font-size: 14px;
    }
`;

export const PhotoPresentation = styled.img`
    height: 100px;
    width: 100px;
    margin-right: 15px;
    margin-top: 50px;
    border-radius: 50%;
    border-color: white;
    border-width: 5px;
    border-style: solid;
    align-self: center;

    @media (max-width: 500px) {
        height: 50px;
        width: 50px;
        margin-top: 0px;
    }

    @media (max-width: 1250px) {
        height: 70px;
        width: 70px;
        margin-top: 0px;
    }
`;

export const Icons = styled.a`
    
    color: white;
    background-color: inherit;
    border-radius: 0px;
    height: max-content;
    transition: all 0.9s;
    align-items: right;
    &:hover {
        color: black;
        background-color: white;
        border-radius: 5px;
    }

    @media (max-width: 690px) {
        display: none;
    }
`;