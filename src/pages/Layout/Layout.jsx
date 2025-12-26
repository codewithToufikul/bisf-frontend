import Footer from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import React from 'react'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <div>
        <div className=''>
            <Navbar/>
        </div>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout