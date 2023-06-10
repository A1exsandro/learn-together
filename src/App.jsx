import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Layout from "./layout/Layout"
import Home from "./pages/Home"
import TicTacToe from "./pages/TicTacToe"
import Words from "./pages/Words"

const App = () => {

  return (
    <BrowserRouter> 
      <Routes>  
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/tictactoe" element={<TicTacToe />} />
          <Route path="/words" element={<Words />} />
        </Route>  
      </Routes> 
    </BrowserRouter>  
  )
}

export default App
