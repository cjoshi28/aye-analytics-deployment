import React from 'react'
import Header from '../dashboard/Header'
import Sidebar from '../dashboard/Sidebar'

function Layout({children}) {
  return (
    <div className="flex bg-gray-light-2  max-h-screen ">
        <Sidebar />
        <div className="flex-grow text-gray-800 mt-[-5px] max-h-[100vh] overflow-scroll overflow-x-hidden">
            <Header />
            {children}
        </div>
    </div>

  )
}

export default Layout