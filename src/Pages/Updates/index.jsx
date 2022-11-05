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
  Pages,
  PageContinue,
  Page,
} from './style.js';
import Footer from '../../components/Footer/index.jsx';

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
  const [selectDateName, setSelectDateName] = useState(i18n.languages === 'en-US' ? 'today' : 'hoje')
  const [totalCommits, setTotalCommits] = useState(0)
  const [page, setPage] = useState(1)
  const perPage = 10

  const getData = async (date, dateTomorrow) => {

    const octokit = new Octokit({ auth: process.env.REACT_APP_VERCEL_GITHUB_TOKEN });

    const json = await octokit.request('GET /search/commits?q=committer-date:{date}T03:00:00..{dateTomorrow}T03:00:00+author:{username}+sort:{dateasc}', {
      username: 'guicrisostomo',
      date: date,
      dateTomorrow: dateTomorrow,
      dateasc: 'committer-date-desc',
      per_page: perPage,
      page: page,
    })

    setCommits(json.data.items)
    setTotalCommits(json.data.total_count)
  }

  useEffect(() => {
    switch (selectDate) {
      case 'Today':
        getData(textDateToday.toString(), textDateTomorrow.toString())
        break;
      case 'This week':
        let dayInitialDayWeek = new Date()
        dayInitialDayWeek.setDate(parseInt(dateToday[1]) - new Date().getDate())
        dayInitialDayWeek = dayInitialDayWeek.toLocaleDateString('en-US').split('/');

        if (dayInitialDayWeek[0].length === 1) {
          dayInitialDayWeek[0] = '0' + dayInitialDayWeek[0];
        }
      
        if (dayInitialDayWeek[1].length === 1) {
          dayInitialDayWeek[1] = '0' + dayInitialDayWeek[1];
        }

        const textInitialDayWeek = dayInitialDayWeek[2] + '-' + dayInitialDayWeek[0] + '-' + dayInitialDayWeek[1]

        getData(textInitialDayWeek, textDateTomorrow.toString())
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

    if (totalCommits > 10) {
      GenerateNextPages()
    }
  }, [selectDate, page])

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

    setSelectDateName(e.target.name);
  }

  function GenerateNextPages() {
    const listPages = [];
    const totalPages = Math.ceil(totalCommits / 10)

    if(page > 1) {
      
      if(page > 2) {
        listPages.push(
          <Page key={'page1'} onClick={() => setPage(1)}>
            {1}
          </Page>
        )

        if(totalPages > 5 && page !== totalPages) {
          listPages.push(
            <PageContinue key={'pageAfterFirst'}>
              ...
            </PageContinue>
          )
        }
      }

      if (page === totalPages) {
        listPages.push(
          <Page key={'page2'} onClick={() => setPage(2)}>
            {2}
          </Page>
        )

        if(totalPages > 5) {
          listPages.push(
            <PageContinue key={'pageAfterFirst'}>
              ...
            </PageContinue>
          )
        }
        
        if (page !== 3) {
          listPages.push(
            <Page key={'page' + (page - 2)} onClick={() => setPage((page - 2))}>
              {(page - 2)}
            </Page>
          )
        }

        listPages.push(
          <Page key={'page' + (page - 1)} onClick={() => setPage((page - 1))}>
            {(page - 1)}
          </Page>
        )

        listPages.push(
          <Page key={'page' + page} onClick={() => setPage(page)} style={{backgroundColor: 'white', color: 'black', fontWeight: 'bold'}}>
            {page}
          </Page>
        )

      } else {

        if ((totalPages === (page) || totalPages === (page + 1)) && page !== 3) {
          listPages.push(
            <Page key={'page' + (page - 2)} onClick={() => setPage((page - 2))}>
              {(page - 2)}
            </Page>
          )
        }

        listPages.push(
          <Page key={'page' + (page - 1)} onClick={() => setPage((page - 1))}>
            {(page - 1)}
          </Page>
        )
        
        listPages.push(
          <Page key={'page' + page} onClick={() => setPage(page)} style={{backgroundColor: 'white', color: 'black', fontWeight: 'bold'}}>
            {page}
          </Page>
        )
  
        listPages.push(
          <Page key={'page' + (page + 1)} onClick={() => setPage((page + 1))}>
            {(page + 1)}
          </Page>
        )

        if(page === 2 && totalPages !== 4) {
          listPages.push(
            <Page key={'page' + (page + 2)} onClick={() => setPage((page - 1))}>
              {(page + 2)}
            </Page>
          )
        }
      }
      
      if ((totalPages - 1) > (page + 1)) {
        listPages.push(
          <PageContinue key={'pageBeforeLast'} >
            ...
          </PageContinue>
        )
      }

      if(totalPages !== (page) && totalPages !== (page + 1)) {
        listPages.push(
          <Page key={'page' + totalPages} onClick={() => setPage(totalPages)}>
            {totalPages}
          </Page>
        )
      }
      
    } else {
      for(let i = page; i <= (totalPages) && i < 5; i++) {
        listPages.push(
          <Page key={'page' + i} onClick={() => setPage(i)} style={{backgroundColor: page === i && 'white', color: page === i && 'black', fontWeight: page === i && 'bold'}}>
            {i}
          </Page>
        )
      }

      if (totalPages > 5) {
        listPages.push(
          <PageContinue key={'pageBeforeLast'} >
            ...
          </PageContinue>
        )
      }

      if (totalPages > 4) {
        listPages.push(
          <Page key={'page' + totalPages} onClick={() => setPage(totalPages)}>
            {totalPages}
          </Page>
        )
      }
    }
    return listPages;
  }
  
  return (
    <>
      
      <Header />

      <Section style={{height: heightSectionCommit}}>
        <Title>
          {t('updates.title') + selectDateName.toLowerCase()}
        </Title>

        <Subtitle>
          {t('updates.subtitle') + selectDateName.toLowerCase()}
        </Subtitle>

        <SelectDate>
          <Subtitle>
            {t('updates.select.title')}
          </Subtitle>

          <select onChange={handleSelectDateTypeChange} defaultValue={selectDate} >
            {
              listOptionsSelectDate.map((item => (
                <option value={item.value} key={item.value + 'Option'} name={item.name} >{item.name}</option>
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

          {totalCommits > 10 &&
            <Pages>
              {
                GenerateNextPages()
              }
            </Pages>
          }

        </ItemsCommitInfo>
      </Section>
      
      <Footer />
    </>
  );
}