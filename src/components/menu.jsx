import React from "react"
import { Link } from "react-router-dom" 

const Menu = ({ page }) => { 
  const route = page.toLowerCase().replaceAll(' ', '-')

  return ( 
    <Link  
      className="bg-white aspect-[12/4] rounded-xl flex justify-center items-center"
      to={`/${route}`}
    >
      { page }
    </Link>  
  )
}

export default Menu 
