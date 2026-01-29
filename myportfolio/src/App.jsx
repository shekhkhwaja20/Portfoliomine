import React from 'react'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <div>
      <Nav/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      
    </div>
  )
}

export default App