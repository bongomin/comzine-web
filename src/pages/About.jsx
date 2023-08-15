import React from 'react'
import Breadcumb from '../components/Breadcumb'
import ServicesTwo from '../components/ServicesTwo'
import AboutComponent from '../components/AboutComponent'
import Footer from '../components/Footer'
import Header from '../components/Header'


export default function About() {
  return (
    <div>
      <Header/>
      <Breadcumb label="about us"/>
      <ServicesTwo/>
      <AboutComponent/>
      <Footer/>
    </div>
  )
}
