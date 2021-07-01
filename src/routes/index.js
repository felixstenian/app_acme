import React from 'react'
import { Switch } from 'react-router-dom'

import { CustomRouter } from './CustomRouter'

import { SignIn } from '../pages/SignIn'
import { Dashboard } from '../pages/Dashboard'

export function Routes () {
  return (
      <Switch>
        <CustomRouter path='/' exact component={SignIn} />
        <CustomRouter path='/dashboard' component={Dashboard} isPrivate />
      </Switch>
  )
}
