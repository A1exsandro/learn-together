import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MemoryContextProvider } from "./contexts/MemoryContext"

import Layout from "./layout/Layout"
import BodyParts from "./pages/BodyParts"
import Colors from "./pages/Colors"
import Greetings from "./pages/Greeting"
import Home from "./pages/Home"
import Listen from "./pages/Listen"
import MemoryGame from "./pages/MemoryGame"
import MonthNames from "./pages/MonthNames"
import TicTacToe from "./pages/TicTacToe" 
import WeekDays from "./pages/WeekDays"
import Write from "./pages/write"

const App = () => {

  return (
    <BrowserRouter> 
      <Routes>  
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/tictactoe" element={<TicTacToe />} /> 
          <Route path="/listen" element={<Listen />} />
          <Route path="/write" element={<Write />} />
          <Route path="/days-of-the-week" element={<WeekDays />} />
          <Route path="/month-names" element={<MonthNames />} />
          <Route path="/greetings" element={<Greetings />} />
          <Route path="/colors" element={<Colors />} />
          <Route path="/body-parts" element={<BodyParts />} />
          <Route path="/phrasal-verbs" element={<BodyParts />} />

          <Route path="/memory-game" element={
            <MemoryContextProvider>
              <MemoryGame />
            </MemoryContextProvider>
          } />
        </Route>  
      </Routes> 
    </BrowserRouter>  
  )
}

export default App
