
import './App.css'
import NavBar from './components/NavBar/NavBar'
import MainRouting from './routings/MainRouting'
import ThemeContext from './components/context/ThemeContext'
import { useState } from 'react'

function App() {

  const [theme, setTheme] = useState('dark')

  return (
    <>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <div id='theme-wrapper' data-theme-mode={theme}>
          <NavBar />
          <MainRouting />
        </div>
      </ThemeContext.Provider>
      
    </>
  )
}

export default App
