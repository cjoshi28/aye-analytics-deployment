import React from 'react'
import { RiLoader4Line } from "react-icons/ri";
function FullScreenLoader() {
  return (
    <div className="backdrop-brightness-50 w-full h-full absolute inset-0 z-40 flex">
      <i className="absolute inset-0 z-50 flex justify-center items-center h-screen w-screen">
        <RiLoader4Line className="animate-spin" size={64} scale={10} color="white" />
      </i>
    </div>
  )
}
export default FullScreenLoader