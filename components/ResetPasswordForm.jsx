import React from 'react'

export default function ResetPasswordForm() {
  return (
    <div className='text-center'>
        <form action=''>
            <div>
                <input className='input-css' type="text" placeholder='New Password'/>
            </div>
            <div>
                <input className='input-css' type="text" placeholder='Confirm Password'/>
            </div>
            <input className='btn-css' type="submit" value="verify"/>
        </form>
    </div>
  )
}
