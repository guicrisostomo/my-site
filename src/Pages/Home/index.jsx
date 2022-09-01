import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Presentation from '../../components/Presentation';

import {
  SectionAbout,
  TextAbout,
  TextInfoAbout
} from './style.js';

export default function Home() {
  const { t } = useTranslation()

  return (
    <>
      
      <Header />
      <Presentation />
      
      <SectionAbout>
        
          <TextAbout>
            {t('about.title')}
          </TextAbout>

          <TextInfoAbout>
            {t('about.text')}
          </TextInfoAbout>

        
      </SectionAbout>
      
    </>
  );
}