import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Listing from './Components/Listing/Listing'
import Search from './Components/Search/Search'
import Value from './Components/Value/Value'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Search/>
      <Listing/>
      <Value/>
      <Footer/>
    </div>
  )
}

export default App