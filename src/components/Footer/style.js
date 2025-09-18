import styled from "styled-components";

export const FooterStyle = styled.footer`
    background: rgba(24, 26, 27, 0.95);
    color: #e0e0e0;
    box-shadow: 0 -2px 24px 0 rgba(0,0,0,0.18);
    backdrop-filter: blur(6px);
    border-top: 1.5px solid #23272F;
    padding-top: 18px;
    padding-bottom: 8px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    bottom: 0;
`;

export const ImgCopyRight = styled.img`
    height: 22px;
    width: 22px;
    margin-left: 7px;
    margin-right: 7px;
    align-self: center;
    filter: brightness(0.8);

    @media (max-width: 690px) {
        height: 14px;
        width: 14px;
    }
`;

export const DivTextACreditToMe = styled.div`
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0 0 0;
    letter-spacing: 0.5px;
    font-family: 'Fira Mono', 'Roboto Mono', monospace;
    color: #bdbdbd;

    @media (max-width: 690px) {
        font-size: 13px;
    }
`;

export const DivContacts = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 22px;
    padding: 8px 0 0 0;
`;

export const Icons = styled.a`
    padding: 8px;
    border-radius: 50%;
    margin-left: 0;
    background: linear-gradient(135deg, #23272F 60%, #181A1B 100%);
    color: #00e676;
    height: 40px;
    width: 40px;
    text-align: center;
    font-size: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 8px rgba(0,0,0,0.12);
    border: 1.5px solid #23272F;
    transition: all 0.25s;

    &:hover {
        color: #fff;
        background: linear-gradient(135deg, #00e676 60%, #00bfa5 100%);
        border-color: #00e676;
        transform: scale(1.08) translateY(-2px);
        box-shadow: 0 4px 16px rgba(0,255,128,0.10);
    }

    @media (max-width: 690px) {
        height: 28px;
        width: 28px;
        font-size: 18px;
        padding: 4px;
    }
`;