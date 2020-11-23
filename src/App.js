import React from 'react'

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import MenuNav from './comp/MenuNav'
import Footer from './comp/Footer'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <MenuNav />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  )
}






