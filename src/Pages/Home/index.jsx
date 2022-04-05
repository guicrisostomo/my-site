import Header from '../../components/Header';
import Presentation from '../../components/Presentation';
import Slide from 'react-reveal/Slide';

import {
  SectionAbout,
  TextAbout,
  TextInfoAbout
} from './Style';

export default function Home() {
  return (
    <>
      
      <Header />
      <Presentation />
      
      <SectionAbout>
        <Slide left>
          <TextAbout>
            Sobre mim
          </TextAbout>

          <TextInfoAbout>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta iure aut repellendus tenetur iusto dolore quaerat dolorem? Hic, pariatur? Eveniet, saepe. Quibusdam ipsa iusto officiis tempora eveniet repellat laboriosam ad?
          </TextInfoAbout>
        </Slide>

        
      </SectionAbout>
      
    </>
  );
}