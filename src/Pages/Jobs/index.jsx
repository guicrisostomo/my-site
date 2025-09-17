import React from "react";

import Header from "../../components/Header/index.jsx";
import {
  SectionExperience,
  CardExperience,
  SkillsExperience,
  FooterSkillsExperience,
  TextDateExperience,
  TextDescriptionExperience,
} from "./style";

import {
  SiReact,
  SiVite,
  SiGit,
  SiFlutter,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
  SiRedux,
} from "react-icons/si";
import { SiZod } from "react-icons/si";
import { useTranslation } from "react-i18next";

export default function Experience() {
  const { t } = useTranslation();
  const listExperience = t("experience", { returnObjects: true });
  
  console.log(listExperience);
  const GetIconSkill = (skill) => {
    switch (skill) {
      case "React":
        return (
          <SiReact
            style={{
              width: 30,
              height: 30,
              color: "black",
            }}
          />
        );

      case "Git":
        return (
          <SiGit
            style={{
              width: 30,
              height: 30,
              color: "black",
            }}
          />
        );
      case "Flutter":
        return (
          <SiFlutter
            style={{
              width: 30,
              height: 30,
              color: "black",
            }}
          />
        );
      case "PostgreSQL":
        return (
          <SiPostgresql
            style={{
              width: 30,
              height: 30,
              color: "black",
            }}
          />
        );
      case "Tailwind CSS":
        return (
          <SiTailwindcss
            style={{
              width: 30,
              height: 30,
              color: "black",
            }}
          />
        );
      case "TypeScript":
        return (
          <SiTypescript
            style={{
              width: 30,
              height: 30,
              color: "black",
            }}
          />
        );
      case "Redux":
        return (
          <SiRedux
            style={{
              width: 30,
              height: 30,
              color: "black",
            }}
          />
        );
      case "Vite":
        return (
          <SiVite
            style={{
              width: 30,
              height: 30,
              color: "black",
            }}
          />
        );
      case "Zod":
        return (
          <img
            src={"https://simpleicons.org/icons/zod.svg"}
            style={{
              width: 30,
              height: 30,
              color: "black",
            }}
            alt="Zod"
          />
        );
      case "React Hook Form":
        return (
          <img
            src={"https://simpleicons.org/icons/reacthookform.svg"}
            style={{
              width: 30,
              height: 30,
              color: "black",
            }}
            alt="React Hook Form"
          />
        );

      default:
        return null;
    }
  };

  return (
    <>
      <Header />

      <SectionExperience>
        {listExperience?.map((experience, index) => (
          <CardExperience key={index}>
            <div>
              <h1>
                {experience.company} - {experience.position}
              </h1>
              <TextDateExperience>{experience.date}</TextDateExperience>
            </div>
            <TextDescriptionExperience>
              {experience.description}
            </TextDescriptionExperience>
            <FooterSkillsExperience>
              {experience.skills.map((skill, index) => (
                <SkillsExperience key={index}>
                  {GetIconSkill(skill)}
                </SkillsExperience>
              ))}
            </FooterSkillsExperience>
          </CardExperience>
        ))}
      </SectionExperience>
    </>
  );
}
