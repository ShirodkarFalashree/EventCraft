import React from 'react'
import './sidenav.css'
import TemplatesList from './TemplatesList'
const SideNav = () => {
  return (
    <div className='sidenav'>
      <button className='profilebtn'>My Profile</button>
      <TemplatesList />
    </div>
  )
}

export default SideNav
