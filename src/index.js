import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import BLANKPAGE from './views/blank-page'
import ClassicTarot from './views/classic-tarot'
import TESTER from './views/tester'
import Testimonials from './views/testimonials'
import TaroHealing from './views/taro-healing'
import Packages from './views/packages'
import Page from './views/page'
import Home from './views/home'
import SpiritualSession from './views/spiritual-session'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={BLANKPAGE} exact path="/blank-page" />
        <Route component={ClassicTarot} exact path="/classic-tarot" />
        <Route component={TESTER} exact path="/tester" />
        <Route component={Testimonials} exact path="/testimonials" />
        <Route component={TaroHealing} exact path="/taro-healing" />
        <Route component={Packages} exact path="/packages" />
        <Route component={Page} exact path="/page" />
        <Route component={Home} exact path="/" />
        <Route component={SpiritualSession} exact path="/spiritual-session" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
