import React, { useState, useMemo, useEffect } from "react"
import { useForm } from "react-hook-form" 
import { useFetch } from "../hooks/useFetch" 

const Write = () => {
  const { makedCards } = useFetch()
  const [endList, setEndList] = useState([])
  const [answer, setAnswer] = useState(0)
  const [inputData, setInputData] = useState(null)
  const [amountOfTest, setAmountOfTest] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [wrong, setWrong] = useState(0)

  const { register, handleSubmit } = useForm()
  const onSubmit = data => setInputData(data.answer)
 
  const randomNumber = useMemo(() => Math.floor(Math.random() * 6), [correct]) 

  const listen = makedCards[randomNumber]
  console.log('listen',makedCards[randomNumber].nameImg) 

  useEffect(() => {
    const shuffleCards = (list = []) => {
      const smallList = [{}]
      for (let i = 0; i < 5; i++) { 
        smallList[i] = list[i] 
      }
      return smallList
    }
    setEndList(shuffleCards(makedCards))
  },[])

  // EXERCISE LOGIC
  useEffect(() => {
    if (inputData === null) return 

    if (inputData === listen.nameImg) {
      setAmountOfTest(amount => amount + 1)
      setCorrect(amount => amount + 1)
      setAnswer(1)
    } else {
      setAmountOfTest(amount => amount + 1)
      setWrong(amount => amount + 1)
      setAnswer(-1)
    } 
  },[inputData]) 

  return (
    <div className="flex flex-col items-center w-80 m-auto p-2">
      <h1>Write</h1>

      {/* Score */}
      <div className="w-full text-center py-2">
        <div className="bg-orange-500 rounded-full px-3 mb-2">
          Amount of test: {amountOfTest}
        </div>

        <div className="flex justify-between">
          <div className="bg-green-500 rounded-full px-3">
            Correct: {correct}
          </div>
          <div className="bg-red-500 rounded-full px-3">
            Wrong: {wrong}
          </div>
        </div>
      </div>

      {/* TIPS */}
      {
        answer >= 0 ? ( answer === 0 ? 
          <div 
            className="bg-orange-500 p-4 rounded-full w-full text-center mt-4 font-bold"
          >
            Listen and write the correct word
          </div> 
          :
          <div 
            className="bg-green-500 p-4 rounded-full w-full text-center mt-4 font-bold"
          >
            Great Job
          </div>
        ) : (
          <div 
            className="bg-red-500 p-4 rounded-full w-full text-center font-bold mt-4 text-white"
          >
            Try Again
          </div>
        )
      }

      <form 
        className="flex flex-col my-4 w-full" 
        onSubmit={handleSubmit(onSubmit)}
      >
        <input 
          className="p-4 mb-4 rounded-full text-center"
          placeholder="listen and write"
          {...register("answer")}
        />

        <input 
          className="bg-orange-500 p-4 rounded-full"
          type="submit" 
        />
      </form> 

      <audio src={listen.urlSound} controls className="w-full"/>
    </div>
  )
}

export default Write
        