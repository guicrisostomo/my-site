import React from 'react'
import Home from '../../components/Header'
import {
  SectionError,
  TextInfoError,
  DivInfoError,
  DivButtonReturn
} from './Style';
import { useHistory } from 'react-router-dom';

export default function Error() {
  const history = useHistory();

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
