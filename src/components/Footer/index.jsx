import React from 'react'
import { t } from 'i18next';
import { 
    FooterStyle,
    ImgCopyRight,
    DivContacts,
    DivTextACreditToMe,
    Icons,
} from './style'
import { AiOutlineMail, AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import imgCopyright from "../../assets/img/imgCopyright.svg";

export default function Footer() {
  return (
    <FooterStyle>
        <DivContacts>
          <Icons href='https://github.com/guicrisostomo' target="_blank">
            <AiOutlineGithub cursor="pointer" className='icon-github'/>
          </Icons>

          <Icons href='https://www.linkedin.com/in/guilherme-crisostomo-da-silva' target="_blank">
            <AiOutlineLinkedin cursor="pointer"/>
          </Icons>

          <Icons href="mailto:guilherme.silva9872@gmail.com" target="_blank">
            <AiOutlineMail cursor="pointer" />
          </Icons>
        </DivContacts>
        <DivTextACreditToMe>
            {t('footer.created')}
            <ImgCopyRight src={imgCopyright} />
            Guilherme Crisostomo da Silva
        </DivTextACreditToMe>
    </FooterStyle>
  )
}
