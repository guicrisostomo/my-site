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
  SelectStyle,
  CustomDate,
  InputDate,
  ButtonDate,
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
  const [textDateEnd, setTextDateEnd] = useState(textDateTomorrow + 'T00:00')
  const [textDateInitial, setTextDateInitial] = useState(textDateToday + 'T00:00')
  const perPage = 10

  const getData = async (date, dateTomorrow) => {

    const octokit = new Octokit({ auth: process.env.REACT_APP_VERCEL_GITHUB_TOKEN });

    const json = await octokit.request('GET /search/commits?q=committer-date:{date}..{dateTomorrow}+author:{username}+sort:{dateasc}', {
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

  function searchApiGit() {
    switch (selectDate) {
      case 1:
        getData(textDateToday.toString() + 'T03:00:00', textDateTomorrow.toString() + 'T03:00:00')
        break;
      case 2:
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

        getData(textInitialDayWeek.toString() + 'T03:00:00', textDateTomorrow.toString() + 'T03:00:00')
        break;
      case 3:
        getData(dateToday[2] + '-' + dateToday[0] + '-01' + 'T03:00:00', textDateTomorrow.toString() + 'T03:00:00')
        break;
      case 4:
        getData(dateToday[2] + '-' + '01-01' + 'T03:00:00', textDateTomorrow.toString() + 'T03:00:00')
        break;
      case 5:
        
        let changeHourDateInitial = new Date(textDateInitial)
        changeHourDateInitial.setHours(changeHourDateInitial.getHours() + 3)
        changeHourDateInitial = changeHourDateInitial.toLocaleString('fr-CA').replace(',', '').split('-');
        let changeHourDateEnd = new Date(textDateEnd)
        changeHourDateEnd.setHours(changeHourDateEnd.getHours() + 3)
        changeHourDateEnd = changeHourDateEnd.toLocaleString('fr-CA').replace(',', '').split('-');

        if (changeHourDateInitial[0].length === 1) {
          changeHourDateInitial[0] = '0' + changeHourDateInitial[0];
        }
      
        if (changeHourDateInitial[1].length === 1) {
          changeHourDateInitial[1] = '0' + changeHourDateInitial[1];
        }

        if (changeHourDateEnd[0].length === 1) {
          changeHourDateEnd[0] = '0' + changeHourDateEnd[0];
        }
      
        if (changeHourDateEnd[1].length === 1) {
          changeHourDateEnd[1] = '0' + changeHourDateEnd[1];
        }
        
        changeHourDateInitial = changeHourDateInitial.join().replaceAll(',', '-').replace(' ', 'T').replace(' h ', ':').replace(' min ', ':').replace(' s', '')
        changeHourDateEnd = changeHourDateEnd.join().replaceAll(',', '-').replace(' ', 'T').replace(' h ', ':').replace(' min ', ':').replace(' s', '')

        getData(changeHourDateInitial.toString(), changeHourDateEnd.toString())
        break;
      default:
        getData(textDateToday.toString() + 'T03:00:00', textDateTomorrow.toString() + 'T03:00:00')
        break;
    }

    if (totalCommits > 10) {
      GenerateNextPages()
    }
  }

  useEffect(() => {
    searchApiGit()
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
    setSelectDate(listOptionsSelectDate[e.target.value - 1].id);

    setSelectDateName(listOptionsSelectDate[e.target.value - 1].name);

    setPage(1);
  }

  function handleOnChangeDateInitial(e) {
    setTextDateInitial(e.target.value);
  }

  function handleOnChangeDateEnd(e) {
    setTextDateEnd(e.target.value);
  }

  function GenerateNextPages() {
    const listPages = [];
    const totalPages = Math.ceil(totalCommits / 10)
    let pageLast = 0;

    for(let j = 1, i = 0; j <= (totalPages) && i < 5; i++, j++) {
      

      if (totalPages > 4 && i === 1 && page > 2 && page <= totalPages - 1) {
        j = page - 1;
      }

      if ((totalPages > 4) && ((page === totalPages && i === 1) || (page === (totalPages - 1) && i === 1))) {
        j = totalPages - 3;
      }

      if (totalPages > 4 && i === 4) {
        j = totalPages;
      }

      listPages.push(
        <>
          {j !== (pageLast - 1) && j !== (pageLast + 1) && 
            <>
              <PageContinue>...</PageContinue>
            </>
          }
          
          <Page key={'page' + j} onClick={() => setPage(j)} style={{backgroundColor: page === j && 'white', color: page === j && 'black', fontWeight: page === j && 'bold'}}>
            {j}
          </Page>
        </>
      )

      pageLast = j;
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
          <br />
          {t('updates.totalCommits') + totalCommits}
        </Subtitle>

        <SelectDate>
          <Subtitle>
            {t('updates.select.title')}
          </Subtitle>

          <SelectStyle onChange={handleSelectDateTypeChange} defaultValue={selectDate} >
            {
              listOptionsSelectDate.map((item => (
                <option value={item.id} key={item.valueSelect + 'Option'} >{item.name}</option>
              )))
            }
          </SelectStyle>
        </SelectDate>

        {selectDate === 5 &&
          <CustomDate>

            Data inicial:

            <InputDate
              type="datetime-local"
              id='parsfsdfsdty'
              defaultValue={textDateInitial}
              pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}"
              onChange={handleOnChangeDateInitial}
              required 
            />

            <br />

            Data final:

            <InputDate
              type="datetime-local"
              defaultValue={textDateEnd}
              pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}"
              onChange={handleOnChangeDateEnd}
              required
            />

            <br />

            <ButtonDate onClick={() => searchApiGit()}>Filtrar</ButtonDate>

          </CustomDate>
        }
        
        <ItemsCommitInfo>
          {
            commits !== undefined &&
            commits.map((item => (
              <ItemCommitInfo key={item.sha}>
                <ItemCommitInfoTexts>

                  <ItemCommitInfoName>
                    {
                        !item.repository.private ?
                          item.repository.name.toString().replaceAll('-', ' ')
                        :
                          'Repositório privado'
                    }
                  </ItemCommitInfoName>
                  
                  <ItemCommitInfoText>
                    {
                      !item.repository.private &&
                        t('updates.message') + separateUpperLetters(item.commit.message.toString())
                    }

                    <br />

                    {
                      t('home.event.date') + subHour(reverseDateEN(item.commit.committer.date.toString().replaceAll((/[A-Za-z]/g), ' ').split(' ')[0]) + ' ' + item.commit.committer.date.toString().replaceAll((/[A-Za-z]/g), ' ').split(' ')[1]).toString()
                    }
                    
                  </ItemCommitInfoText>
                </ItemCommitInfoTexts>
                
                <br />
                
                { 
                  !item.repository.private &&
                    <div style={{display: 'flex', width: '100%', gap: '12px'}}>
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
                }

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