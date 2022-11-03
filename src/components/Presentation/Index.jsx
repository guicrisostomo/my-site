import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import PathPhotoPresentation from '../../assets/img/photoPresentation.jpg';

import {
  SectionPresentation,
  TextPresentation,
  TextInfo,
  DivPresentation,
  PhotoPresentation,
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

        <DivPresentation>
          <TextPresentation><b>G</b>uilherme <b>C</b>risostomo da <b>S</b>ilva</TextPresentation>
          
          <TextInfo style={{color: 'white', margin: 'auto 0', display: 'flex'}}>
            {text}

            <div style={{marginLeft: '-5px'}}>
              <Cursor cursorStyle={'|'} />
            </div>

          </TextInfo>
        </DivPresentation>
    </SectionPresentation>
  )
}
