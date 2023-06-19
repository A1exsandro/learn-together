import React, { useState } from "react"
import { Outlet, Link } from "react-router-dom"  

const Layout = () => {  
  const [none, setNone] = useState(false)

  const toggleMenu = () => {
    setNone(!none)
  }   

  return (
    <>
      <nav className="flex justify-between items-center bg-black">
        <div 
          className="bg-black text-white px-5 py-2 hover:bg-slate-500
          hover:cursor-pointer" 
          onClick={toggleMenu}
        >
          Menu
        </div>  
      </nav>
      
      <div className={` ${none ? "" : "hidden"} bg-black text-white`}>
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
      
      <Outlet />
    </>
  )
};
  
export default Layout
