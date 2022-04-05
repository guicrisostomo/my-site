import styled from 'styled-components';
import imgContact from './../../assets/img/imgContact.png';

export const SectionContact = styled.section`
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imgContact});
    width: auto;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    justify-content: start;
    height: 100%;
    padding-top: 72px;
`;

export const TextContact = styled.h1`
    padding: 10px;
    color: white;
    margin: 0px;
    font-size: 32px;
    
    @media (max-width: 400px) {
        font-size: 20px;
    }
`;

export const ItemContact = styled.a`
    color: white;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 20vw;
    background-color: #000000a1;
    align-items: center;
    border-radius: 5px;
    border-style: solid;
    border-width: 1px;
    border-color: white;
    box-shadow: 11px 11px 50px white;
    padding: 42px;
    margin: 20px;
    text-decoration: none;
    overflow-wrap: anywhere;
    transition: 1s all;

    :hover {
        background-color: white;
        color: black;
        transform: scale(125%, 125%);
    }

    @media (max-width: 600px) {
        width: 100%;
    }
`;

export const TextInfoContact = styled.strong`
    padding-top: 5px;
    font-size: 20px;
    text-align: center;

    @media (max-width: 400px) {
        font-size: 16px;
    }
`;

export const Items = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
`;