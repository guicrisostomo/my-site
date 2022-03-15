import styled from 'styled-components';

export const Header = styled.header`
    background-color: black;
    padding: 10px;
    font-family: Arial;
    align-items: center;
`;

export const AbbreviationName = styled.h1`
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    color: white;
    margin: 10px;
    cursor: pointer;
`;

export const TextHeader = styled.strong`
    text-transform: uppercase;
    color: white;
    align-self: center;
    font-size: 20px;
    margin: 10px;
    cursor: pointer;
`;

export const ContentTextHeader = styled.div`
    display: flex;
    flex-direction: row;
`;

export const MenuImgHeader = styled.div`
    align-self: center;
    cursor: pointer;
    margin-left: auto;
`;

export const MenuOptions = styled.div`
    background-color: black;
    display: none;
`;

export const TextOption = styled.strong`
    color: white;
`;