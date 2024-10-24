import { useState } from 'react'
import CharactersPage from './components/CharactersPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CharacterPage from './components/CharacterPage'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CharactersPage />}/>
          {/* sets up an id parameter in our url */}
          <Route path='/:id' element={<CharacterPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App