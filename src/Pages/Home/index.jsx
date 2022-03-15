import About from '../../components/About/Index';
import Contact from '../../components/Contact/Index';
import { Home } from '../../components/Header/Index';
import Presentation from '../../components/Presentation/Index';
import Skill from '../../components/Skills/Index';

function Index() {
  return (
    <div style={{backgroundColor: '#282929'}}>
      
      <Home/>
      <main>
        <Presentation/>
        <About />
        <Skill />
        <Contact />
      </main>
    </div>
  );
}

export default Index;
