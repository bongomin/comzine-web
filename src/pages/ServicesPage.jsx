import React from 'react'
import Breadcumb from '../components/Breadcumb'
import Footer from '../components/Footer'
import Services from '../components/Services'
import Header from '../components/Header'

export default function ServicesPage() {
  return (
    <div>
      <Header/>
        <Breadcumb label="service"/>
        <Services/>
        <Footer/>
    </div>
  )
}
