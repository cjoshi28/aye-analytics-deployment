import React from 'react'
import axios from 'axios'
import Logo from '../../components/Logo'
import SinputForm from '../../components/SinputForm'

export default function index() {

  async function signInHandler( name , email , password ){
    console.log(name , email , password)
    await axios.post("http://localhost:3000/api/user/register",{
      name,
      email, 
      password
    }).then((response)=>{
      console.log(response)
    }).catch((error)=>{
      console.log(error)
    })
  }

  return (
    <>
      <div className="h-[110vh] sm:h-screen md:h-screen lg:h-screen bg-cover bg-[url('/images/mobileResponsive.png')] flex flex-col lg:flex-row md:bg-cover md:bg-[url('/images/MicrosoftTeams-image.png')]">
        <div className='md:basis-1/3 flex justify-center lg:basis-1/2 lg:items-center'>
          <div className=' w-60 sm:w-80 sm:h-64 pt-12 md:w-96 md:h-34 lg:pt-0 md:pl-10' >
            <Logo />
          </div>
        </div>
        <div className='md:basis-2/3 py-14 flex justify-center md:items-center lg:basis-1/2 lg:mt-0'>
          <div className='md:h-full lg:h-[640px]'>
            <h2 className='text-white flex justify-center m-8 font-[Segoe-UI-Bold] text-2xl sm:text-2xl md:text-3xl lg:text-3xl'>Create New Account</h2>
            <SinputForm signIn={signInHandler} />
          </div>
        </div>
      </div>
    </>
  )
}
