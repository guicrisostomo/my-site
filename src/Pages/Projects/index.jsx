import React from 'react';
import Header from '../../components/Header';
import { 
    SectionProjects,
    TextProjects,
} from "../Projects/style";

export function Projects() {
    return(
        <>
            <Header />
            
            <SectionProjects>
                <TextProjects>
                    Projects
                </TextProjects>
            </SectionProjects>
        </>
    )
}