import { Children } from "react"


const Button = ({children,className, onClick}) => {
  return (
    <button
      className={` rounded-md ${className}`}
      onClick={onClick}
    >{children}</button>
  )
}

export default Button;
