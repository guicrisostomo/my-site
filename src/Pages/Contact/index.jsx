import React from 'react'
import {
  SectionContact,
  TextContact,
  Items,
  ItemContact,
  TextInfoContact
} from './style.js'
import Header from '../../components/Header/index.jsx';
import { GoLocation } from "react-icons/go";
import { AiOutlineMail, AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation()
  
  return (
    <>
      <Header />

      <SectionContact style={{backgroundColor: '#100f0f'}}>
          <TextContact>
            {t('contact.title')}
          </TextContact>

          <Items>
            <ItemContact>
              <GoLocation style={{display: 'flex', width: 50, height: 50, padding: '5px'}}/>
              <TextInfoContact>Jardinópolis, São Paulo</TextInfoContact>
            </ItemContact>

            <ItemContact href='mailto:guilherme.silva9872@gmail.com' target='_blank'>
              <AiOutlineMail style={{display: 'flex', width: 50, height: 50, padding: '5px'}}/>
              <TextInfoContact>guilherme.silva9872@gmail.com</TextInfoContact>
            </ItemContact>

            <ItemContact href='https://github.com/guicrisostomo' target='_blank'>
              <AiOutlineGithub style={{display: 'flex', width: 50, height: 50, padding: '5px'}}/>
              <TextInfoContact>/guicrisostomo</TextInfoContact>
            </ItemContact>

            <ItemContact href='https://www.linkedin.com/in/guilherme-crisostomo-da-silva' target='_blank'>
              <AiOutlineLinkedin style={{display: 'flex', width: 50, height: 50, padding: '5px'}}/>
              <TextInfoContact>/guilherme-crisostomo-da-silva</TextInfoContact>
            </ItemContact>
          </Items>

      </SectionContact>
    </>
  )
}
