import styled from 'styled-components';
import imgProjects from '../../assets/img/imgProjects.png';

export const SectionProjects = styled.section`
    background: linear-gradient(120deg, rgba(24,26,27,0.92) 60%, rgba(0,0,0,0.7)), url(${imgProjects});
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    justify-content: flex-start;
    height: 100;
    margin-top: 12px;
    padding-top: 80px;
    padding-bottom: 32px;
    border-radius: 18px;
    box-shadow: 0 4px 32px 0 rgba(0,0,0,0.18);
    backdrop-filter: blur(2px);
`;

export const TextProjects = styled.h1`
    padding: 18px 18px 0 18px;
    color: #00e676;
    margin: 0;
    font-size: 38px;
    font-family: 'Fira Mono', 'Roboto Mono', monospace;
    font-weight: 700;
    letter-spacing: 1.2px;
    text-shadow: 0 2px 12px #000a;

    @media (max-width: 400px) {
        font-size: 22px;
    }
`;