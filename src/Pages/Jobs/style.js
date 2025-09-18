import styled from "styled-components";
import imgExperience from "../../assets/img/imgExperience.jpg";

export const TitleSectionExperience = styled.h1`
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

export const SectionExperience = styled.section`
  background: linear-gradient(120deg, rgba(24,26,27,0.92) 60%, rgba(0,0,0,0.7)), url(${imgExperience});
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  justify-content: flex-start;
  height: 100%;
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

export const CardExperience = styled.div`
  min-width: 320px;
  max-width: 540px;
  color: #e0e0e0;
  display: flex;
  flex-direction: column;
  background: rgba(24,26,27,0.92);
  align-items: flex-start;
  border-radius: 16px;
  border: 1.5px solid #23272F;
  padding: 32px 32px 24px 32px;
  box-shadow: 0 4px 32px 0 rgba(0,0,0,0.18);
  margin: 0 auto 24px auto;
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

export const TextDateExperience = styled.p`
  font-size: 18px;
  margin-top: 0;
  color: #00e676;
  font-family: 'Fira Mono', 'Roboto Mono', monospace;
  font-weight: 700;
`;

export const TextDescriptionExperience = styled.p`
  font-size: 18px;
  margin-top: 10px;
  text-align: justify;
  text-justify: inter-word;
  color: #bdbdbd;
  font-family: 'Fira Mono', 'Roboto Mono', monospace;
`;

export const FooterSkillsExperience = styled.footer`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 18px;
`;

export const SkillsExperience = styled.div`
  display: flex;
  width: 48px;
  height: 48px;
  margin-right: 0;
  border-radius: 50%;
  padding: 6px;
  background: linear-gradient(135deg, #23272F 60%, #181A1B 100%);
  color: #00e676;
  box-shadow: 0 2px 8px rgba(0,0,0,0.12);
  place-content: center;
  align-items: center;
  border: 1.5px solid #23272F;
  font-size: 22px;
  transition: all 0.25s;
  &:hover {
    color: #fff;
    background: linear-gradient(135deg, #00e676 60%, #00bfa5 100%);
    border-color: #00e676;
    transform: scale(1.08) translateY(-2px);
    box-shadow: 0 4px 16px rgba(0,255,128,0.10);
  }
`;
