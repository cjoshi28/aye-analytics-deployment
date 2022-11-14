import React, { useRef } from 'react'

export default function ResetPasswordForm({ reset }) {

  const password = useRef();
  const passwordError = useRef();
  const cpassword = useRef();
  const cpasswordError = useRef();
  const OTP = useRef();
  const OTPError = useRef();


  const inputCss = "backdrop-blur bg-white/10 font-[DM-sans] mt-4 focus:ring-1 ring-voilet-light-5 focus:ring-inset text-white text-base md:text-xl mid-xl:text-xl outline-none rounded p-2 w-10/12 lg:w-full sm:w-9/12 md:w-11/12"
  const validCss = "backdrop-blur  bg-white/10 font-[DM-sans] mt-4 ring-inset ring-1 ring-red-500  text-white text-base md:text-xl  outline-none rounded p-2 w-10/12 lg:w-full sm:w-9/12 md:w-11/12"

  const passRegex = /^([a-zA-Z0-9@*#]{8,15})$/i;
  const OTPRegex = /^[0-9]{6}$/i;

  async function submitHandler(event) {
    event.preventDefault();

    passwordError.current.innerHTML = ""
    cpasswordError.current.innerHTML = ""
    OTPError.current.innerHTML = ""

    password.current.className = inputCss
    cpassword.current.className = inputCss
    OTP.current.className = inputCss

    let isError = false;

    if (password.current.value !== "") {
      if (!passRegex.test(password.current.value)) {
        password.current.className = validCss
        passwordError.current.innerHTML = "Minimum 8 characters, must include 1 number and 1 special symbol"
        isError = true;
      }
      if (cpassword.current.value !== "") {
        if (password.current.value !== cpassword.current.value) {
          cpassword.current.className = validCss
          cpasswordError.current.innerHTML = "Password doesn't match"
          isError = true
        }
      } else {
        cpassword.current.className = validCss
        cpasswordError.current.innerHTML = "Plese Enter Password Again"
        isError = true;
      }
    } else {
      password.current.className = validCss
      passwordError.current.innerHTML = "Minimum 8 characters, must include 1 number and 1 special symbol"
      isError = true;
    }

    if (OTP.current.value !== "") {
      if (!OTPRegex.test(OTP.current.value)) {
        OTP.current.className = validCss
        OTPError.current.innerHTML = "OTP should be 6-digits"
        isError = true;
      }
    } else {
      OTP.current.className = validCss
      OTPError.current.innerHTML = "Please Enter OTP"
      isError = true;
    }

    if (isError == false) {
      reset(password.current.value, OTP.current.value)
    }
  }
  return (
    <div className='text-center'>
      <form action='' onSubmit={submitHandler}>
        <div>
          <input className='input-css' type="password" ref={password} placeholder='New Password' />
        </div>
        <div className='error-css' ref={passwordError}></div>
        <div>
          <input className='input-css' type="password" ref={cpassword} placeholder='Confirm Password' />
        </div>
        <div className='error-css' ref={cpasswordError}></div>
        <div>
          <input className='input-css overflow-hidden' type="number" ref={OTP} placeholder='OTP' />
        </div>
        <div className='error-css' ref={OTPError}></div>

        <input className='btn-css' type="submit" value="Verify" />
      </form>
    </div>
  )
}
