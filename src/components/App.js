import React from 'react'
import '../styles/style.scss'
import '../styles/nullstyle.scss'
import Header from './header/header'
import CartBody from './cartBody/cartBody'



const App = () => {
  return (
    <section className="section-cart">
      <Header/>
      <CartBody/>
      
    </section>


  )
}

export default App