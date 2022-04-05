import styled from 'styled-components';
import imgAbout from "../../assets/img/imgAbout.png";

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

export const TextAbout = styled.h1`
    padding: 10px;
    color: white;
    margin: 0px;
    font-size: 32px;

    @media (max-width: 400px) {
        font-size: 20px;
    }
`;

export const TextInfoAbout = styled.p`
    color: white;
    padding: 10px;
`;