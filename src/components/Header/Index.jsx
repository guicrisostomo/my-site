import {
  HamburgerMenuIcon,
  DotFilledIcon,
} from '@radix-ui/react-icons';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItemIndicator,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem
} from '../Navbar/index.jsx'

import {
  Box,
  IconButton
} from '../Navbar/style.js'

import {
    Hheader,
    ContentTextHeader,
    AbbreviationName,
    TextHeaderStyle,
    MenuImgHeader
} from './style.js';

import {Link} from 'react-router-dom';
import { t } from 'i18next';

export default function Header() {
  const [pages, setPages] = useState('');
  const [language, setLanguage] = useState('portuguese');
  const [scrolled, setScrolled] = useState(0);
  const { i18n } = useTranslation()

  function handleChangeLanguage(language) {
    i18n.changeLanguage(language)
  }

  window.addEventListener('scroll', (event) => {
    setScrolled(window.scrollY);
  });
  
  useEffect(() => {
    const FixURL = window.location;
    setPages(FixURL.pathname.replace('/', ''));

    setLanguage(i18n.language)
  }, [])

  function TextHeader(props) {
    if (props.expected === pages) {
      return (
        <TextHeaderStyle active={true}>
          {props.children}
        </TextHeaderStyle>
      )
    } else {
      return (
        <TextHeaderStyle active={false}>
          {props.children}
        </TextHeaderStyle>
      )
    }
  }

  return (
    
    <Hheader style={{backgroundColor: scrolled > 1 ? 'black' : 'transparent'}}>
      <ContentTextHeader>

        <Link to="/" style={{textDecoration: 'none', alignSelf: 'center'}}>
          <AbbreviationName>
            GCS
          </AbbreviationName>
        </Link>
        
        <Link to="/" style={{backgroundColor: pages === '' ? '#282929' : 'transparent', borderRadius: pages === '' ? '10px' : '', padding: pages === '' ? '5px' : '', textDecoration: 'none', alignSelf: 'center'}}>
          <TextHeader expected="">
            {t('header.home')}
          </TextHeader>
        </Link>

        <Link to="/skill" style={{backgroundColor: pages === 'skill' ? '#282929' : 'transparent', borderRadius: pages === 'skill' ? '10px' : '', padding: pages === 'skill' ? '5px' : '', textDecoration: 'none', alignSelf: 'center'}}>
          <TextHeader expected="skill">
            {t('header.skills')}
          </TextHeader>
        </Link>

        <Link to="/contact" style={{backgroundColor: pages === 'contact' ? '#282929' : 'transparent', borderRadius: pages === 'contact' ? '10px' : '', padding: pages === 'contact' ? '5px' : '', textDecoration: 'none', alignSelf: 'center'}}>
          <TextHeader expected="contact">
            {t('header.contact')}
          </TextHeader>
        </Link>

        <Link to="/projects" style={{backgroundColor: pages === 'projects' ? '#282929' : 'transparent', borderRadius: pages === 'projects' ? '10px' : '', padding: pages === 'projects' ? '5px' : '', textDecoration: 'none', alignSelf: 'center'}}>
          <TextHeader expected="projects">
            {t('header.projects')}
          </TextHeader>
        </Link>

        <Link to="/certificates" style={{backgroundColor: pages === 'certificates' ? '#282929' : 'transparent', borderRadius: pages === 'certificates' ? '10px' : '', padding: pages === 'certificates' ? '5px' : '', textDecoration: 'none', alignSelf: 'center'}}>
          <TextHeader expected="certificates">
            {t('header.certificates')}
          </TextHeader>
        </Link>

        <MenuImgHeader>
          <Box>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <IconButton aria-label="Customise options" style={{backgroundColor: scrolled > 30 ? 'black' : 'transparent'}}>
                  <HamburgerMenuIcon />
                </IconButton>
              </DropdownMenuTrigger>

              <DropdownMenuContent sideOffset={5} style={{marginLeft: -12, top: 0}}>
                <DropdownMenuLabel>
                  {t('header.pages')}
                </DropdownMenuLabel>

                <DropdownMenuRadioGroup value={pages} onValueChange={setPages}>

                  <Link to="/" style={{textDecoration: 'none'}}>
                    <DropdownMenuRadioItem value=''>
                      <DropdownMenuItemIndicator>
                        <DotFilledIcon />
                      </DropdownMenuItemIndicator>
                      {t('header.home')}
                    </DropdownMenuRadioItem>
                  </Link>

                  <Link to="/skill" style={{textDecoration: 'none'}}>
                    <DropdownMenuRadioItem value='skill'>
                      <DropdownMenuItemIndicator>
                        <DotFilledIcon />
                      </DropdownMenuItemIndicator>
                      {t('header.skills')}
                    </DropdownMenuRadioItem>
                  </Link>

                  <Link to="/contact" style={{textDecoration: 'none'}}>
                    <DropdownMenuRadioItem value='contact'>
                      <DropdownMenuItemIndicator>
                        <DotFilledIcon />
                      </DropdownMenuItemIndicator>
                      {t('header.contact')}
                    </DropdownMenuRadioItem>
                  </Link>

                  <Link to="/projects" style={{textDecoration: 'none'}}>
                    <DropdownMenuRadioItem value='projects'>
                      <DropdownMenuItemIndicator>
                        <DotFilledIcon />
                      </DropdownMenuItemIndicator>
                      {t('header.projects')}
                    </DropdownMenuRadioItem>
                  </Link>

                  <Link to="/certificates" style={{textDecoration: 'none'}}>
                    <DropdownMenuRadioItem value='certificates'>
                      <DropdownMenuItemIndicator>
                        <DotFilledIcon />
                      </DropdownMenuItemIndicator>
                      {t('header.certificates')}
                    </DropdownMenuRadioItem>
                  </Link>

                </DropdownMenuRadioGroup>

                <DropdownMenuLabel>
                  {t('header.language')}
                </DropdownMenuLabel>

                <DropdownMenuRadioGroup  value={language} onValueChange={setLanguage}>

                  
                  <DropdownMenuRadioItem onClick={() => handleChangeLanguage('pt-BR')} value='pt-BR'>
                    <DropdownMenuItemIndicator>
                      <DotFilledIcon />
                    </DropdownMenuItemIndicator>
                    {t('header.portuguese')}
                  </DropdownMenuRadioItem>

                  
                  <DropdownMenuRadioItem onClick={() => handleChangeLanguage('en-US')} value='en-US'>
                    <DropdownMenuItemIndicator>
                      <DotFilledIcon />
                    </DropdownMenuItemIndicator>
                    {t('header.english')}
                  </DropdownMenuRadioItem>

                </DropdownMenuRadioGroup>

              </DropdownMenuContent>
            </DropdownMenu>
          </Box>
        </MenuImgHeader>

      </ContentTextHeader>
    </Hheader>
  )
  
}