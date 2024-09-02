import React from 'react'
import Home from './Components/Home'
import { Provider } from 'react-redux'
import { store } from './Redux/store'
import Header from './Components/Header'
const App = () => {
  return (
    <>
    <Header/>
    <Home/>
    </>

  )
}

export default App