import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import asyncComponent from '../components/AsyncComponent/index'
import DashboardRoutes from './DashboardRoutes'

const Home = asyncComponent(() => import('pages/Home'))
const Login = asyncComponent(() => import('pages/Login'))
// const Logout = asyncComponent(() => import('pages/Logout'))

export const history = createBrowserHistory()

export default () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Home} />

      <Route path="/dashboard">
        <DashboardRoutes />
      </Route>

      <Route path="/login" component={Login} />
    </Switch>
  </Router>
)
