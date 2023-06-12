import { useMemory } from "../../contexts/MemoryContext"

const Result = () => {
	const { idFoundPairsCards, cards, numbersCardsFlipped, resetGame } = useMemory() 

  const finished = cards.length === idFoundPairsCards.length * 2
  const hitRate = cards.length / numbersCardsFlipped * 100

	return (
		<div 
			className={`fixed top-0 flex justify-center items-center w-full 
			h-full backdrop-blur-sm ${finished ? '' : 'hidden'}`}
		>
			<div 
				className="flex flex-col items-center text-white gap-y-5
				bg-gray-500 p-8 rounded-xl"
			>
				<p>Seu nível de memória é:</p>
				<h1>Bom</h1>
				<p>
					<strong>Taxa de acertos:</strong>
					<span className="ml-2">{hitRate.toFixed(0)}%</span>
				</p>

				<button 
          onClick={resetGame}
          className="bg-black py-2 w-1/2 rounded-xl hover:cursor-pointer"
        >
					Nova partida
				</button>

				<p>
					<small>
						* Essa análise é ilustrativa e não possui base científica.
					</small>
				</p>
			</div>
		</div>
	)
}

export default Result
