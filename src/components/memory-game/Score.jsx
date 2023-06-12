
const Score = () => {
  return (
    <div className="flex justify-between mb-1">
      <Points titulo="Score" value={0} />
      <Points titulo="Card Flipped" value={0} />
    </div>
  )
}

const Points = ({titulo, value}) => {
  return (
    <div className="">
      <strong>{titulo}:</strong>
      <span className="ml-2">{value}</span>
    </div>
  )
}

export default Score
