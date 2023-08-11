import React from 'react'
import Breadcumb from '../components/Breadcumb'
import ServicesTwo from '../components/ServicesTwo'
import AboutComponent from '../components/AboutComponent'
import Footer from '../components/Footer'


export default function About() {
  return (
    <div>
      <Breadcumb label="about us"/>
      <ServicesTwo/>
      <AboutComponent/>
      <Footer/>
    </div>
  )
}
