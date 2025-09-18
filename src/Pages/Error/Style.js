import styled from 'styled-components';
import imgError from '../../assets/img/imgError.png';

export const SectionError = styled.section`
    background: linear-gradient(120deg, rgba(24,26,27,0.92) 60%, rgba(0,0,0,0.7)), url(${imgError});
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  justify-content: flex-start;
  height: 100;
  margin-top: 12px;
  padding-top: 80px;
  padding-bottom: 32px;
  border-radius: 18px;
  box-shadow: 0 4px 32px 0 rgba(0,0,0,0.18);
  backdrop-filter: blur(2px);
  height: 100;
`;

export const DivInfoError = styled.div`
    top: 30%;
    position: absolute;
    height: 100;
    width: 100vw;
    display: table-cell;
    vertical-align: middle;
    text-align: -webkit-center;
`;

export const TextInfoError = styled.h1`
    color: white;
    font-size: 32px;

    @media (max-width: 400px) {
        font-size: 20px;
    }
`;

export const DivButtonReturn = styled.div`
    background-color: transparent;
    color: white;
    font-size: 28px;
    width: max-content;
    padding: 5px;
    border-radius: 10px;
    border-style: solid;
    border-width: 1px;
    cursor: pointer;
    transition: 1s all;

    :hover {
        background-color: white;
        color: black;
        transform: scale(125%, 125%);
    }

    @media (max-width: 400px) {
        font-size: 16px;
    }
`;