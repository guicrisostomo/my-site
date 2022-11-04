import React from 'react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header/index.jsx';
import { Octokit } from "@octokit/core";
import { AiOutlineGithub } from "react-icons/ai";

import {
  Title,
  Subtitle,
  SelectDate,
  SectionCommits,
  ItemsCommitInfo,
  ItemCommitInfo,
  ItemCommitInfoButton,
  ItemCommitInfoButtonText,
  ItemCommitInfoTexts,
  ItemCommitInfoName,
  ItemCommitInfoText,
} from './style.js';
import Footer from '../../components/Footer/index.jsx';
import DropDownDate from '../../components/DropDown/index.jsx';

export default function Updates() {
  const { t } = useTranslation()
  const { i18n } = useTranslation()
  const listOptionsSelectDate = t('updates.select.options', { returnObjects: true })
  const dateToday = new Date().toLocaleDateString('en-US').split('/');
  let dateTomorrow = new Date()
  dateTomorrow.setDate(dateTomorrow.getDate() + 1)
  dateTomorrow = dateTomorrow.toLocaleDateString('en-US').split('/');

  if (dateToday[0].length === 1) {
    dateToday[0] = '0' + dateToday[0];
  }

  if (dateToday[1].length === 1) {
    dateToday[1] = '0' + dateToday[1];
  }

  if (dateTomorrow[0].length === 1) {
    dateTomorrow[0] = '0' + dateTomorrow[0];
  }

  if (dateTomorrow[1].length === 1) {
    dateTomorrow[1] = '0' + dateTomorrow[1];
  }

  const textDateToday = dateToday[2] + '-' + dateToday[0] + '-' + dateToday[1]
  const textDateTomorrow = dateTomorrow[2] + '-' + dateTomorrow[0] + '-' + dateTomorrow[1]
  const [commits, setCommits] = useState([])
  const [heightSectionCommit, setHeightSectionCommit] = useState('100')
  const [selectDate, setSelectDate] = useState('today')

  const getData = async (date, dateTomorrow) => {

    const octokit = new Octokit({ auth: process.env.REACT_APP_VERCEL_GITHUB_TOKEN });

    const json = await octokit.request('GET /search/commits?q=committer-date:{date}T03:00:00..{dateTomorrow}T03:00:00%20author:{username}+sort:{dateasc}', {
      username: 'guicrisostomo',
      date: date,
      dateTomorrow: dateTomorrow,
      dateasc: 'committer-date-desc'
    })

    setCommits(json.data.items)
  }

  useEffect(() => {
    switch (selectDate) {
      case 'Today':
        getData(textDateToday.toString(), textDateTomorrow.toString())
        break;
      case 'This week':
        const dayToday = new Date().getDay()
        let dayInitialWeek = new Date()
        dayInitialWeek.setDate(parseInt(dateToday[1]) - new Date().getDate())
        getData(dayInitialWeek, textDateTomorrow.toString())
        break;
      case 'This month':
        getData(dateToday[2] + '-' + dateToday[0] + '-01', textDateTomorrow.toString())
        break;
      case 'This year':
        getData(dateToday[2] + '-' + '01-01', textDateTomorrow.toString())
        break;
      case 'Custom':
        break;
      default:
        getData(textDateToday.toString(), textDateTomorrow.toString())
        break;
    }
  }, [selectDate])

  useEffect(() => {
    if(commits.length > 1) {
      setHeightSectionCommit('100')
    } else {
      setHeightSectionCommit('100vh')
    }
  }, [commits])

  function Section(props) {
    return (
      <SectionCommits height={heightSectionCommit}>
        {props.children}
      </SectionCommits>
    )
  }

  function reverseDateEN(str) {
    return str.split("-")[1] + '/' + str.split("-")[2] + '/' + str.split("-")[0];
  }

  function separateUpperLetters(str) {
    const arrayStr = str.replace('Event', '').split(/(?=[A-ZÀ-Ú])/)
    return arrayStr.join(' ');
  }

  function subHour(time) {
    const dateStr = time.replace('.000-03:00', '');

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateStr).toLocaleTimeString(i18n.languages, options)
    return date;
  }

  function handleSelectDateTypeChange(e) {
    setSelectDate(e.target.value);
  }
  
  return (
    <>
      
      <Header />

      <Section style={{height: heightSectionCommit}}>
        <Title>
          {t('updates.title') + selectDate.toLowerCase()}
        </Title>

        <Subtitle>
          {t('updates.subtitle') + selectDate.toLowerCase()}
        </Subtitle>

        <SelectDate>
          <Subtitle>
            {t('updates.select.title')}
          </Subtitle>

          <select onChange={handleSelectDateTypeChange} defaultValue={selectDate} >
            {
              listOptionsSelectDate.map((item => (
                <option value={item.value} key={item.value + 'Option'}>{item.name}</option>
              )))
            }
          </select>
        </SelectDate>
        
        <ItemsCommitInfo>
          {
            commits !== undefined &&
            commits.map((item => (
              <ItemCommitInfo key={item.sha}>
                <ItemCommitInfoTexts>
                  <ItemCommitInfoName>
                    {
                      item.repository.name.toString().replaceAll('-', ' ')
                    }
                  </ItemCommitInfoName>
                  
                  <ItemCommitInfoText>
                    {
                      t('updates.message') + separateUpperLetters(item.commit.message.toString())
                    }

                    <br />

                    {
                      t('home.event.date') + subHour(reverseDateEN(item.commit.committer.date.toString().replaceAll((/[A-Za-z]/g), ' ').split(' ')[0]) + ' ' + item.commit.committer.date.toString().replaceAll((/[A-Za-z]/g), ' ').split(' ')[1]).toString()
                    }
                    
                  </ItemCommitInfoText>
                </ItemCommitInfoTexts>
                
                <br />

                <div style={{display: 'flex'}}>
                  <ItemCommitInfoButton href={item.repository.html_url.toString()} target='_blank'>
                    <AiOutlineGithub fontSize={30} cursor="pointer" className='icon-github' />

                    <ItemCommitInfoButtonText>
                      {t('updates.buttonCode')}
                    </ItemCommitInfoButtonText>
                  </ItemCommitInfoButton>

                  <ItemCommitInfoButton href={item.html_url.toString()} target='_blank'>
                    <AiOutlineGithub fontSize={30} cursor="pointer" className='icon-github' />

                    <ItemCommitInfoButtonText>
                      {t('updates.buttonChanged')}
                    </ItemCommitInfoButtonText>
                  </ItemCommitInfoButton>
                </div>

              </ItemCommitInfo>
            )))
          }
        </ItemsCommitInfo>
      </Section>
      
      <Footer />
    </>
  );
}