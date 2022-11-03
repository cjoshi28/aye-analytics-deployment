import React from 'react'


export default function EmailForm() {
  return (
    <div className='text-center '>
      <form action="" >
        <div>
          <input className='input-css' placeholder='Enter 6 digit OTP' type="text" />
        </div>
        <div>
          <input type="submit" value="Verify" className="btn-css"  />
        </div>
      </form>
    </div>
  )
}
