import styled from "styled-components";
import imgExperience from "../../assets/img/imgExperience.jpg";

export const SectionExperience = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${imgExperience});
  width: auto;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  justify-content: start;
  height: 100;
  min-height: 90%;
  padding-top: 72px;
  padding-bottom: 10px;
`;

export const CardExperience = styled.div`
  width: 100%;
  color: white;
  display: flex;
  flex-wrap: wrap;
  background-color: #000000a1;
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  border-color: white;
  padding: 42px 42px 42px 42px;
  box-shadow: 1px 1px 10px white;
  margin-top: 20px;
  cursor: pointer;
  text-decoration: none;
  transform: scale(80%, 80%);
  transition: 1s all;
  display: flex;
  flex-direction: column;

  :hover {
    background-color: #f2f2f2;
    color: black;
    transform: scale(90%, 90%);
  }
`;

export const TextDateExperience = styled.p`
  font-size: 20px;
  margin-top: -15px;
`;

export const TextDescriptionExperience = styled.p`
  font-size: 20px;
  margin-top: 10px;
  text-align: justify;
  text-justify: inter-word;
`;

export const FooterSkillsExperience = styled.footer`
  display: flex;
  flex-wrap: wrap;
`;

export const SkillsExperience = styled.div`
  display: flex;
  width: 50px;
  height: 50px;
  margin-right: 10px;
  border-radius: 50%;
  padding: 5px;
  background-color: white;
  color: black;
  box-shadow: white 0px 0px 50px;
  place-content: center;
  align-items: center;
`;
