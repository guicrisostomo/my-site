import styled from 'styled-components';
import imgCertifications from "../../assets/img/imgCertifications.jpg";

export const SectionCertifications = styled.section`
      background: linear-gradient(120deg, rgba(24,26,27,0.92) 60%, rgba(0,0,0,0.7)), url(${imgCertifications});
      width: 100%;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      background-attachment: fixed;
      justify-content: flex-start;
      
      margin-top: 12px;
      padding-top: 80px;
      padding-bottom: 32px;
      border-radius: 18px;
      box-shadow: 0 4px 32px 0 rgba(0,0,0,0.18);
      backdrop-filter: blur(2px);
      
      gap: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  `;

  export const TextCertificates = styled.h1`
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

  export const ItemCertificates = styled.a`
    background: linear-gradient(120deg, rgba(24,26,27,0.92) 60%, rgba(0,0,0,0.7)), url(${(props) => props.urlImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    color: #e0e0e0;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 180px;
    height: 180px;
    text-align: center;
    align-items: center;
    border-radius: 16px;
    border: 1.5px solid #23272F;
    padding: 32px 18px 18px 18px;
    box-shadow: 0 4px 32px 0 rgba(0,0,0,0.18);
    margin: 0 18px 24px 18px;
    place-content: center;
    text-decoration: none;
    font-family: 'Fira Mono', 'Roboto Mono', monospace;
    font-weight: 700;
    font-size: 18px;
    transition: box-shadow 0.3s, background 0.3s, color 0.3s, transform 0.3s;
    border-bottom: 3px solid #00e676;
    &:hover {
      background: linear-gradient(120deg, #181A1B 80%, #23272F 100%);
      color: #00e676;
      box-shadow: 0 8px 32px 0 rgba(0,255,128,0.10);
      transform: translateY(-4px) scale(1.03);
    }

    @media (max-width: 400px) {
      width: 60vw;
      height: 120px;
      font-size: 13px;
    }
  `;

  export const Items = styled.div`
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      gap: 32px;
      padding: 18px 0 0 0;
  `;

  export const TextInfoCertificates = styled.strong`
      padding-top: 10px;
      text-align: center;
      font-size: 16px;
      margin-right: 10px;
      font-family: 'Fira Mono', 'Roboto Mono', monospace;
      color: #bdbdbd;

      @media (max-width: 400px) {
          font-size: 12px;
      }
  `;