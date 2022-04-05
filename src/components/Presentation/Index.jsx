import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { AiOutlineMail, AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import Slide from 'react-reveal/Slide';
import PathPhotoPresentation from '../../assets/img/photoPresentation.jpg';

import {
  SectionPresentation,
  TextPresentation,
  TextInfo,
  PhotoPresentation,
  Icons
} from './Style.js'

export default function Presentation() {
  

  return (
    <SectionPresentation>
      <Slide right>
        <PhotoPresentation src={PathPhotoPresentation}/>

        <div style={{display: 'flex', flexDirection: 'column'}}>
          <TextPresentation><b>G</b>uilherme <b>C</b>risostomo da <b>S</b>ilva</TextPresentation>
          
          <TextInfo style={{color: 'white', marginTop: 0}}>
              {/* Style will be inherited from the parent element */}
            <Typewriter
              loop
              cursor
              cursorStyle='_'
              typeSpeed={40}
              deleteSpeed={10}
              delaySpeed={1000}
              words={['Developer front-end Reactjs', 'Desenvolvedor front-end Reactjs']}
            />
          </TextInfo>
        </div>

        <div style={{display: 'flex', flexDirection: 'row', marginLeft: 'auto'}}>
          <Icons href='https://github.com/guicrisostomo' target="_blank">
            <AiOutlineGithub fontSize={30} cursor="pointer" className='icon-github'/>
          </Icons>

          <Icons href='https://www.linkedin.com/in/guilherme-crisostomo-da-silva' target="_blank">
            <AiOutlineLinkedin fontSize={30} cursor="pointer"/>
          </Icons>

          <Icons href="mailto:guilherme.silva9872@gmail.com" target="_blank">
            <AiOutlineMail fontSize={30} cursor="pointer" />
          </Icons>
        </div>
      </Slide>
    </SectionPresentation>
  )
}
