import React from 'react'
import {
  ArticleAbout
} from './Style'

export default function About() {
  return (
    <ArticleAbout style={{backgroundColor: '#100f0f'}}>
      <h1 style={{padding: 10, color: 'white', margin: 0}}>Sobre mim</h1>
      <p style={{color: 'white', padding: 10}}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, veniam facere. Vero totam voluptatem nam reprehenderit quisquam recusandae aliquid architecto dignissimos odit amet ratione magnam illum consequatur laborum, dolores similique!
      </p>
    </ArticleAbout>
  )
}
