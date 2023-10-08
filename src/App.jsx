
import './App.css'
import NavBar from './components/NavBar/NavBar'
import MainRouting from './routings/MainRouting'
import ThemeContext from './components/context/ThemeContext'
import { useEffect, useState } from 'react'

function App() {

  const [theme, setTheme] = useState('dark')

  useEffect(() => {

      const userTheme = localStorage.getItem('app-theme');
      if(userTheme != null){
        setTheme(userTheme)
      }
      
  }, [])

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
