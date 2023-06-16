import React from "react"

const Menu = ({ page }) => { 
  const handleClick = () => {
    alert(page)
  }

  return (
    <div 
      onClick={handleClick}
      className="bg-white aspect-[12/4] rounded-xl flex justify-center items-center"
    >
      { page }
    </div>
  )
}

export default Menu 
