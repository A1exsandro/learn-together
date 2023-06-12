
const Card = ({ id, idBoth, cardName}) => { 
  return (
    <div className="">
      <div className="aspect-[3/4] card-container hover:rotateY ">
        
        {/* FRONT OF CARD */}
        <div className="flex justify-center items-center flip bg-orange-400 rotateY rounded-lg">
          <h1 className="">Front</h1>
        </div>

        {/* BACK OF CARD */}
        <div className="flex justify-center items-center bg-red-400 flip backface-none rounded-lg">
          <h1 className="">{cardName}</h1>
        </div>

      </div>
    </div>
  )
}

export default Card
