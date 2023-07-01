import React from 'react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header/index.jsx';
import Presentation from '../../components/Presentation/index.jsx';
import { Octokit } from "@octokit/core";
import { AiOutlineGithub } from "react-icons/ai";

import {
  Title,
  SectionAbout,
  Subtitle,
  SectionEvents,
  ItemsEventInfo,
  ItemEventInfo,
  ItemEventInfoButton,
  ItemEventInfoButtonText,
  ItemEventInfoTexts,
  ItemEventInfoName,
  ItemEventInfoText,
} from './style.js';
import Footer from '../../components/Footer/index.jsx';
import { useMemo } from 'react';
import getCodeTimeToday from '../../controller/codeTime/infoCodeTime.js';
import CodeTime from '../../model/codeTime.js';

export default function Home() {
  const { t } = useTranslation()
  const [events, setEvents] = useState([])
  const { i18n } = useTranslation()
  const [codeTime, setCodeTime] = useState(CodeTime.create(0, 0, 0))

  const getData = async () => {
    
    const perPage = 5;

    const octokit = new Octokit({ auth: process.env.REACT_APP_VERCEL_GITHUB_TOKEN });
    const json = await octokit.request('GET /users/{username}/events/public', {
      username: 'guicrisostomo',
      per_page: perPage
    })

    setEvents(json.data)
  }

  useEffect(() => {
    getData()
  }, [])

  function reverseDateEN(str) {
    return str.split("-")[1] + '/' + str.split("-")[2] + '/' + str.split("-")[0];
  }

  function separateUpperLetters(str) {
    const arrayStr = str.replace('event', '').split(/(?=[A-ZÀ-Ú])/)
    return arrayStr.join(' ');
  }

  function subHour(time) {
    const dateStr = time;

    const [dateRelated, timeRelated] = dateStr.split(' ');

    const [month, day, year] = dateRelated.split('/');
    const [hours, minutes, seconds] = timeRelated.split(':');

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(Date.UTC(year, month-1, day, hours,  minutes, seconds)).toLocaleTimeString(i18n.languages, options)
    return date;
  }

  function alimentaDadosClasseCodeTime(data) {
    
    const itemToday = data[data.length - 1]
        
        const codeTime = CodeTime.create(
            itemToday.total,
            itemToday.categories[1].total,
            itemToday.categories[0].total,
        )

        return codeTime;
   }

  useMemo(() => {
    getCodeTimeToday().then((data) => {
        setCodeTime(alimentaDadosClasseCodeTime(data))
    });
  }, [])
  
  return (
    <>
      
      <Header />
      <Presentation />
      
      <SectionAbout>
        
        <Title>
          {t('home.about.title')}
        </Title>

        <Subtitle>
            Tempo total: {
                codeTime ? (codeTime.timeTotal / 3600).toFixed(0) : ''
            } horas e {
                codeTime ? (codeTime.timeTotal / 60).toFixed(0) - ((codeTime.timeTotal / 3600).toString().split('.')[0] * 60) : ''
            } minutos

            <br />

            Tempo codando: {
                codeTime ? (codeTime.timeCoding / 3600).toString().split('.')[0] : ''
            } horas e {
                codeTime ? ((codeTime.timeCoding / 60).toFixed(0) - ((codeTime.timeCoding / 3600).toString().split('.')[0] * 60)) : ''
            } minutos

            <br />

            Tempo navegando: {
                codeTime ? (codeTime.timeBrowsing / 3600).toString().split('.')[0] : ''
            } horas e {
                codeTime ? (codeTime.timeBrowsing / 60).toFixed(0) - ((codeTime.timeBrowsing / 3600).toString().split('.')[0] * 60) : ''
            } minutos 

            <br />
            <br />

            {t('home.about.text')}
        </Subtitle>


      </SectionAbout>
      
      <SectionEvents>
        <Title>
          {t('home.event.title')}
        </Title>

        <Subtitle>
          {t('home.event.text')}
        </Subtitle>

        <ItemsEventInfo>
          {
            events !== undefined &&
            events.map((item => (
              <ItemEventInfo key={item.id}>
                <ItemEventInfoTexts>
                  <ItemEventInfoName>
                    {
                      item.repo.name.toString().replace('guicrisostomo/', '').replaceAll('-', ' ')
                    }
                  </ItemEventInfoName>
                  
                  <ItemEventInfoText>
                    {
                      t('home.event.typeEvent') + separateUpperLetters(item.type.toString().toLowerCase())
                    }

                    <br />

                    {
                      t('home.event.date') + subHour(reverseDateEN(item.created_at.toString().replaceAll((/[A-Za-z]/g), ' ').split(' ')[0]) + ' ' + item.created_at.toString().replaceAll((/[A-Za-z]/g), ' ').split(' ')[1]).toString()
                    }
                    
                  </ItemEventInfoText>
                </ItemEventInfoTexts>

                <ItemEventInfoButton href={'https://github.com/' + item.repo.name} target='_blank'>
                  <AiOutlineGithub fontSize={30} cursor="pointer" className='icon-github' />

                  <ItemEventInfoButtonText>
                    {t('home.event.button')}
                  </ItemEventInfoButtonText>
                </ItemEventInfoButton>
              </ItemEventInfo>
            )))
          }
        </ItemsEventInfo>
      </SectionEvents>
      
      <Footer />
    </>
  );
}