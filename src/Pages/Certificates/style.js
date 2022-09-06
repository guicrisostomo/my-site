import styled from 'styled-components';
import imgCertifications from "../../assets/img/imgCertifications.jpg";

export const SectionCertifications = styled.section`
background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imgCertifications});
    width: auto;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    justify-content: start;
    height: 100vh;
    padding: 20px;
    display: flex;
    flex-direction: row;
    font-variant: petite-caps;
    padding-top: 85px;
    padding-bottom: 30px;
`;

export const TextCertificates = styled.h1`
    padding: 10px;
    color: white;
    margin: 0px;
    font-size: 32px;

    @media (max-width: 400px) {
        font-size: 20px;
    }
`;