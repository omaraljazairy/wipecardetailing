import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MainNavbar from './components/Navbar'
import { MainFooter } from './components/Footer'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Service } from './pages/Service'
import { Contact } from './pages/Contact'
import { About } from './pages/About'
import { NoMatch } from './pages/NoMatch'

function App () {
  return (
    <>
      <Router>
        <MainNavbar />
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/service' component={Service} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route component={NoMatch} />
          </Switch>
        </Layout>
      </Router>
      <MainFooter />
    </>
  )
}

export default App
