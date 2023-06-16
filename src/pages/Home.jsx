import React from "react" 

const Home = () => { 
  const pages = ['Day Of Week', 'Month Names', 'Greetings', 'Colors', 'Body Parts', 'Phrasal verbs']

  return(
    <div className="flex justify-center items-center p-4">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
        {
          pages.map((page, i) => (
            <div 
              key={i} 
              className="bg-white aspect-[12/4] rounded-xl flex justify-center items-center"
            >
              {page}
            </div>
          ))
        }
      </div> 
    </div>
  )
}

export default Home
