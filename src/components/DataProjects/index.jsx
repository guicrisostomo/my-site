import React, {useState, useEffect} from 'react';
import { getDocs, collection } from "firebase/firestore";
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
    ImgProject
} from "./style";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiFlutter } from 'react-icons/si';
import { useTranslation } from 'react-i18next';

export function DataProjects() {
    const [projects,setProjects]=useState([]);
    const { i18n } = useTranslation()
    const runCallback = (cb) => {
        return cb();
    };

    async function fetchProjects() {
        const projectsCol = collection(db, 'projects');
        const projectsSnapshot = await getDocs(projectsCol);
        setProjects(projectsSnapshot.docs.map(doc => doc.data()));
        return projects;
    }

    useEffect(() => {
        fetchProjects()
        console.log(projects)
    }, []);
    
    return(
        projects.map( (value) =>
            <Items key={value.nomeEN}>
                                
                <ItemProject href={value.link} target='_blank'>
                    <ItemProjectImg>
                        <ImgProject src={value.linkImage} />
                    </ItemProjectImg>
                    
                    <ItemProjectText>
                        <TextTitleProject>
                            {i18n.language === "pt-BR" && (
                                value.nomePT
                            )}

                            {i18n.language === "en-US" && (
                                value.nomeEN
                            )}
                        </TextTitleProject>

                        <TextInfoProject>
                            {i18n.language === "pt-BR" && (
                                value.descricaoPT
                            )}

                            {i18n.language === "en-US" && (
                                value.descricaoEN
                            )}
                        </TextInfoProject>

                        <ItemLanguagesProject>
                            {
                                runCallback(() => {
                                const row = [];
                                for (var i = 0; i < value.lenghtSkills; i++) {
                                    row.push(<ItemSkillImg Img={value.skill1} ImgDark={value.skillDark}/>);
                                }
                                return row;
                                })
                            }

                            <SiCss3 style={{display: 'flex', width: 50, height: 50, marginRight: '10px', borderRadius: '50%', borderStyle: 'solid', borderWidth: '1px', borderColor: 'white', padding: '5px'}}/>

                            <SiJavascript style={{display: 'flex', width: 50, height: 50, marginRight: '10px', borderRadius: '50%', borderStyle: 'solid', borderWidth: '1px', borderColor: 'white', padding: '5px'}}/>

                            <SiReact style={{display: 'flex', width: 50, height: 50, marginRight: '10px', borderRadius: '50%', borderStyle: 'solid', borderWidth: '1px', borderColor: 'white', padding: '5px'}}/>

                        </ItemLanguagesProject>
                    </ItemProjectText>
                    
                </ItemProject>
            </Items>
        )
    );
}