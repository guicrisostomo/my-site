import { useState } from 'react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header/index.jsx';
import Presentation from '../../components/Presentation/index.jsx';
import { Octokit } from "@octokit/core";
import { AiOutlineGithub } from "react-icons/ai";

import {
  Title,
  SectionAbout,
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

export default function Home() {
  const { t } = useTranslation()
  const [commits, setCommits] = useState([{id: 1, created_at: '10', type: 'PushEvent', repo: {name: 'Repositório'}}])
  const { i18n } = useTranslation()

  const getData = async () => {
    
    const perPage = 5;

    const octokit = new Octokit({ auth: process.env.REACT_APP_GITHUB_TOKEN });
    const json = await octokit.request('GET /users/{username}/events/public', {
      username: 'guicrisostomo',
      per_page: perPage
    })

    setCommits(json.data)
  }

  useEffect(() => {
    getData()
  }, [])

  function reverseDate(str) {
    return str.split("-").reverse().join("/");
  }

  function reverseDateEN(str) {
    return str.split("-")[1] + '/' + str.split("-")[2] + '/' + str.split("-")[0];
  }

  function separateUpperLetters(str) {
    const arrayStr = str.replace('Event', '').split(/(?=[A-ZÀ-Ú])/)
    return arrayStr.join(' ');
  }

  console.log(commits)
  return (
    <>
      
      <Header />
      <Presentation />
      
      <SectionAbout>
        
        <Title>
          {t('home.about.title')}
        </Title>

        <Subtitle>
          {t('home.about.text')}
        </Subtitle>


      </SectionAbout>
      
      <SectionCommits>
        <Title>
          {t('home.commit.title')}
        </Title>

        <Subtitle>
          {t('home.commit.text')}
        </Subtitle>

        <ItemsCommitInfo>
          {
            commits !== undefined &&
            commits.map((item => (
              <ItemCommitInfo key={item.id}>
                <ItemCommitInfoTexts>
                  <ItemCommitInfoName>
                    {
                      item.repo.name.toString().replace('guicrisostomo/', '').replaceAll('-', ' ')
                    }
                  </ItemCommitInfoName>
                  
                  <ItemCommitInfoText>
                    {
                      t('home.commit.typeEvent') + separateUpperLetters(item.type)
                    }

                    <br />

                    {
                      i18n.language === 'pt-BR' ?
                        t('home.commit.date') + reverseDate(item.created_at.toString().replaceAll((/[A-Za-z]/g), ' ').split(' ')[0]) + ' '
                      :
                        t('home.commit.date') + reverseDateEN(item.created_at.toString().replaceAll((/[A-Za-z]/g), ' ').split(' ')[0]) + ' '

                    }

                    {
                      item.created_at.toString().replaceAll((/[A-Za-z]/g), ' ').split(' ')[1]
                    }
                  </ItemCommitInfoText>
                </ItemCommitInfoTexts>

                <ItemCommitInfoButton href={'https://github.com/' + item.repo.name} target='_blank'>
                  <AiOutlineGithub fontSize={30} cursor="pointer" className='icon-github' />

                  <ItemCommitInfoButtonText>
                    {t('home.commit.button')}
                  </ItemCommitInfoButtonText>
                </ItemCommitInfoButton>
              </ItemCommitInfo>
            )))
          }
        </ItemsCommitInfo>
      </SectionCommits>
      
    </>
  );
}