import React from "react";
import { Octokit } from "@octokit/core";
import { useEffect, useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineGithub } from "react-icons/ai";
import Header from "../../components/Header/index.jsx";
import Presentation from "../../components/Presentation/index.jsx";
import Footer from "../../components/Footer/index.jsx";
import getCodeTimeToday from "../../controller/codeTime/infoCodeTime.js";
import CodeTime from "../../model/codeTime.js";
import {
  ItemEventInfo,
  ItemEventInfoButton,
  ItemEventInfoButtonText,
  ItemEventInfoName,
  ItemEventInfoText,
  ItemEventInfoTexts,
  ItemsEventInfo,
  SectionAbout,
  SectionEvents,
  Subtitle,
  Title,
} from "./style.js";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <Presentation />

      <SectionAbout>
        <Title>{t("home.about.title")}</Title>

        <Subtitle>
          {t("home.about.text")}
        </Subtitle>
      </SectionAbout>

      <Footer />
    </>
  );
}
