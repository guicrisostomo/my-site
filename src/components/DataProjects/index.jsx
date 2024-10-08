import React, { useState, useEffect } from "react";
import { getDocs, collection, query, orderBy } from "firebase/firestore";
import db from "../../assets/database/config/index";
import {
  Items,
  ItemProject,
  ItemProjectImg,
  ItemProjectText,
  ItemSkillImg,
  ItemLanguagesProject,
  TextTitleProject,
  TextInfoProject,
  ImgProject,
} from "./style";
import { useTranslation } from "react-i18next";

export function DataProjects() {
  const [projects, setProjects] = useState([]);
  const { i18n } = useTranslation();
  const runCallback = (cb) => {
    return cb();
  };

  async function fetchProjects() {
    const projectsCol = collection(db, "projects");
    const projectsColOrder = query(projectsCol, orderBy("order", "asc"));
    const projectsSnapshot = await getDocs(projectsColOrder);
    setProjects(projectsSnapshot.docs.map((doc) => doc.data()));
    return projects;
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  return projects.map((value) =>
    runCallback(() => {
      try {
        return (
          <Items key={value.nomeEN}>
            <ItemProject href={value.link} target="_blank">
              <ItemProjectImg>
                <ImgProject src={value.linkImage} />
              </ItemProjectImg>

              <ItemProjectText>
                <TextTitleProject>
                  {i18n.language === "pt-BR" && value.nomePT}

                  {i18n.language === "en-US" && value.nomeEN}
                </TextTitleProject>

                <TextInfoProject>
                  {i18n.language === "pt-BR" && value.descricaoPT}

                  {i18n.language === "en-US" && value.descricaoEN}

                  <br />
                  <br />

                  <img
                    src={
                      "https://wakatime.com/badge/github/guicrisostomo/" +
                      value.link.replace(
                        "https://github.com/guicrisostomo/",
                        ""
                      ) +
                      ".svg"
                    }
                    alt="time_wasting_proj"
                  />
                </TextInfoProject>

                <ItemLanguagesProject>
                  {runCallback(() => {
                    const row = [];

                    for (var i = 0; i < value.skills.length; i++) {
                      row.push(
                        <ItemSkillImg
                          src={value.skills[i]}
                          ImgDark={value.skillDark}
                          key={"skill" + i}
                        />
                      );
                    }

                    return row;
                  })}
                </ItemLanguagesProject>
              </ItemProjectText>
            </ItemProject>
          </Items>
        );
      } catch (error) {}
    })
  );
}
