import styled from 'styled-components';
import imgProjects from '../../assets/img/imgProjects.png';

export const SectionProjects = styled.section`
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imgProjects});
    width: auto;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    justify-content: start;
    height: 100;
    padding-top: 72px;

    @media (max-width: 689px) {
        height: 100;
    }
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