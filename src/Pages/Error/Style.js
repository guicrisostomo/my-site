import styled from 'styled-components';
import imgError from '../../assets/img/imgError.png';

export const SectionError = styled.section`
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imgError});
    width: auto;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    justify-content: start;
    height: 100vh;
    padding-top: 72px;
`;

export const DivInfoError = styled.div`
    top: 30%;
    position: absolute;
    height: 100;
    width: 100vw;
    display: table-cell;
    vertical-align: middle;
    text-align: -webkit-center;
`;

export const TextInfoError = styled.h1`
    color: white;
    font-size: 32px;

    @media (max-width: 400px) {
        font-size: 20px;
    }
`;

export const DivButtonReturn = styled.div`
    background-color: transparent;
    color: white;
    font-size: 28px;
    width: max-content;
    padding: 5px;
    border-radius: 10px;
    border-style: solid;
    border-width: 1px;
    cursor: pointer;
    transition: 1s all;

    :hover {
        background-color: white;
        color: black;
        transform: scale(125%, 125%);
    }

    @media (max-width: 400px) {
        font-size: 16px;
    }
`;