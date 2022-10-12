import React from 'react';
import Header from '../../components/Header';
import { 
    SectionProjects,
    TextProjects,
} from "../Projects/style";
import { useTranslation } from 'react-i18next';
import { DataProjects } from '../../components/DataProjects';

export function Projects() {
    const { t } = useTranslation()
    
    return(
        <>

            <Header />
            
            <SectionProjects>
                <TextProjects>
                    {t('projects.title.main')}
                </TextProjects>

                <DataProjects />

            </SectionProjects>
        </>
    )
}