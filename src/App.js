import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ErrorPage from './components/ErrorPage/ErrorPage'
import Home from './components/Home/Home'
import TeamDetails from './components/TeamDetails/TeamDetails'
import Teams from './components/Teams/Teams'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/teams'>
          <Teams />
        </Route>
        <Route path='/details'>
          <TeamDetails />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/team/:idTeam'>
          <TeamDetails />
        </Route>
        <Route exact path='*'>
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
