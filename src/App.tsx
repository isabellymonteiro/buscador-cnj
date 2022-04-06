import { 
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import GlobalStyle from './globalStyles'
import BuscadorCnj from './pages/BuscadorCnj'
import Processo from './pages/Processo'

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path='/'>
          <BuscadorCnj />
        </Route>
        <Route exact path='/proc/:procNum' >
          <Processo />
        </Route>
      </Switch>
    </Router>
  )
}

export default App