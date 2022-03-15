import styled from 'styled-components';
import imgPresentation from "../../assets/img/imgPresentation.jpg";

export const ArticlePresentation = styled.article`
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imgPresentation});
    width: auto;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    justify-content: start;
    height: max-content;
    padding: 20px;
    display: flex;
    flexDirection: row;
`;

export const TextPresentation = styled.h1`
    color: white;
    font-weight: normal;
    font-size: 84px;
    line-height: 78px;
    letter-spacing: 2px;
    margin-bottom: 0px;
`;

export const PhotoPresentation = styled.img`
    height: 100px;
    width: 100px;
    margin-right: 15px;
    border-radius: 50%;
    border-color: white;
    border-width: 5px;
    border-style: solid;
    align-self: center;
`;