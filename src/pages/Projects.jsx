import React from 'react'
import ProjectsComponent from '../components/ProjectsComponent'
import Breadcumb from '../components/Breadcumb'
import Footer from '../components/Footer'

export default function Projects() {
  return (
    <div>
      <Breadcumb label="Projects"/>
      <ProjectsComponent/>
      <Footer/>
    </div>
  )
}
