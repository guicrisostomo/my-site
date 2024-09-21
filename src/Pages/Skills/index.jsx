import React from "react";
import {
  SectionSkills,
  TextSkill,
  Items,
  ItemSkill,
  TextInfoSkill,
} from "./style.js";
import {
  SiReact,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiGit,
  SiFlutter,
  SiPostgresql,
  SiCsharp,
  SiDotnet,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiNestjs,
} from "react-icons/si";
import Header from "../../components/Header/index.jsx";
import { useTranslation } from "react-i18next";
import Footer from "../../components/Footer/index.jsx";

export default function Skill() {
  const { t } = useTranslation();

  return (
    <>
      <Header />

      <SectionSkills style={{ backgroundColor: "#100f0f" }}>
        <TextSkill>{t("skill.title")}</TextSkill>

        <Items>
          <ItemSkill
            href="https://github.com/guicrisostomo/Projetos-DIO/tree/master/HTML%20e%20CSS"
            target="_blank"
          >
            <SiHtml5
              style={{
                display: "flex",
                width: 50,
                height: 50,
                marginRight: "10px",
                borderRadius: "50%",
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "white",
                padding: "5px",
                boxShadow: "white 0px 0px 50px",
              }}
            />

            <TextInfoSkill>HTML5</TextInfoSkill>
          </ItemSkill>

          <ItemSkill
            href="https://github.com/guicrisostomo/Projetos-DIO/tree/master/HTML%20e%20CSS"
            target="_blank"
          >
            <SiCss3
              style={{
                display: "flex",
                width: 50,
                height: 50,
                marginRight: "10px",
                borderRadius: "50%",
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "white",
                padding: "5px",
                boxShadow: "white 0px 0px 50px",
              }}
            />

            <TextInfoSkill>CSS3</TextInfoSkill>
          </ItemSkill>

          <ItemSkill
            href="https://github.com/guicrisostomo/Projetos-DIO/tree/master/JavaScript"
            target="_blank"
          >
            <SiJavascript
              style={{
                display: "flex",
                width: 50,
                height: 50,
                marginRight: "10px",
                borderRadius: "50%",
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "white",
                padding: "5px",
                boxShadow: "white 0px 0px 50px",
              }}
            />

            <TextInfoSkill>JAVASCRIPT</TextInfoSkill>
          </ItemSkill>

          <ItemSkill
            href="https://github.com/guicrisostomo/application-RSAcryptography"
            target="_blank"
          >
            <SiTypescript
              style={{
                display: "flex",
                width: 50,
                height: 50,
                marginRight: "10px",
                borderRadius: "50%",
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "white",
                padding: "5px",
                boxShadow: "white 0px 0px 50px",
              }}
            />

            <TextInfoSkill>TYPESCRIPT</TextInfoSkill>
          </ItemSkill>

          <ItemSkill
            href="https://github.com/guicrisostomo/my-site"
            target="_blank"
          >
            <SiReact
              style={{
                display: "flex",
                width: 50,
                height: 50,
                marginRight: "10px",
                borderRadius: "50%",
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "white",
                padding: "5px",
                boxShadow: "white 0px 0px 50px",
              }}
            />

            <TextInfoSkill>REACTJS</TextInfoSkill>
          </ItemSkill>

          <ItemSkill
            href="https://github.com/guicrisostomo/my-site"
            target="_blank"
          >
            <SiFlutter
              style={{
                display: "flex",
                width: 50,
                height: 50,
                marginRight: "10px",
                borderRadius: "50%",
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "white",
                padding: "5px",
                boxShadow: "white 0px 0px 50px",
              }}
            />

            <TextInfoSkill>FLUTTER</TextInfoSkill>
          </ItemSkill>

          <ItemSkill
            href="https://github.com/guicrisostomo/my-site"
            target="_blank"
          >
            <SiStyledcomponents
              style={{
                display: "flex",
                width: 50,
                height: 50,
                marginRight: "10px",
                borderRadius: "50%",
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "white",
                padding: "5px",
                boxShadow: "white 0px 0px 50px",
              }}
            />

            <TextInfoSkill>STYLED COMPONENTS</TextInfoSkill>
          </ItemSkill>

          <ItemSkill
            href="https://github.com/guicrisostomo/application-RSAcryptography"
            target="_blank"
          >
            <SiTailwindcss
              style={{
                display: "flex",
                width: 50,
                height: 50,
                marginRight: "10px",
                borderRadius: "50%",
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "white",
                padding: "5px",
                boxShadow: "white 0px 0px 50px",
              }}
            />

            <TextInfoSkill>TAILWIND</TextInfoSkill>
          </ItemSkill>

          <ItemSkill
            href="https://github.com/guicrisostomo/College-exercises"
            target="_blank"
          >
            <SiPostgresql
              style={{
                display: "flex",
                width: 50,
                height: 50,
                marginRight: "10px",
                borderRadius: "50%",
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "white",
                padding: "5px",
                boxShadow: "white 0px 0px 50px",
              }}
            />

            <TextInfoSkill>SQL</TextInfoSkill>
          </ItemSkill>

          <ItemSkill href="https://github.com/guicrisostomo/" target="_blank">
            <SiGit
              style={{
                display: "flex",
                width: 50,
                height: 50,
                marginRight: "10px",
                borderRadius: "50%",
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "white",
                padding: "5px",
                boxShadow: "white 0px 0px 50px",
              }}
            />

            <TextInfoSkill>GIT</TextInfoSkill>
          </ItemSkill>

          <ItemSkill href="https://github.com/guicrisostomo/" target="_blank">
            <SiNestjs
              style={{
                display: "flex",
                width: 50,
                height: 50,
                marginRight: "10px",
                borderRadius: "50%",
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "white",
                padding: "5px",
                boxShadow: "white 0px 0px 50px",
              }}
            />

            <TextInfoSkill>NESTJS</TextInfoSkill>
          </ItemSkill>
        </Items>
      </SectionSkills>

      <Footer />
    </>
  );
}
