import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import PathPhotoPresentation from '../../assets/img/photoPresentation.jpg';

import {
  ArticlePresentation,
  TextPresentation,
  PhotoPresentation
} from './Style.js'

export default function Presentation() {
  

  return (
    <ArticlePresentation>
      <PhotoPresentation src={PathPhotoPresentation}/>

      <div style={{display: 'flex', flexDirection: 'column'}}>
        <TextPresentation><b>G</b>uilherme <b>C</b>risostomo da <b>S</b>ilva</TextPresentation>
        
        <h3 style={{color: 'white'}}>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              loop
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              words={['Developer front-end', 'Desenvolvedor front-end']}
            />
          </h3>
        </div>
    </ArticlePresentation>
  )
}
