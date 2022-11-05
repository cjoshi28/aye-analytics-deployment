import React from 'react'

export default function ForgotPasswordForm() {
  return (
    <div className='text-center'>
      <form action=''>
        <div>
          <input className='input-css' type="text" placeholder='Type Your email' />
        </div>
        <div>
          <input className='btn-css' type="submit" value='send' />
        </div>
      </form>
    </div>
  )
}
