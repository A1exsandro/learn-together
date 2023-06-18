import React from "react" 
import Menu from "../components/menu"

const Home = () => { 
  const pages = ['listen', 'Days Of The Week', 'Month Names', 'Greetings',
   'Colors', 'Body Parts', 'Phrasal verbs']

  return(
    <div className="flex justify-center items-center p-4">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
        {
          pages.map((page, i) => (
            <Menu key={i} page={page }/>
          ))
        }
      </div> 
    </div>
  )
}

export default Home
