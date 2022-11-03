import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { AiOutlineMail, AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import PathPhotoPresentation from '../../assets/img/photoPresentation.jpg';

import {
  SectionPresentation,
  TextPresentation,
  TextInfo,
  PhotoPresentation,
  Icons
} from './style.js'

export default function Presentation() {
  const {text} = useTypewriter({
    words: ['<Developer front-end />', '<Desenvolvedor front-end />'],
    loop: {},
    typeSpeed: 40,
    deleteSpeed: 10,
    delaySpeed: 1000,
  })

  return (
    <SectionPresentation>
        <PhotoPresentation src={PathPhotoPresentation}/>

        <div style={{display: 'flex', flexDirection: 'column'}}>
          <TextPresentation><b>G</b>uilherme <b>C</b>risostomo da <b>S</b>ilva</TextPresentation>
          
          <TextInfo style={{color: 'white', margin: 'auto 0', display: 'flex'}}>
            {text}

            <div style={{marginLeft: '-5px'}}>
              <Cursor cursorStyle={'|'} />
            </div>
            
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
    </SectionPresentation>
  )
}
