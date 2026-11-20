import React from 'react'
import { Outlet } from 'react-router'

const PublicLayout = () => {
  return (
    <div>
        <h1>HEADER</h1>
        <Outlet/>
        <footer>FOOTER</footer>
    </div>
  )
}

export default PublicLayout