import React from "react";
import {
  SectionCertifications,
  Items,
  ItemCertificates,
  TextCertificates,
  TextInfoCertificates,
} from "./style";

import imgDIO from "../../assets/img/imgDIO.jpg";
import imgCisco from "../../assets/img/imgCisco.jpg";
import imgIFSP from "../../assets/img/imgIFSP.jpg";
import imgVisualMidia from "../../assets/img/imgVisualMidia.jpg";
import imgOracle from "../../assets/img/imgOracle.png";

import { useTranslation } from "react-i18next";
import Header from "../../components/Header/index.jsx";
import Footer from "../../components/Footer/index.jsx";

export default function Certificates() {
  const { t } = useTranslation();

  return (
    <>
      <Header />

      <SectionCertifications>
        <TextCertificates>{t("certificates.title")}</TextCertificates>

        <Items>
          <ItemCertificates urlImage={imgDIO}>
            <TextInfoCertificates>MRV Fullstack Developer</TextInfoCertificates>
          </ItemCertificates>

          <ItemCertificates urlImage={imgIFSP}>
            <TextInfoCertificates>
              Programação de Computadores e Dispositivos Móveis
            </TextInfoCertificates>
          </ItemCertificates>

          <ItemCertificates urlImage={imgIFSP}>
            <TextInfoCertificates>
              Introdução à Programação WEB
            </TextInfoCertificates>
          </ItemCertificates>

          <ItemCertificates urlImage={imgCisco}>
            <TextInfoCertificates>Introdução às redes</TextInfoCertificates>
          </ItemCertificates>

          <ItemCertificates urlImage={imgCisco}>
            <TextInfoCertificates>
              Introduction to Cybersecurity
            </TextInfoCertificates>
          </ItemCertificates>

          <ItemCertificates urlImage={imgCisco}>
            <TextInfoCertificates>NDG Linux Unhatched</TextInfoCertificates>
          </ItemCertificates>

          <ItemCertificates urlImage={imgVisualMidia}>
            <TextInfoCertificates>Operador de Computador</TextInfoCertificates>
          </ItemCertificates>

          <ItemCertificates urlImage={imgOracle}>
            <TextInfoCertificates>
              Database Design and Programming with SQL
            </TextInfoCertificates>
          </ItemCertificates>
        </Items>
      </SectionCertifications>

      <Footer />
    </>
  );
}
