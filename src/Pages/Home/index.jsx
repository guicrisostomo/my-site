import Header from '../../components/header';
import Presentation from '../../components/presentation';

import {
  SectionAbout,
  TextAbout,
  TextInfoAbout
} from './style.js';

export default function Home() {
  return (
    <>
      
      <Header />
      <Presentation />
      
      <SectionAbout>
        
          <TextAbout>
            Sobre mim
          </TextAbout>

          <TextInfoAbout>
            Sou estudante do 3 semestre de análise e desenvolvimento de sistemas pela FATEC de Ribeirão Preto. Tenho habilidades com HTML, CSS, JavaScript, Git, ReactJs, Styled Components. Apaixonado por aprender e enfrentar novos desafios, sempre busco me aperfeiçoar e sair da minha zona de conforto. Além disso, sempre dou toda minha energia nos desafios que surgem.
          </TextInfoAbout>

        
      </SectionAbout>
      
    </>
  );
}