import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import GlobalStyle from './globalStyles'
import BuscadorCnj from './pages/BuscadorCnj'

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path='/'>
          <BuscadorCnj />
        </Route>
      </Switch>
    </Router>
  )
}

export default App