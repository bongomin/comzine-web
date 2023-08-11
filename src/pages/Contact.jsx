import React from 'react'
import Breadcumb from '../components/Breadcumb'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <div>
      <Breadcumb label="Contact us"/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}
