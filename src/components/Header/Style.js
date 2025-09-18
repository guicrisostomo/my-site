import styled, { css, keyframes } from 'styled-components';


const heartBeat = keyframes`
  0%
  {
    transform: scale( .75 );
  }
  20%
  {
    transform: scale( 1.1 );
  }
  40%
  {
    transform: scale( .75 );
  }
  60%
  {
    transform: scale( 1.1 );
  }
  80%
  {
    transform: scale( .75 );
  }
  100%
  {
    transform: scale( .75 );
  }
`;


export const Hheader = styled.header`
  padding: 16px 32px;
  font-family: 'Fira Mono', 'JetBrains Mono', 'Roboto Mono', monospace;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  background: rgba(20, 20, 30, 0.85);
  backdrop-filter: blur(12px) saturate(160%);
  border-bottom: 1.5px solid rgba(255,255,255,0.12);
  box-shadow: 0 4px 24px 0 rgba(0,0,0,0.12);
  display: flex;
  justify-content: space-between;
  border-radius: 0 0 24px 24px;
  transition: background 0.4s;

  @media (max-width: 700px) {
    padding: 10px 8px;
    border-radius: 0 0 12px 12px;
  }
`;

export const AbbreviationName = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 2.2rem;
  color: #fff;
  margin: 0 18px 0 0;
  cursor: pointer;
  letter-spacing: 2px;
  text-shadow: 0 2px 12px rgba(0,0,0,0.18);
  font-family: 'Fira Mono', 'JetBrains Mono', 'Roboto Mono', monospace;
  background: linear-gradient(90deg, #00c6ff 0%, #0072ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: filter 0.3s;

  &:hover {
    animation: ${heartBeat} 2s infinite;
    filter: brightness(1.2) drop-shadow(0 0 8px #00c6ff);
  }

  @media (max-width: 700px) {
    font-size: 1.3rem;
    margin: 0 8px 0 0;
  }
`;

export const TextHeaderStyle = styled.span`
  text-transform: uppercase;
  color: #fff;
  align-self: center;
  font-size: 1.1rem;
  margin: 0 14px;
  cursor: pointer;
  font-family: 'Fira Mono', 'JetBrains Mono', 'Roboto Mono', monospace;
  margin-top: 8px;
  padding: 6px 14px;
  border-radius: 12px;
  background: rgba(255,255,255,0.04);
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.08);
  border: 1px solid transparent;
  transition: all 0.3s;

  ${props => props.active === false && css`
    &:hover {
      color: #222;
      background: linear-gradient(90deg, #fff 0%, #e0e0e0 100%);
      border: 1.5px solid #00c6ff;
      box-shadow: 0 2px 16px 0 rgba(0,198,255,0.10);
    }`
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const ContentTextHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: between;
  gap: 8px;

  @media (max-width: 1400px) {
    display: none;
  }
`;

export const MenuImgHeader = styled.div`
  align-self: center;
  cursor: pointer;
  margin-left: auto;
  padding: 8px;
  border-radius: 50%;
  background: rgba(255,255,255,0.08);
  transition: background 0.3s;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.10);
  &:hover {
    background: linear-gradient(90deg, #00c6ff 0%, #0072ff 100%);
    box-shadow: 0 2px 16px 0 rgba(0,198,255,0.12);
  }
`;

export const MenuOptions = styled.div`
  background: rgba(20, 20, 30, 0.98);
  border-radius: 18px;
  box-shadow: 0 4px 24px 0 rgba(0,0,0,0.18);
  padding: 18px 0;
  display: none;
  min-width: 180px;
  position: absolute;
  top: 60px;
  right: 24px;
  z-index: 100;
`;

export const TextOption = styled.strong`
  color: #fff;
  font-family: 'Fira Mono', 'JetBrains Mono', 'Roboto Mono', monospace;
  font-size: 1rem;
  padding: 8px 18px;
  border-radius: 10px;
  display: block;
  margin-bottom: 6px;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;
  &:hover {
    background: linear-gradient(90deg, #00c6ff 0%, #0072ff 100%);
    color: #fff;
    box-shadow: 0 2px 12px 0 rgba(0,198,255,0.10);
  }
`;