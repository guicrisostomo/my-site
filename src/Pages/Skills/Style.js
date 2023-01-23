import styled from 'styled-components';
import imgSkills from '../../assets/img/imgSkills.png';

export const SectionSkills = styled.section`
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imgSkills});
    width: auto;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    justify-content: start;
    height: 100;
    padding-top: 72px;
    padding-bottom: 10px;
`;

export const ItemSkill = styled.a`
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
    padding: 42px 42px 42px 42px;
    box-shadow: 11px 11px 50px white;
    margin-top: 20px;
    cursor: pointer;
    place-content: center;
    text-decoration: none;
    transform: scale(90%, 90%);
    transition: 1s all;

    :hover {
        background-color: white;
        color: black;
        transform: scale(100%, 100%);
    }

    @media (max-width: 400px) {
        width: 60vw;
    }
`;

export const Items = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
`;

export const TextSkill = styled.h1`
    padding: 10px;
    color: white;
    margin: 0px;
    font-size: 32px;

    @media (max-width: 400px) {
        font-size: 20px;
    }
`;

export const TextInfoSkill = styled.strong`
    padding-top: 10px;
    text-align: center;
    font-size: 16px;
    margin-right: 10px;

    @media (max-width: 400px) {
        font-size: 12px;
    }
`;