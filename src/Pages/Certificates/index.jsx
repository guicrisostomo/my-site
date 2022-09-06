import React from 'react'
import { 
    SectionCertifications,
    Items,
    ItemCertificates,
    TextCertificates,
    TextInfoCertificates
} from "./style";

export function Certificates() {
    return(
        <SectionCertifications>
            <TextCertificates>
                Certificates
            </TextCertificates>

            <Items>
                <ItemCertificates href="https://github.com/guicrisostomo/Projetos-DIO/tree/master/HTML%20e%20CSS" target='_blank'>
                    <TextInfoCertificates>MRV Fullstack Developer</TextInfoCertificates>
                </ItemCertificates>

                <ItemCertificates href="https://github.com/guicrisostomo/Projetos-DIO/tree/master/HTML%20e%20CSS" target='_blank'>
                    <TextInfoCertificates>Programação de Computadores e Dispositivos Móveis
                    </TextInfoCertificates>
                </ItemCertificates>

                <ItemCertificates href="https://github.com/guicrisostomo/Projetos-DIO/tree/master/HTML%20e%20CSS" target='_blank'>
                    <TextInfoCertificates>Introdução às redes</TextInfoCertificates>
                </ItemCertificates>

                <ItemCertificates href="https://github.com/guicrisostomo/Projetos-DIO/tree/master/HTML%20e%20CSS" target='_blank'>
                    <TextInfoCertificates>
                    Introdução à Programação WEB
                    </TextInfoCertificates>
                </ItemCertificates>

                <ItemCertificates href="https://github.com/guicrisostomo/Projetos-DIO/tree/master/HTML%20e%20CSS" target='_blank'>
                    <TextInfoCertificates>
                    Introduction to Cybersecurity
                    </TextInfoCertificates>
                </ItemCertificates>

                <ItemCertificates href="https://github.com/guicrisostomo/Projetos-DIO/tree/master/HTML%20e%20CSS" target='_blank'>
                    <TextInfoCertificates>NDG Linux Unhatched
                    </TextInfoCertificates>
                </ItemCertificates>

            </Items>
        </SectionCertifications>
    )
}