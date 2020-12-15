import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
import Login from './pages/Login'
import Menu from './pages/Menu'
import incluirRecado from './pages/screen/IncluirRecado'
import CriarUsuario from './pages/screen/CriarUsuario'


export default function App() {

  const PrivateRoute = ({ component: Component}) => {

    return <Route
      render={(props => {
        let isAuthenticated = sessionStorage.getItem("uuid")
        if (isAuthenticated) {
          return <Component {...props} />
        } else {
          return <Redirect to={{ pathname: "/" }} />
        }
      })}

    />
  }


  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact={true} component={Login} />
        <Route path="/Recado" component={incluirRecado} />
        <Route path="/criarUser" component={CriarUsuario} />
        <PrivateRoute path="/menu" component={Menu} />

      </Switch>

    </HashRouter>
  )
}
