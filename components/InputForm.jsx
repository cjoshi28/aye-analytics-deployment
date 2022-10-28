import React from 'react'
import useForm from '../hooks/useForm'
import { useState } from 'react';

export default function InputForm() {
  //Final submit function
  const contactForm = () => {
    let data = (JSON.stringify(values));
    alert(data)
  };

  const [varify, setVarify] = useState(false)

  function check() {
    setVarify(true)
  }

  //Custom hook call
  const { handleChange, values, errors, handleSubmit } = useForm(contactForm);

  return (
    <div className='text-center'>
      <form onSubmit={handleSubmit} >
        <div>
          <input className='backdrop-blur bg-white/10 mt-6 focus:ring-1 ring-[#E346D1] focus:ring-inset text-white text-md  outline-none rounded p-2 w-[400px] md:w-[450px] ' type="text" input-numeric='true' min-length='5' input-required="true" name="email" placeholder="email" onChange={handleChange}
          />
          <div className='text-red-500 text-sm'> {errors.email && <h5> {errors.email} </h5>}</div>
        </div>
        <div>
          <input className='backdrop-blur bg-white/10 mt-6 focus:ring-1 ring-[#E346D1] focus:ring-inset text-white text-md  outline-none rounded p-2 w-[400px] md:w-[450px]' type="text" input-required="true" min-length='10' max-length="13" placeholder="password" name="password" onChange={handleChange}
          />
          <div className='text-red-500 text-sm'>{errors.password && <h5> {errors.password} </h5>}</div>
        </div>

        <div className='flex justify-between px-14 md:px-7 mt-4'>
          <div className="flex items-center">
            <input onChange={check} type="checkbox" className="bg-purple-800  rounded"
            />
            <label className="ml-2 text-sm font-medium text-voilet-light-3">
              Keep me signed in
            </label>
          </div>
          <div>
            <span className="text-[#7C5BEE]">Forgot Password?</span>
          </div>
        </div>
        <div>
          <input type="submit" value="Log In" className="w-[400px] md:w-[450px]  cursor-pointer h-10 rounded-lg text-xl bg-[#E346D1] text-white mt-8" disabled={!varify} />
        </div>
      </form>
    </div>
  )
}
