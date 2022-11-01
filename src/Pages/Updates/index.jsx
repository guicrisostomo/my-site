import { useState } from 'react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header/index.jsx';
import Presentation from '../../components/Presentation/index.jsx';
import { Octokit } from "@octokit/core";
import { AiOutlineGithub } from "react-icons/ai";

import {
  Title,
  Subtitle,
  SectionCommits,
  ItemsCommitInfo,
  ItemCommitInfo,
  ItemCommitInfoButton,
  ItemCommitInfoButtonText,
  ItemCommitInfoTexts,
  ItemCommitInfoName,
  ItemCommitInfoText,
} from './style.js';

export default function Updates() {
  const { t } = useTranslation()
  const [commits, setCommits] = useState([{sha: 'idCommit', html_url: 'https://github.com/guicrisostomo/', commit: {message: 'Commit', committer: {date: '0000-00-00'}}, repository: {name: 'Repositório', html_url: 'https://github.com/guicrisostomo/'}}])
  const { i18n } = useTranslation()

  const getData = async () => {
    
    const dateToday = new Date().toLocaleDateString(i18n.languages).split('/');
    const textDateToday = dateToday[2] + '-' + dateToday[0] + '-' + dateToday[1]
    const octokit = new Octokit({ auth: process.env.REACT_APP_GITHUB_TOKEN });

    const json = await octokit.request('GET /search/commits?q=committer-date:{date}%20author:{username}', {
      username: 'guicrisostomo',
      date: textDateToday.toString(),
    })

    setCommits(json.data.items)
  }

  useEffect(() => {
    getData()
  }, [])

  function reverseDateEN(str) {
    return str.split("-")[1] + '/' + str.split("-")[2] + '/' + str.split("-")[0];
  }

  function separateUpperLetters(str) {
    const arrayStr = str.replace('Event', '').split(/(?=[A-ZÀ-Ú])/)
    return arrayStr.join(' ');
  }

  function subHour(time) {
    const dateStr = time.replace('.000-03:00', '');

    const [dateRelated, timeRelated] = dateStr.split(' ');

    const [month, day, year] = dateRelated.split('/');
    const [hours, minutes, seconds] = timeRelated.split(':');

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(Date.UTC(year, month, day, hours,  minutes, seconds)).toLocaleTimeString(i18n.languages, options)
    return date;
  }
  
  return (
    <>
      
      <Header />
      
      <SectionCommits>
        <Title>
          {t('updates.title')}
        </Title>

        <Subtitle>
          {t('updates.subtitle')}
        </Subtitle>

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
      </SectionCommits>
      
    </>
  );
}