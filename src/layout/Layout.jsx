import React, { useState } from "react"
import { Outlet, Link } from "react-router-dom"  

const Layout = () => {  
  const [none, setNone] = useState(false)

  const toggleMenu = () => {
    setNone(!none)
  }   

  return (
    <>
      <nav className="w-full flex items-center py-2 fixed top-0
      bg-black mb-2">
        <div 
          className="bg-black text-white px-5 py-2 hover:bg-slate-500
          hover:cursor-pointer rounded-full" 
          onClick={toggleMenu}
        >
          Menu
        </div>  
      </nav>
      
      <div className={` ${none ? "" : "hidden"} fixed w-full mt-12 bg-black text-white`}>
        <div className="flex flex-col w-1/3 p-2">

					<div 
            onClick={toggleMenu}
            className="hover:bg-slate-500 hover:cursor-pointer
            hover:pl-4 hover:text-lime-500"
          ><Link to="/">Home</Link></div>
       
          <div 
            onClick={toggleMenu}
            className="hover:bg-slate-500 hover:cursor-pointer
            hover:pl-4 hover:text-lime-500"
          ><Link to="/tictactoe">Jogo da Velha</Link></div> 

          <div 
            onClick={toggleMenu}
            className="hover:bg-slate-500 hover:cursor-pointer
            hover:pl-4 hover:text-lime-500"
          ><Link to="/memory-game">Memory Game</Link></div>

        </div> 
      </div>

      <div className="w-full h-20 "></div>
      
      <Outlet />
    </>
  )
};
  
export default Layout
