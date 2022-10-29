import React from 'react'
import Home from '../../components/Header/index.jsx'
import {
  SectionError,
  TextInfoError,
  DivInfoError,
  DivButtonReturn
} from './style.js';
import { useNavigate } from 'react-router-dom';

export default function Error() {
  const navigate = useNavigate();

  return (
    <>
      <Home />
      
      <SectionError>
        <DivInfoError>

          <TextInfoError>Página não encontrada!
          </TextInfoError>

          <DivButtonReturn onClick={() => navigate(-1)}>
            Retornar
          </DivButtonReturn>
        </DivInfoError>
      </SectionError>
    </>
  )
}
