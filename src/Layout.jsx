import React from 'react'
import SideNav from './components/SideNav/SideNav'
import './index.css'
import Website from './components/Websites/Website'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='layout-container'>
      <SideNav />
      <Outlet />
    </div>
  )
}

export default Layout
