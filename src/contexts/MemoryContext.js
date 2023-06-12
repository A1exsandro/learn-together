import { createContext, useContext } from "react"

const MemoryContext = createContext()

export const MemoryContextProvider = (props) => {
  const value = {
    context: 'Working...'
  }

  return (
    <MemoryContext.Provider value={{value}}>
      { props.children }
    </MemoryContext.Provider>
  )
}

export const useMemory = () => {
  return useContext(MemoryContext)
} 
