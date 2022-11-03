import styled from "styled-components";

export const FooterStyle = styled.footer`
    background-color: #282929;
    color: white;
`;

export const ImgCopyRight = styled.img`
    height: 20px;
    width: 20px;
    margin-left: 5px;
    margin-right: 5px;
    align-self: center;

    @media (max-width: 690px) {
        height: 10px;
        width: 10px;
    }
`;

export const DivTextACreditToMe = styled.div`
    font-size: 16px;
    display: flex;
    padding: 10px;
    place-content: center;

    @media (max-width: 690px) {
        font-size: 12px;
    }
`;

export const DivContacts = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: auto;
    padding: 10px;
    place-content: center;
`;

export const Icons = styled.a`
    padding: 5px;
    border-radius: 100%;
    margin-left: 10px;
    background-color: white;
    color: black;
    height: max-content;
    transition: all 0.9s;
    align-items: right;
    height: 30px;
    width: 30px;
    text-align: center;
    font-size: 25px;

    &:hover {
        color: black;
        background-color: white;
        margin: 7px;
        border-style: solid;
        border-width: 1px;
        color: white;
        background-color: black;
    }

    @media (max-width: 690px) {
        height: 20px;
        width: 20px;
        font-size: 18px;
    }
`;