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
  ItemCommitInfoDate,
} from './style.js';

export default function Home() {
  const { t } = useTranslation()
  const [commits, setCommits] = useState([{id: 1, created_at: '10', repo: {name: 'Repositório'}}])
  const { i18n } = useTranslation()

  async function getData() {
    
    const perPage = 5;

    const octokit = new Octokit({ auth: process.env.REACT_APP_GITHUB_TOKEN });
    const json = await octokit.request('GET /users/{username}/events/public', {
      username: 'guicrisostomo',
      per_page: perPage
    })

    setCommits(json.data)
  }

  useEffect(getData, [])

  function reverseDate(str) {
    return str.split("-").reverse().join("/");
  }

  function reverseDateEN(str) {
    return str.split("-")[1] + '/' + str.split("-")[2] + '/' + str.split("-")[0];
  }

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

                <ItemCommitInfoDate>
                  {
                    i18n.language === 'pt-BR' ?
                      reverseDate(item.created_at.toString().replaceAll((/[A-Za-z]/g), ' ').split(' ')[0]) + ' '
                    :
                      reverseDateEN(item.created_at.toString().replaceAll((/[A-Za-z]/g), ' ').split(' ')[0]) + ' '

                  }

                  {
                    item.created_at.toString().replaceAll((/[A-Za-z]/g), ' ').split(' ')[1]
                  }
                </ItemCommitInfoDate>

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