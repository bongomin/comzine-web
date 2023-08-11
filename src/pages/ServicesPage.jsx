import React from 'react'
import Breadcumb from '../components/Breadcumb'
import Footer from '../components/Footer'
import Services from '../components/Services'

export default function ServicesPage() {
  return (
    <div>
        <Breadcumb label="service"/>
        <Services/>
        <Footer/>
    </div>
  )
}
