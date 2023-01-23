import styled from 'styled-components';
import imgProjects from '../../assets/img/imgProjects.png';

export const SectionProjects = styled.section`
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imgProjects});
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

export const TextProjects = styled.h1`
    padding: 10px;
    color: white;
    margin: 0px;
    font-size: 32px;

    @media (max-width: 400px) {
        font-size: 20px;
    }
`;