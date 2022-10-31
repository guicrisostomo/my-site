import styled from 'styled-components';
import imgAbout from "../../assets/img/imgAbout.png";
import imgInfoEvents from "../../assets/img/imgInfoEvents.png";

export const SectionAbout = styled.section`
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imgAbout});
    width: auto;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    justify-content: start;
    height: 100%;
    margin-top: 5px;
`;

export const Title = styled.h1`
    padding: 10px;
    color: white;
    margin: 0px;
    font-size: 32px;

    @media (max-width: 500px) {
        font-size: 20px;
    }
`;

export const Subtitle = styled.p`
    color: white;
    padding: 10px;

    @media (max-width: 500px) {
        font-size: 14px;
    }
`;

export const SectionEvents = styled.section`
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imgInfoEvents});
    width: auto;
    background-repeat: no-repeat;
    background-size: cover;
    justify-content: start;
    margin-top: 5px;
`;

export const ItemsEventInfo = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
`;

export const ItemEventInfo = styled.div`
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
    text-decoration: none;
    transform: scale(80%, 80%);
    transition: 1s all;

    :hover {
        background-color: white;
        color: black;
        transform: scale(90%, 90%);
    }
`;

export const ItemEventInfoTexts = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ItemEventInfoName = styled.p`
    text-transform: uppercase;
    font-size: 18px;
    font-weight: bold;
`;

export const ItemEventInfoText = styled.p`
    margin-top: -10px;
    font-size: 16px;
    text-transform: capitalize;
    padding: 10px;
`;

export const ItemEventInfoButton = styled.a`
    border-radius: 10px;
    border-color: black;
    border-width: 1px;
    border-style: solid;
    background-color: white;
    color: black;
    display: flex;
    place-items: center;
    padding: 0px 10px;
    margin-left: auto;
    transition: all 1s;
    text-decoration: none;
    cursor: pointer;

    :hover {
        background-color: black;
        color: white;
    }
`;

export const ItemEventInfoButtonText = styled.p`
    margin-left: 10px;
    font-size: 20px;
`;