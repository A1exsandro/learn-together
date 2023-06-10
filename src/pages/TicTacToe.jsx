import React, { useEffect, useState } from 'react'  

const TicTacToe = () => {
  const emptyBoard = Array(9).fill("") 
  const [board, setBoard] = useState(emptyBoard) 
  const [currentPlayer, setCurrentPlayer] = useState('O') 
  const [winner, setWinner] = useState(null) 

  const handleCellClick = (index) => {
    if(winner) return 
    if(board[index] !== '') return 
    setBoard(board.map((item, itemIndex) => itemIndex === index ? currentPlayer : item)) 

    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X') 
  } 

  useEffect(() => {  
    const possibleWaysToWin = [
      [board[0], board[1], board[2]],
      [board[3], board[4], board[5]],
      [board[6], board[7], board[8]],

      [board[0], board[3], board[6]],
      [board[1], board[4], board[7]],
      [board[2], board[5], board[8]],

      [board[0], board[4], board[8]],
      [board[2], board[4], board[6]]
    ] 

    possibleWaysToWin.forEach(cells =>  {
      if(cells.every(cell => cell === 'O')) setWinner('O') 
      if(cells.every(cell => cell === 'X')) setWinner('X') 
    }) 

    const checkDraw = () => {
      if(board.every(item => item !== '')) setWinner('E') 
    }

      
    checkDraw() 
   
  }, [board]) 

  const resetGame = () => {
    setCurrentPlayer('O') 
    setBoard(emptyBoard) 
    setWinner(null) 
  }

  return(
    <main className='flex flex-col justify-center items-center w-screen'>
      <h1 className='text-4xl my-8'>Jogo da Velha</h1>

      <div 
        className={`grid gap-2 grid-cols-3 grid-rows-3 ${winner ? 'game-over' : ''}`}
      >
        {
          board.map((item, index) => (
            <div 
              key={index}
              className={`flex justify-center items-center  
              w-28 h-28 rounded-lg font-black text-lg hover:cursor-pointer 
              ${ item === 'O' ? 'bg-blue-400' : (item === 'X' ? 'bg-red-400' : 'bg-white')}`}
              onClick={() => handleCellClick(index)}
            >
              {item}
            </div>
          ))
        }
      </div>

      { winner &&
        <footer className='text-center'>
          {
            winner === 'E' 
            ?
              <h2 className='m-8'>
                <span className={winner}>Empatou!</span>
              </h2>
            :
              <h2 className='m-8'>
                <span 
                  className={`p-2 mr-2 rounded-full ${winner === 'O' ? 'bg-blue-400' : 'bg-red-400' }`}
                >
                  {winner}
                </span> 
                Venceu!
              </h2>
          }
          <button 
            className='bg-black text-white p-2 rounded-lg hover:bg-slate-600'
            onClick={resetGame}
          >
            Recomeçar o Jogo!
          </button>
        </footer>
      }
    </main>
  ) 
}

export default TicTacToe 
