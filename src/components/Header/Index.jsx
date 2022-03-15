import {
  HamburgerMenuIcon,
  DotFilledIcon,
} from '@radix-ui/react-icons';
import React from 'react';
import {
  DropdownMenu,
  DropdownMenuArrow,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItemIndicator,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem
} from '../Navbar/Index'

import {
  Box,
  IconButton
} from '../Navbar/Style'

import {
    Header,
    ContentTextHeader,
    AbbreviationName,
    TextHeader,
    MenuImgHeader
} from './Style';

export const Home = () => {
  const [nigthMode, setNigthMode] = React.useState(true);
  const [language, setLanguage] = React.useState(true);
  const [pages, setPages] = React.useState('apresentacao');

  return (
    <Header>
        <ContentTextHeader>

          <AbbreviationName>
            GCS
          </AbbreviationName>

          <TextHeader>
            Sobre
          </TextHeader>

          <TextHeader>
            Habilidades
          </TextHeader>

          <TextHeader>
            Contato
          </TextHeader>


          <MenuImgHeader>
            <Box>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <IconButton aria-label="Customise options">
                    <HamburgerMenuIcon />
                  </IconButton>
                </DropdownMenuTrigger>

                <DropdownMenuContent sideOffset={5} style={{marginLeft: -12}}>
                  <DropdownMenuLabel>Páginas</DropdownMenuLabel>

                  <DropdownMenuRadioGroup value={pages} onValueChange={setPages}>
                  
                  <DropdownMenuRadioItem value='apresentacao'>
                    <DropdownMenuItemIndicator>
                      <DotFilledIcon />
                    </DropdownMenuItemIndicator>
                    Apresentação
                  </DropdownMenuRadioItem>

                  <DropdownMenuRadioItem value='sobre'>
                    <DropdownMenuItemIndicator>
                      <DotFilledIcon />
                    </DropdownMenuItemIndicator>
                    Sobre
                  </DropdownMenuRadioItem>

                  <DropdownMenuRadioItem value='habilidades'>
                    <DropdownMenuItemIndicator>
                      <DotFilledIcon />
                    </DropdownMenuItemIndicator>
                    Habilidades
                  </DropdownMenuRadioItem>
                
                  <DropdownMenuRadioItem value='contato'>
                    <DropdownMenuItemIndicator>
                      <DotFilledIcon />
                    </DropdownMenuItemIndicator>
                    Contato
                  </DropdownMenuRadioItem>

                  </DropdownMenuRadioGroup>

                  <DropdownMenuSeparator />

                  <DropdownMenuLabel>Idioma</DropdownMenuLabel>

                  <DropdownMenuRadioGroup value={language} onValueChange={setLanguage}>
                    <DropdownMenuRadioItem value={true}>
                      <DropdownMenuItemIndicator>
                        <DotFilledIcon />
                      </DropdownMenuItemIndicator>
                      Português
                    </DropdownMenuRadioItem>

                    <DropdownMenuRadioItem value={false}>
                      <DropdownMenuItemIndicator>
                        <DotFilledIcon />
                      </DropdownMenuItemIndicator>
                      Inglês
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>

                  <DropdownMenuSeparator />
                  <DropdownMenuLabel>Modo noturno</DropdownMenuLabel>
                  <DropdownMenuRadioGroup value={nigthMode} onValueChange={setNigthMode}>
                    <DropdownMenuRadioItem value={true}>
                      <DropdownMenuItemIndicator>
                        <DotFilledIcon />
                      </DropdownMenuItemIndicator>
                      Ativado
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value={false}>
                      <DropdownMenuItemIndicator>
                        <DotFilledIcon />
                      </DropdownMenuItemIndicator>
                      Desativado
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                  <DropdownMenuArrow />
                </DropdownMenuContent>
              </DropdownMenu>
            </Box>
          </MenuImgHeader>


        </ContentTextHeader>

        
        
    </Header>
  )
}