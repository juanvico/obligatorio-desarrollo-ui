import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import Login from '../Login'
import Register from '../Register'

const Auth = ({ match }) => {
  return (
    <Switch>
      <Route exact path={`${match.path}/login`} component={Login} />
      <Route exact path={`${match.path}/signup`} component={Register} />
    </Switch>
  )
}

export default withRouter(Auth)
