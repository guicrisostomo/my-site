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

export async function fetchProjects() {
  const projectsCol = collection(db, "projects");
  const projectsColOrder = query(projectsCol, orderBy("order", "asc"));
  const projectsSnapshot = await getDocs(projectsColOrder);
  return projectsSnapshot.docs.map((doc) => doc.data());
}

export function DataProjects() {
  const [projects, setProjects] = useState([]);
  const { i18n } = useTranslation();

  useEffect(() => {
    fetchProjects().then((data) => {
      console.log(data);
      setProjects(data);
    });
  }, []);

  return <div  data-testid='data-projects'>{projects.map((value) =>
        (
          <Items key={value.nomeEN} data-testid="listitem">
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
                  {value.skills.map((value) => (
                    <ItemSkillImg
                      key={value}
                      src={value}
                      alt={value}
                    />
                  ))}
                </ItemLanguagesProject>
              </ItemProjectText>
            </ItemProject>
          </Items>
        )
  )}</div>;
}
