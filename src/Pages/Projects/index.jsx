import { useTranslation } from "react-i18next";
import { DataProjects } from "../../components/DataProjects/index.jsx";
import Footer from "../../components/Footer/index.jsx";
import Header from "../../components/Header/index.jsx";
import { SectionProjects, TextProjects } from "./style";
import React from "react";

export default function Projects() {
  const { t } = useTranslation();

  return (
    <>
      <Header />

      <SectionProjects>
        <TextProjects>{t("projects.title.main")}</TextProjects>

        <DataProjects />
      </SectionProjects>
      <Footer />

    </>
  );
}
