import React from 'react';
import Header from '../../components/Header';
import { 
    SectionProjects,
    TextProjects,
    Items,
    ItemProject,
    ItemProjectImg,
    ItemProjectText,
    ItemLanguagesProject,
    TextTitleProject,
    TextInfoProject,
    ImgProject
} from "../Projects/style";

import imgIfood from '../../assets/img/imgIfood.svg'
import { SiHtml5, SiCss3, SiJavascript, SiReact } from 'react-icons/si';

export function Projects() {
    return(
        <>
            <Header />
            
            <SectionProjects>
                <TextProjects>
                    Projects
                </TextProjects>

                <Items>
                    <ItemProject href='https://github.com/guicrisostomo/Projetos-DIO/tree/master/React/Desafio%20-%20criando%20interface%20do%20iFood' target='_blank'>
                        <ItemProjectImg>
                            <ImgProject src={imgIfood} />
                        </ItemProjectImg>
                        
                        <ItemProjectText>
                            <TextTitleProject>Clone ifood</TextTitleProject>

                            <TextInfoProject>Projeto criado no bootcamp MRV FullStack Developer da DIO</TextInfoProject>

                            <ItemLanguagesProject>

                                <SiHtml5 style={{display: 'flex', width: 50, height: 50, marginRight: '10px', borderRadius: '50%', borderStyle: 'solid', borderWidth: '1px', borderColor: 'white', padding: '5px'}}/>

                                <SiCss3 style={{display: 'flex', width: 50, height: 50, marginRight: '10px', borderRadius: '50%', borderStyle: 'solid', borderWidth: '1px', borderColor: 'white', padding: '5px'}}/>

                                <SiJavascript style={{display: 'flex', width: 50, height: 50, marginRight: '10px', borderRadius: '50%', borderStyle: 'solid', borderWidth: '1px', borderColor: 'white', padding: '5px'}}/>

                                <SiReact style={{display: 'flex', width: 50, height: 50, marginRight: '10px', borderRadius: '50%', borderStyle: 'solid', borderWidth: '1px', borderColor: 'white', padding: '5px'}}/>

                            </ItemLanguagesProject>
                        </ItemProjectText>
                        
                    </ItemProject>
                </Items>
            </SectionProjects>
        </>
    )
}