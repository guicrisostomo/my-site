import styled from 'styled-components';

export const Items = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 32px;
    padding: 18px 0 0 0;
`;

export const ItemProject = styled.a`
    min-width: 320px;
    max-width: 480px;
    color: #e0e0e0;
    display: flex;
    flex-direction: column;
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

export const ItemSkillImg = styled.img`
    display: flex;
    width: 48px;
    height: 48px;
    margin-right: 10px;
    border-radius: 50%;
    padding: 6px;
    background: linear-gradient(135deg, #23272F 60%, #181A1B 100%);
    color: #00e676;
    box-shadow: 0 2px 8px rgba(0,0,0,0.12);
    border: 1.5px solid #23272F;
    font-size: 22px;
    transition: all 0.25s;
`;

export const TextTitleProject = styled.h2`
    padding-top: 10px;
    margin-right: 10px;
    width: 100%;
    text-align: center;
    color: #00e676;
    font-family: 'Fira Mono', 'Roboto Mono', monospace;
    font-weight: 700;
    font-size: 24px;
    letter-spacing: 1px;
    text-shadow: 0 2px 12px #000a;

    @media (max-width: 400px) {
        font-size: 16px;
    }
`;

export const TextInfoProject = styled.p`
    color: #bdbdbd;
    font-family: 'Fira Mono', 'Roboto Mono', monospace;
    font-size: 16px;
    margin-top: 8px;
`;

export const ImgProject = styled.img`
    height: 100px;
    width: 100px;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.12);
`;

export const ItemProjectImg = styled.div`
    display: flex;
    padding: 10px;
    width: 100%;
    place-content: center;
`;

export const ItemProjectText = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 100%;
`;

export const ItemLanguagesProject = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 8px;
    margin-top: 10px;
`;