import React from 'react'
import ProjectsComponent from '../components/ProjectsComponent'
import Breadcumb from '../components/Breadcumb'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Projects() {
  return (
    <div>
      <Header/>
      <Breadcumb label="Projects"/>
      <ProjectsComponent/>
      <Footer/>
    </div>
  )
}
