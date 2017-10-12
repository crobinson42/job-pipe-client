import React from 'react'
import { Route, Switch } from 'react-router-dom'

import asyncComponent from 'components/AsyncComponent/index'

import AuthenticatedRoutes from './AuthenticatedRoutes'
import DashboardPageWrapper from 'components/DashboardWrapper'

const EditPosting = asyncComponent(() => import('pages/EditPosting'))
const Postings = asyncComponent(() => import('pages/Postings'))
const Applicants = asyncComponent(() => import('pages/Applicants'))
const Dashboard = asyncComponent(() => import('pages/Dashboard'))
const AccountSettings = asyncComponent(() => import('pages/AccountSettings'))
const UserSettings = asyncComponent(() => import('pages/UserSettings'))

const DashboardRoutes = () => (
  <AuthenticatedRoutes>
    <DashboardPageWrapper>
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/dashboard/postings" component={Postings} />
        <Route exact path="/dashboard/postings/create" component={EditPosting} />
        <Route path="/dashboard/postings/:id" component={EditPosting} />
        <Route exact path="/dashboard/applicants" component={Applicants} />
        <Route path="/dashboard/settings/account" component={AccountSettings} />
        <Route path="/dashboard/settings/user" component={UserSettings} />
      </Switch>
    </DashboardPageWrapper>
  </AuthenticatedRoutes>
)

export default DashboardRoutes
