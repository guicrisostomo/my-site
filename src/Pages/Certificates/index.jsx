import React from 'react'
import { 
    SectionCertifications,
    Items,
    ItemCertificates,
    TextCertificates,
    TextInfoCertificates,
} from "./style";

import imgDIO from '../../assets/img/imgDIO.jpg';
import imgCisco from '../../assets/img/imgCisco.jpg';
import imgIFSP from '../../assets/img/imgIFSP.jpg';
import imgVisualMidia from '../../assets/img/imgVisualMidia.jpg';

import pdfMRV from '../../assets/certificates/MRV Fullstack Developer.pdf';
import pdfMobileAppDevelopment from '../../assets/certificates/Programação de Computadores e Dispositivos Móveis.pdf';
import pdfDevelopmentWEB from '../../assets/certificates/Introdução à Programação para WEB.pdf';
import pdfIntroductionNetwork from '../../assets/certificates/CCNAv7 Introdução às redes.pdf';
import pdfIntroductionCybersecurity from '../../assets/certificates/Introduction to Cybersecurity.pdf';
import pdfLinux from '../../assets/certificates/NDG Linux Unhatched Português.pdf';
import pdfComputerOperator from '../../assets/certificates/Operador de computador.pdf';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header/index.jsx';
import Footer from '../../components/Footer/index.jsx';

export default function Certificates() {
    const { t } = useTranslation()

    return(
        <>
            <Header />

            <SectionCertifications>
                <TextCertificates>
                    {t('certificates.title')}
                </TextCertificates>

                <Items>
                    <ItemCertificates href={pdfMRV} target='_blank' urlImage={imgDIO}>
                        <TextInfoCertificates>MRV Fullstack Developer</TextInfoCertificates>
                    </ItemCertificates>

                    <ItemCertificates href={pdfMobileAppDevelopment} target='_blank' urlImage={imgIFSP}>
                        <TextInfoCertificates>Programação de Computadores e Dispositivos Móveis
                        </TextInfoCertificates>
                    </ItemCertificates>

                    <ItemCertificates href={pdfDevelopmentWEB} target='_blank'  urlImage={imgIFSP}>
                        <TextInfoCertificates>
                        Introdução à Programação WEB
                        </TextInfoCertificates>
                    </ItemCertificates>

                    <ItemCertificates href={pdfIntroductionNetwork} target='_blank' urlImage={imgCisco}>
                        <TextInfoCertificates>Introdução às redes</TextInfoCertificates>
                    </ItemCertificates>

                    <ItemCertificates href={pdfIntroductionCybersecurity} target='_blank'  urlImage={imgCisco}>
                        <TextInfoCertificates>
                        Introduction to Cybersecurity
                        </TextInfoCertificates>
                    </ItemCertificates>

                    <ItemCertificates href={pdfLinux} target='_blank'  urlImage={imgCisco}>
                        <TextInfoCertificates>NDG Linux Unhatched
                        </TextInfoCertificates>
                    </ItemCertificates>

                    <ItemCertificates href={pdfComputerOperator} target='_blank'  urlImage={imgVisualMidia}>
                        <TextInfoCertificates>
                            Operador de Computador
                        </TextInfoCertificates>
                    </ItemCertificates>

                </Items>
            </SectionCertifications>

            <Footer />
        </>
    )
}