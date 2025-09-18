import styled from 'styled-components';
import imgAbout from "../../assets/img/imgAbout.png";
import imgInfoEvents from "../../assets/img/imgInfoEvents.png";

export const SectionAbout = styled.section`
    background: linear-gradient(120deg, rgba(24,26,27,0.92) 60%, rgba(0,0,0,0.7)), url(${imgAbout});
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    justify-content: flex-start;
    box-shadow: 0 4px 32px 0 rgba(0,0,0,0.18);
    backdrop-filter: blur(2px);
    height: 100;
`;

export const Title = styled.h1`
    padding: 18px 18px 0 18px;
    color: #00e676;
    margin: 0;
    font-size: 38px;
    font-family: 'Fira Mono', 'Roboto Mono', monospace;
    font-weight: 700;
    letter-spacing: 1.2px;
    text-shadow: 0 2px 12px #000a;

    @media (max-width: 500px) {
        font-size: 22px;
    }
`;

export const Subtitle = styled.p`
    color: #bdbdbd;
    padding: 10px 18px 0 18px;
    font-size: 18px;
    font-family: 'Fira Mono', 'Roboto Mono', monospace;
    line-height: 1.7;
    @media (max-width: 500px) {
        font-size: 14px;
    }
`;

export const SectionEvents = styled.section`
    background: linear-gradient(120deg, rgba(24,26,27,0.92) 60%, rgba(0,0,0,0.7)), url(${imgInfoEvents});
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    justify-content: flex-start;
    margin-top: 18px;
    border-radius: 18px;
    box-shadow: 0 4px 32px 0 rgba(0,0,0,0.18);
    backdrop-filter: blur(2px);
`;

export const ItemsEventInfo = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 32px;
    padding: 18px 0 0 0;
`;

export const ItemEventInfo = styled.div`
    min-width: 320px;
    max-width: 480px;
    color: #e0e0e0;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    background: rgba(24,26,27,0.92);
    align-items: flex-start;
    border-radius: 16px;
    border: 1.5px solid #23272F;
    padding: 32px 32px 24px 32px;
    box-shadow: 0 4px 32px 0 rgba(0,0,0,0.18);
    margin-top: 0;
    margin-bottom: 18px;
    text-decoration: none;
    font-family: 'Fira Mono', 'Roboto Mono', monospace;
    transition: box-shadow 0.3s, background 0.3s, color 0.3s, transform 0.3s;
    position: relative;
    border-bottom: 3px solid #00e676;
    &:hover {
        background: linear-gradient(120deg, #181A1B 80%, #23272F 100%);
        color: #00e676;
        box-shadow: 0 8px 32px 0 rgba(0,255,128,0.10);
        transform: translateY(-4px) scale(1.03);
    }
`;

export const ItemEventInfoTexts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`;

export const ItemEventInfoName = styled.p`
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 700;
    color: #00e676;
    margin-bottom: 2px;
    letter-spacing: 1px;
`;

export const ItemEventInfoText = styled.p`
    margin-top: 0;
    font-size: 16px;
    padding: 6px 0 0 0;
    color: #bdbdbd;
    font-family: 'Fira Mono', 'Roboto Mono', monospace;
`;

export const ItemEventInfoButton = styled.a`
    border-radius: 8px;
    border: 1.5px solid #00e676;
    background: linear-gradient(90deg, #00e676 0%, #00bfa5 100%);
    color: #181A1B;
    display: flex;
    align-items: center;
    padding: 6px 18px;
    margin-left: auto;
    margin-top: 18px;
    font-weight: 700;
    font-size: 18px;
    text-decoration: none;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0,255,128,0.10);
    transition: background 0.2s, color 0.2s, border 0.2s, transform 0.2s;
    &:hover {
        background: #181A1B;
        color: #00e676;
        border-color: #00bfa5;
        transform: scale(1.05);
    }
`;

export const ItemEventInfoButtonText = styled.p`
    margin-left: 10px;
    font-size: 20px;
    font-family: 'Fira Mono', 'Roboto Mono', monospace;
    font-weight: 700;
`;