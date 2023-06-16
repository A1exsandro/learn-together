import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MemoryContextProvider } from "./contexts/MemoryContext"

import Layout from "./layout/Layout"
import Home from "./pages/Home"
import MemoryGame from "./pages/MemoryGame"
import MonthNames from "./pages/MonthNames"
import TicTacToe from "./pages/TicTacToe" 
import WeekDays from "./pages/WeekDays"

const App = () => {

  return (
    <BrowserRouter> 
      <Routes>  
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/tictactoe" element={<TicTacToe />} /> 
          <Route path="/days-of-the-week" element={<WeekDays />} />
          <Route path="/month-names" element={<MonthNames />} />
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
