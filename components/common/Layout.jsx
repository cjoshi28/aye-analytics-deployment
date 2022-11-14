import React, { useState } from 'react'
import Header from '../dashboard/Header'
import Sidebar from '../dashboard/Sidebar'
import { useContext, useEffect } from "react";
import { useRouter } from 'next/router'
import { AuthContext } from '../../provider/AuthProvider';
import { FullScreenLoader } from './FullscreenLoader';
function Layout({ children }) {

  const { status, session } = useContext(AuthContext);
  const [isLoader, setIsLoader] = useState(false)

  const router = useRouter()
  console.log(status)
  useEffect(() => {
    console.log(status)
    if (!status.loggedIn && !status.loading) {
      setIsLoader(true)
      router.push("/login")
    }
  }, [status, session])
  return (
    <>
      {isLoader ? <FullScreenLoader /> : ""}
      <div className="flex bg-gray-light-2 dark:bg-[#000000] max-h-screen ">
        <Sidebar />
        <div className="flex-grow text-gray-800 mt-[-5px] max-h-screen overflow-scroll overflow-x-hidden">
          <Header />
          {children}
        </div>
      </div>
    </>



  )
}
export default Layout