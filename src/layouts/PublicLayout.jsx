import React from 'react'
import { Outlet } from 'react-router'
import ThemeSwap from '../components/ThemeSwap'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function PublicLayout() {
  return (
    <div className='min-h-screen flex flex-col'>
        <Navbar/>

        <main className='flex flex-1'>
        <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default PublicLayout