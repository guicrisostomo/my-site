import React from 'react'
import Home from '../../components/Header'
import {
  SectionError,
  TextInfoError,
  DivInfoError,
  DivButtonReturn
} from './Style';
import { useNavigate } from 'react-router-dom';

export default function Error() {
  const history = useNavigate();

  function goBack(){
    history.goBack();
  }

  return (
    <>
      <Home />
      
      <SectionError>
        <DivInfoError>

          <TextInfoError>Página não encontrada!
          </TextInfoError>

          <DivButtonReturn onClick={goBack}>
            Retornar
          </DivButtonReturn>
        </DivInfoError>
      </SectionError>
    </>
  )
}
