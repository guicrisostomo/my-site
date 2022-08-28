import {
  HamburgerMenuIcon,
  DotFilledIcon,
} from '@radix-ui/react-icons';
import React, { useState, useEffect } from 'react';

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItemIndicator,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem
} from '../Navbar'

import {
  Box,
  IconButton
} from '../Navbar/style.js'

import {
    Hheader,
    ContentTextHeader,
    AbbreviationName,
    TextHeader,
    MenuImgHeader
} from './style.js';

import {Link} from 'react-router-dom';

export default function Header() {
  const [pages, setPages] = useState('apresentacao');
  const [scrolled, setScrolled] = useState(0);

  window.addEventListener('scroll', (event) => {
    setScrolled(window.scrollY);
  });
  
  useEffect(() => {
    const FixURL = window.location;
    setPages(FixURL.pathname.replace('/', ''));
  }, [])

  return (
    
    <Hheader style={{backgroundColor: scrolled > 1 ? 'black' : 'transparent'}}>
      <ContentTextHeader>

        <Link to="/" style={{textDecoration: 'none', alignSelf: 'center'}}>
          <AbbreviationName>
            GCS
          </AbbreviationName>
        </Link>
        
        <Link to="/" style={{textDecoration: 'none', alignSelf: 'center'}}>
          <TextHeader>
            Sobre
          </TextHeader>
        </Link>

        <Link to="/skill" style={{textDecoration: 'none', alignSelf: 'center'}}>
          <TextHeader>
            Habilidades
          </TextHeader>
        </Link>

        <Link to="/contact" style={{textDecoration: 'none', alignSelf: 'center'}}>
          <TextHeader>
            Contatos
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
                <DropdownMenuLabel>Páginas</DropdownMenuLabel>

                <DropdownMenuRadioGroup value={pages} onValueChange={setPages}>

                  <Link to="/" style={{textDecoration: 'none'}}>
                    <DropdownMenuRadioItem value=''>
                      <DropdownMenuItemIndicator>
                        <DotFilledIcon />
                      </DropdownMenuItemIndicator>
                      Sobre
                    </DropdownMenuRadioItem>
                  </Link>

                  <Link to="/skill" style={{textDecoration: 'none'}}>
                    <DropdownMenuRadioItem value='skill'>
                      <DropdownMenuItemIndicator>
                        <DotFilledIcon />
                      </DropdownMenuItemIndicator>
                      Habilidades
                    </DropdownMenuRadioItem>
                  </Link>

                  <Link to="/contact" style={{textDecoration: 'none'}}>
                    <DropdownMenuRadioItem value='contact'>
                      <DropdownMenuItemIndicator>
                        <DotFilledIcon />
                      </DropdownMenuItemIndicator>
                      Contato
                    </DropdownMenuRadioItem>
                  </Link>

                </DropdownMenuRadioGroup>

              </DropdownMenuContent>
            </DropdownMenu>
          </Box>
        </MenuImgHeader>

      </ContentTextHeader>
    </Hheader>
  )
  
}