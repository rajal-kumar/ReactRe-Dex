import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Login from './Login'
import Register from './Register'
import Nav from './Nav'
import PokemonList from './PokemonList'


const App = () => (
  <Router>
    <div className='container'>
      <Nav />
      <hr />
      <Route exact path="/" component={PokemonList} />
      <Route path="/login" component={Login} />
      <Route path="/Register" component={Register} />
    </div>
  </Router>
)

export default App
