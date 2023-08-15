import React from 'react'
import Breadcumb from '../components/Breadcumb'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Contact() {
  return (
    <div>
      <Header/>
      <Breadcumb label="contact"/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}
